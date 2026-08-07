begin;

alter table public.app_users
  add column if not exists permission_level text not null default 'leader';

alter table public.app_users
  drop constraint if exists app_users_permission_level_check;
alter table public.app_users
  add constraint app_users_permission_level_check
  check (permission_level in ('owner', 'executive', 'discipleship', 'leader'));

-- 기존 최고권한 계정은 권한을 잃지 않도록 진짜 최고권한으로 유지한다.
update public.app_users
set permission_level = case when role = '최고권한' then 'owner' else 'leader' end,
    updated_at = now();

alter function public.attendance_api(jsonb) rename to attendance_api_admin_management_legacy;
revoke all on function public.attendance_api_admin_management_legacy(jsonb) from public, anon, authenticated;

create or replace function public.attendance_api(p_request jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_auth_user_id uuid := auth.uid();
  v_action text := trim(coalesce(p_request->>'action', ''));
  v_requested_level text := trim(coalesce(p_request->>'permissionLevel', ''));
  v_user public.app_users%rowtype;
  v_target public.app_users%rowtype;
  v_result jsonb;
  v_admins jsonb := '[]'::jsonb;
  v_admin_item jsonb;
  v_item_level text;
  v_remaining_owners integer;
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

  if v_action in ('getAdmins', 'createAdminInvitation', 'updateAdmin', 'regenerateAdminCode', 'deactivateAdmin', 'reactivateAdmin')
     and v_user.permission_level <> 'owner' then
    return jsonb_build_object('ok', false, 'error', '진짜 최고권한만 권한을 관리할 수 있습니다.');
  end if;

  if v_user.permission_level = 'discipleship'
     and v_action in ('getLeaders', 'setLeader', 'clearLeader', 'regenerateCode', 'renewMembers', 'syncMemberGroupNames') then
    return jsonb_build_object('ok', false, 'error', '양육팀 권한으로는 리뉴얼과 순장 관리를 할 수 없습니다.');
  end if;

  if v_action in ('createAdminInvitation', 'updateAdmin') then
    if v_requested_level not in ('owner', 'executive', 'discipleship') then
      return jsonb_build_object('ok', false, 'error', '권한 등급을 선택하세요.');
    end if;

    if v_action = 'updateAdmin' then
      select * into v_target
      from public.app_users
      where id = trim(coalesce(p_request->>'userId', '')) and role = '최고권한'
      limit 1;

      if v_target.auth_user_id = v_auth_user_id and v_requested_level <> 'owner' then
        return jsonb_build_object('ok', false, 'error', '현재 로그인한 자기 계정의 진짜 최고권한을 해제할 수 없습니다.');
      end if;

      if v_target.permission_level = 'owner' and v_requested_level <> 'owner' then
        select count(*) into v_remaining_owners
        from public.app_users
        where role = '최고권한'
          and permission_level = 'owner'
          and active
          and id <> v_target.id
          and (access_expires_on is null or access_expires_on >= current_date);
        if v_remaining_owners < 1 then
          return jsonb_build_object('ok', false, 'error', '마지막 진짜 최고권한은 변경할 수 없습니다.');
        end if;
      end if;
    end if;
  end if;

  if v_action = 'deactivateAdmin' then
    select * into v_target
    from public.app_users
    where id = trim(coalesce(p_request->>'userId', '')) and role = '최고권한'
    limit 1;
    if v_target.permission_level = 'owner' then
      select count(*) into v_remaining_owners
      from public.app_users
      where role = '최고권한'
        and permission_level = 'owner'
        and active
        and id <> v_target.id
        and (access_expires_on is null or access_expires_on >= current_date);
      if v_remaining_owners < 1 then
        return jsonb_build_object('ok', false, 'error', '마지막 진짜 최고권한은 비활성화할 수 없습니다.');
      end if;
    end if;
  end if;

  v_result := public.attendance_api_admin_management_legacy(p_request);

  if not coalesce((v_result->>'ok')::boolean, false) then
    return v_result;
  end if;

  if v_action = 'createAdminInvitation' then
    update public.app_users
    set permission_level = v_requested_level,
        updated_at = now()
    where id = v_result->>'userId';
  elsif v_action = 'updateAdmin' then
    update public.app_users
    set permission_level = v_requested_level,
        updated_at = now()
    where id = trim(coalesce(p_request->>'userId', ''));
  elsif v_action = 'getAdmins' then
    for v_admin_item in select value from jsonb_array_elements(coalesce(v_result->'admins', '[]'::jsonb))
    loop
      select permission_level into v_item_level
      from public.app_users
      where id = v_admin_item->>'userId';
      v_admin_item := v_admin_item || jsonb_build_object(
        'permissionLevel', coalesce(v_item_level, 'executive'),
        'permissionLabel', case coalesce(v_item_level, 'executive')
          when 'owner' then '진짜 최고권한'
          when 'executive' then '운영진·목사'
          when 'discipleship' then '양육팀'
          else '순장'
        end
      );
      v_admins := v_admins || jsonb_build_array(v_admin_item);
    end loop;
    v_result := jsonb_set(v_result, '{admins}', v_admins);
  elsif v_action = 'login' then
    v_result := jsonb_set(
      v_result,
      '{user}',
      coalesce(v_result->'user', '{}'::jsonb) || jsonb_build_object(
        'permissionLevel', v_user.permission_level,
        'permissionLabel', case v_user.permission_level
          when 'owner' then '진짜 최고권한'
          when 'executive' then '운영진·목사'
          when 'discipleship' then '양육팀'
          else '순장'
        end
      )
    );
  end if;

  return v_result;
end;
$$;

revoke all on function public.attendance_api(jsonb) from public, anon;
grant execute on function public.attendance_api(jsonb) to authenticated;

commit;
