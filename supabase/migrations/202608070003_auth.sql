begin;

alter table public.app_users
  add column auth_user_id uuid unique references auth.users(id) on delete set null;

create table public.auth_claim_attempts (
  auth_user_id uuid primary key references auth.users(id) on delete cascade,
  window_started_at timestamptz not null default now(),
  failed_attempts integer not null default 0 check (failed_attempts between 0 and 5)
);

alter table public.auth_claim_attempts enable row level security;
revoke all on public.auth_claim_attempts from anon, authenticated;

-- 공개 배포 전에 기존의 짧은 코드를 강한 일회용 연결 코드로 전부 교체한다.
update public.app_users
set access_code = 'claim-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 16)
where active and auth_user_id is null;

create or replace function public.attendance_generate_code(p_prefix text)
returns text
language plpgsql
volatile
security definer
set search_path = ''
as $$
declare
  v_code text;
begin
  loop
    v_code := lower(p_prefix) || '-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 12);
    exit when not exists (select 1 from public.app_users where access_code = v_code);
  end loop;
  return v_code;
end;
$$;

-- 기존 API 본문은 그대로 보존하되 브라우저에서 직접 실행할 수 없게 숨긴다.
alter function public.attendance_api(jsonb) rename to attendance_api_legacy;
revoke all on function public.attendance_api_legacy(jsonb) from public, anon, authenticated;

