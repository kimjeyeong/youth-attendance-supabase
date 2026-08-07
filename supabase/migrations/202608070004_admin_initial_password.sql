begin;

alter table public.app_users
  add column if not exists must_change_password boolean not null default false;

update public.app_users
set must_change_password = true,
    updated_at = now()
where id = 'superadmin_emergency';

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

  if v_action = 'completePasswordChange' then
    update public.app_users
    set must_change_password = false,
        updated_at = now()
    where id = v_user.id;
    return jsonb_build_object('ok', true);
  end if;

  if v_user.must_change_password and v_action <> 'login' then
    return jsonb_build_object(
      'ok', false,
      'code', 'PASSWORD_CHANGE_REQUIRED',
      'error', '초기 비밀번호를 변경해야 합니다.'
    );
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

  if v_action = 'login' and coalesce((v_result->>'ok')::boolean, false) then
    v_result := v_result || jsonb_build_object('mustChangePassword', v_user.must_change_password);
  end if;

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

revoke all on function public.attendance_api(jsonb) from public, anon;
grant execute on function public.attendance_api(jsonb) to authenticated;

commit;
