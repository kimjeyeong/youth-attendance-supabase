begin;

-- 기존 비상용 계정의 로그인 연결을 admin으로 옮기고,
-- admin을 시스템이 보호하는 유일한 비상용 관리자 계정으로 만든다.
do $$
declare
  v_emergency public.app_users%rowtype;
  v_admin public.app_users%rowtype;
begin
  select * into v_emergency
  from public.app_users
  where id = 'superadmin_emergency'
  for update;

  select * into v_admin
  from public.app_users
  where id = 'u14'
  for update;

  if v_emergency.id is null then
    raise exception '기존 비상용 관리자 계정을 찾을 수 없습니다.';
  end if;
  if v_admin.id is null then
    raise exception 'admin 계정을 찾을 수 없습니다.';
  end if;
  if exists (select 1 from public.app_users where id = 'superadmin_retired') then
    raise exception '이미 통합된 비상용 관리자 계정이 있습니다.';
  end if;
  if v_emergency.auth_user_id is null then
    raise exception '기존 비상용 관리자에 로그인 계정이 연결되어 있지 않습니다.';
  end if;
  if v_admin.auth_user_id is not null
     and v_admin.auth_user_id <> v_emergency.auth_user_id then
    raise exception 'admin에 다른 로그인 계정이 이미 연결되어 있습니다.';
  end if;

  -- 왼쪽 계정은 복구 가능하도록 행을 남기되 로그인 연결을 끊고 비활성화한다.
  update public.app_users
  set id = 'superadmin_retired',
      auth_user_id = null,
      active = false,
      note = 'admin 계정으로 통합되어 비활성화됨',
      updated_at = now()
  where id = v_emergency.id;

  -- 보호 규칙이 사용하는 고정 ID를 admin에 넘겨 기존 안전장치를 그대로 유지한다.
  update public.app_users
  set id = 'superadmin_emergency',
      name = 'admin',
      role = '최고권한',
      group_id = null,
      member_id = null,
      auth_user_id = v_emergency.auth_user_id,
      access_code = 'internal-' || replace(gen_random_uuid()::text, '-', ''),
      active = true,
      note = '비상용 관리자',
      position_title = '비상용 관리자',
      access_expires_on = null,
      must_change_password = v_emergency.must_change_password,
      permission_level = 'owner',
      updated_at = now()
  where id = v_admin.id;

  -- 008 보안 마이그레이션이 먼저 적용된 환경에서는 감사 로그도 남긴다.
  if to_regprocedure('public.attendance_audit(text,uuid,text,text,boolean,jsonb)') is not null then
    execute 'select public.attendance_audit($1, $2, $3, $4, $5, $6)'
    using
      'superadmin_emergency',
      v_emergency.auth_user_id,
      'admin',
      'consolidateEmergencyAdmin',
      true,
      jsonb_build_object(
        'retiredUserId', 'superadmin_retired',
        'activeUserId', 'superadmin_emergency'
      );
  end if;
end;
$$;

commit;
