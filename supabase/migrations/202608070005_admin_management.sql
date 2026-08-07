begin;

alter table public.app_users
  add column if not exists position_title text not null default '',
  add column if not exists access_expires_on date;

alter table public.app_users
  drop constraint if exists app_users_position_title_length;
alter table public.app_users
  add constraint app_users_position_title_length check (char_length(position_title) <= 50);

update public.app_users
set position_title = '비상용 관리자',
    access_expires_on = null,
    updated_at = now()
where id = 'superadmin_emergency';

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
  where auth_user_id = v_auth_user_id
    and active
    and (access_expires_on is null or access_expires_on >= current_date)
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
    and (access_expires_on is null or access_expires_on >= current_date)
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
  v_name text;
  v_position_title text;
  v_expires_text text;
  v_expires_on date;
  v_remaining_admins integer;
  v_new_id text;
  v_new_code text;
begin
  if v_auth_user_id is null then
    return jsonb_build_object('ok', false, 'code', 'AUTH_REQUIRED', 'error', '로그인이 필요합니다.');
  end if;

  select * into v_user
  from public.app_users
  where auth_user_id = v_auth_user_id
    and active
    and (access_expires_on is null or access_expires_on >= current_date)
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

  if v_action in ('getAdmins', 'createAdminInvitation', 'updateAdmin', 'regenerateAdminCode', 'deactivateAdmin', 'reactivateAdmin') then
    if v_user.role <> '최고권한' then
      return jsonb_build_object('ok', false, 'error', '최고권한만 최고권한 계정을 관리할 수 있습니다.');
    end if;

    if v_action = 'getAdmins' then
      select coalesce(jsonb_agg(jsonb_build_object(
        'userId', u.id,
        'name', u.name,
        'positionTitle', u.position_title,
        'expiresOn', coalesce(to_char(u.access_expires_on, 'YYYY-MM-DD'), ''),
        'active', u.active,
        'expired', u.access_expires_on is not null and u.access_expires_on < current_date,
        'accountLinked', u.auth_user_id is not null,
        'email', coalesce(a.email, ''),
        'protected', u.id = 'superadmin_emergency',
        'isSelf', u.auth_user_id = v_auth_user_id,
        'code', case when u.active and u.auth_user_id is null then u.access_code else '' end
      ) order by (u.id = 'superadmin_emergency') desc, u.active desc, u.created_at), '[]'::jsonb)
      into v_result
      from public.app_users u
      left join auth.users a on a.id = u.auth_user_id
      where u.role = '최고권한';
      return jsonb_build_object('ok', true, 'admins', v_result);
    end if;

    v_new_id := trim(coalesce(p_request->>'userId', ''));
    if v_action <> 'createAdminInvitation' then
      select * into v_target
      from public.app_users
      where id = v_new_id and role = '최고권한'
      limit 1;
      if v_target.id is null then
        return jsonb_build_object('ok', false, 'error', '해당 최고권한 계정을 찾을 수 없습니다.');
      end if;
    end if;

    if v_action in ('createAdminInvitation', 'updateAdmin') then
      v_name := trim(coalesce(p_request->>'name', ''));
      v_position_title := trim(coalesce(p_request->>'positionTitle', ''));
      v_expires_text := trim(coalesce(p_request->>'expiresOn', ''));
      if char_length(v_name) < 2 or char_length(v_name) > 50 then
        return jsonb_build_object('ok', false, 'error', '이름은 2~50자로 입력하세요.');
      end if;
      if char_length(v_position_title) < 2 or char_length(v_position_title) > 50 then
        return jsonb_build_object('ok', false, 'error', '직책은 2~50자로 입력하세요.');
      end if;
      if v_expires_text = '' then
        v_expires_on := null;
      elsif v_expires_text !~ '^\d{4}-\d{2}-\d{2}$' then
        return jsonb_build_object('ok', false, 'error', '임기 종료일 형식이 올바르지 않습니다.');
      else
        begin
          v_expires_on := v_expires_text::date;
        exception when others then
          return jsonb_build_object('ok', false, 'error', '임기 종료일이 올바르지 않습니다.');
        end;
      end if;
      if v_expires_on is not null and v_expires_on < current_date then
        return jsonb_build_object('ok', false, 'error', '임기 종료일은 오늘 이후로 지정하세요.');
      end if;
    end if;

    if v_action = 'createAdminInvitation' then
      v_new_id := 'admin-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 16);
      v_new_code := public.attendance_generate_code('admin');
      insert into public.app_users (
        id, name, role, group_id, member_id, access_code, active, note, position_title, access_expires_on
      ) values (
        v_new_id, v_name, '최고권한', null, null, v_new_code, true, '개인 최고권한', v_position_title, v_expires_on
      );
      return jsonb_build_object('ok', true, 'userId', v_new_id, 'code', v_new_code);
    end if;

    if v_action = 'updateAdmin' then
      if v_target.id = 'superadmin_emergency' then
        return jsonb_build_object('ok', false, 'error', '비상용 admin 계정은 수정할 수 없습니다.');
      end if;
      update public.app_users
      set name = v_name,
          position_title = v_position_title,
          access_expires_on = v_expires_on,
          updated_at = now()
      where id = v_target.id;
      return jsonb_build_object('ok', true);
    end if;

    if v_action = 'regenerateAdminCode' then
      if not v_target.active then
        return jsonb_build_object('ok', false, 'error', '비활성 계정은 먼저 다시 활성화하세요.');
      end if;
      if v_target.access_expires_on is not null and v_target.access_expires_on < current_date then
        return jsonb_build_object('ok', false, 'error', '임기 종료일을 먼저 수정하세요.');
      end if;
      if v_target.id = 'superadmin_emergency' then
        return jsonb_build_object('ok', false, 'error', '비상용 admin 계정의 연결 코드는 재발급할 수 없습니다.');
      end if;
      if v_target.auth_user_id is not null then
        return jsonb_build_object('ok', false, 'error', '이미 이메일 계정이 연결됐습니다. 비밀번호 찾기를 사용하세요.');
      end if;
      v_new_code := public.attendance_generate_code('admin');
      update public.app_users set access_code = v_new_code, updated_at = now() where id = v_target.id;
      return jsonb_build_object('ok', true, 'code', v_new_code);
    end if;

    if v_action = 'deactivateAdmin' then
      if v_target.id = 'superadmin_emergency' then
        return jsonb_build_object('ok', false, 'error', '비상용 admin 계정은 비활성화할 수 없습니다.');
      end if;
      if v_target.auth_user_id = v_auth_user_id then
        return jsonb_build_object('ok', false, 'error', '현재 로그인한 자기 계정은 비활성화할 수 없습니다.');
      end if;
      select count(*) into v_remaining_admins
      from public.app_users
      where role = '최고권한' and active and id <> v_target.id
        and (access_expires_on is null or access_expires_on >= current_date);
      if v_remaining_admins < 1 then
        return jsonb_build_object('ok', false, 'error', '마지막 최고권한 계정은 비활성화할 수 없습니다.');
      end if;
      update public.app_users set active = false, updated_at = now() where id = v_target.id;
      return jsonb_build_object('ok', true);
    end if;

    if v_action = 'reactivateAdmin' then
      if v_target.active then
        return jsonb_build_object('ok', false, 'error', '이미 활성 상태입니다.');
      end if;
      if v_target.access_expires_on is not null and v_target.access_expires_on < current_date then
        return jsonb_build_object('ok', false, 'error', '임기 종료일을 먼저 수정하세요.');
      end if;
      update public.app_users set active = true, updated_at = now() where id = v_target.id;
      return jsonb_build_object('ok', true);
    end if;
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
    v_result := jsonb_set(
      v_result,
      '{user}',
      coalesce(v_result->'user', '{}'::jsonb) || jsonb_build_object(
        'positionTitle', v_user.position_title,
        'expiresOn', coalesce(to_char(v_user.access_expires_on, 'YYYY-MM-DD'), '')
      )
    );
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

revoke all on function public.attendance_claim_account(text) from public, anon;
grant execute on function public.attendance_claim_account(text) to authenticated;
revoke all on function public.attendance_api(jsonb) from public, anon;
grant execute on function public.attendance_api(jsonb) to authenticated;

commit;