create or replace function public.attendance_claim_account(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_auth_user_id uuid := auth.uid();
  v_user public.app_users%rowtype;
  v_attempt public.auth_claim_attempts%rowtype;
  v_email_confirmed_at timestamptz;
begin
  if v_auth_user_id is null then
    return jsonb_build_object('ok', false, 'error', '로그인이 필요합니다.');
  end if;

  select email_confirmed_at into v_email_confirmed_at
  from auth.users
  where id = v_auth_user_id;
  if v_email_confirmed_at is null then
    return jsonb_build_object('ok', false, 'error', '이메일 인증을 먼저 완료하세요.');
  end if;

  select * into v_user
  from public.app_users
  where auth_user_id = v_auth_user_id and active
  limit 1;
  if v_user.id is not null then
    return jsonb_build_object('ok', true, 'alreadyLinked', true);
  end if;

  insert into public.auth_claim_attempts(auth_user_id)
  values (v_auth_user_id)
  on conflict (auth_user_id) do nothing;

  select * into v_attempt
  from public.auth_claim_attempts
  where auth_user_id = v_auth_user_id
  for update;

  if v_attempt.window_started_at < now() - interval '1 hour' then
    update public.auth_claim_attempts
    set window_started_at = now(), failed_attempts = 0
    where auth_user_id = v_auth_user_id;
    v_attempt.failed_attempts := 0;
  end if;

  if v_attempt.failed_attempts >= 5 then
    return jsonb_build_object('ok', false, 'error', '연결 시도 횟수를 초과했습니다. 1시간 후 다시 시도하세요.');
  end if;

  select * into v_user
  from public.app_users
  where access_code = trim(coalesce(p_code, ''))
    and active
    and auth_user_id is null
  limit 1
  for update;

  if v_user.id is null then
    update public.auth_claim_attempts
    set failed_attempts = least(failed_attempts + 1, 5)
    where auth_user_id = v_auth_user_id;
    return jsonb_build_object('ok', false, 'error', '연결 코드가 올바르지 않습니다.');
  end if;

  update public.app_users
  set auth_user_id = v_auth_user_id,
      access_code = 'internal-' || replace(gen_random_uuid()::text, '-', '')
  where id = v_user.id;

  delete from public.auth_claim_attempts where auth_user_id = v_auth_user_id;
  return jsonb_build_object('ok', true, 'alreadyLinked', false);
exception
  when unique_violation then
    return jsonb_build_object('ok', false, 'error', '이미 다른 운영자 권한과 연결된 이메일입니다.');
end;
$$;

create or replace function public.attendance_api(p_request jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_auth_user_id uuid := auth.uid();
  v_action text := trim(coalesce(p_request->>'action', ''));
  v_user public.app_users%rowtype;
  v_target public.app_users%rowtype;
  v_previous public.app_users%rowtype;
  v_result jsonb;
  v_groups jsonb := '[]'::jsonb;
  v_group_item jsonb;
  v_group_leaders jsonb;
  v_leader_item jsonb;
  v_linked boolean;
begin
  if v_auth_user_id is null then
    return jsonb_build_object('ok', false, 'code', 'AUTH_REQUIRED', 'error', '로그인이 필요합니다.');
  end if;

  select * into v_user
  from public.app_users
  where auth_user_id = v_auth_user_id and active
  limit 1;
  if v_user.id is null then
    return jsonb_build_object('ok', false, 'code', 'ACCOUNT_NOT_LINKED', 'error', '운영자 권한을 연결하세요.');
  end if;

  if v_action = 'regenerateCode' then
    select * into v_target
    from public.app_users
    where id = trim(coalesce(p_request->>'userId', '')) and active
    limit 1;
    if v_target.auth_user_id is not null then
      return jsonb_build_object('ok', false, 'error', '이미 이메일 계정이 연결됐습니다. 로그인 화면의 비밀번호 찾기를 사용하세요.');
    end if;
  end if;

  v_result := public.attendance_api_legacy(
    p_request || jsonb_build_object('code', v_user.access_code)
  );

  -- 같은 사람이 다른 순의 순장으로 이동하면 기존 이메일 계정을 자동으로 넘긴다.
  if v_action = 'setLeader' and coalesce((v_result->>'ok')::boolean, false) then
    select * into v_target
    from public.app_users
    where id = v_result->>'userId'
    limit 1;
    if v_target.id is not null and v_target.auth_user_id is null then
      select * into v_previous
      from public.app_users
      where member_id = v_target.member_id
        and auth_user_id is not null
        and id <> v_target.id
      order by active desc, updated_at desc
      limit 1;
      if v_previous.id is not null then
        update public.app_users set auth_user_id = null where id = v_previous.id;
        update public.app_users
        set auth_user_id = v_previous.auth_user_id,
            access_code = 'internal-' || replace(gen_random_uuid()::text, '-', '')
        where id = v_target.id;
        v_result := v_result || jsonb_build_object('accountLinked', true, 'code', '');
      end if;
    end if;
  end if;

  -- 관리자 화면에는 미연결 사용자의 일회용 코드만 보여준다.
  if v_action = 'getLeaders' and coalesce((v_result->>'ok')::boolean, false) then
    for v_group_item in select value from jsonb_array_elements(v_result->'leaders')
    loop
      v_group_leaders := '[]'::jsonb;
      for v_leader_item in select value from jsonb_array_elements(coalesce(v_group_item->'leaders', '[]'::jsonb))
      loop
        select auth_user_id is not null into v_linked
        from public.app_users
        where id = v_leader_item->>'userId';
        v_leader_item := v_leader_item || jsonb_build_object(
          'accountLinked', coalesce(v_linked, false),
          'code', case when coalesce(v_linked, false) then '' else coalesce(v_leader_item->>'code', '') end
        );
        v_group_leaders := v_group_leaders || jsonb_build_array(v_leader_item);
      end loop;
      v_group_item := jsonb_set(v_group_item, '{leaders}', v_group_leaders);
      v_group_item := jsonb_set(v_group_item, '{code}', to_jsonb(coalesce(v_group_leaders->0->>'code', '')));
      v_groups := v_groups || jsonb_build_array(v_group_item);
    end loop;
    v_result := jsonb_set(v_result, '{leaders}', v_groups);
  end if;

  return v_result;
end;
$$;

revoke all on function public.attendance_generate_code(text) from public;
revoke all on function public.attendance_claim_account(text) from public, anon;
revoke all on function public.attendance_api(jsonb) from public, anon;
grant execute on function public.attendance_claim_account(text) to authenticated;
grant execute on function public.attendance_api(jsonb) to authenticated;

commit;
