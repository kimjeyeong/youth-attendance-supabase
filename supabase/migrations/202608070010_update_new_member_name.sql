begin;

alter function public.attendance_api(jsonb) rename to attendance_api_security_legacy;
revoke all on function public.attendance_api_security_legacy(jsonb) from public, anon, authenticated;

create or replace function public.attendance_api(p_request jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_auth_user_id uuid := auth.uid();
  v_action text := trim(coalesce(p_request->>'action', ''));
  v_member_id_text text := trim(coalesce(p_request->>'memberId', ''));
  v_member_id bigint;
  v_name text := trim(coalesce(p_request->>'name', ''));
  v_user public.app_users%rowtype;
  v_member public.members%rowtype;
  v_result jsonb;
begin
  if v_action <> 'updateMemberName' then
    return public.attendance_api_security_legacy(p_request);
  end if;

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
  if v_user.must_change_password then
    return jsonb_build_object(
      'ok', false,
      'code', 'PASSWORD_CHANGE_REQUIRED',
      'error', '초기 비밀번호를 변경해야 합니다.'
    );
  end if;

  if v_user.permission_level <> 'owner' then
    v_result := jsonb_build_object('ok', false, 'error', '진짜 최고권한만 신규자 이름을 수정할 수 있습니다.');
  elsif v_member_id_text !~ '^\d+$' then
    v_result := jsonb_build_object('ok', false, 'error', '수정할 신규자를 확인하세요.');
  elsif v_name = '' or char_length(v_name) > 50 then
    v_result := jsonb_build_object('ok', false, 'error', '이름은 1~50자로 입력하세요.');
  else
    v_member_id := v_member_id_text::bigint;
    select * into v_member
    from public.members
    where id = v_member_id and status = '신규자'
    for update;

    if v_member.id is null then
      v_result := jsonb_build_object('ok', false, 'error', '배정 대기 중인 신규자를 찾을 수 없습니다.');
    else
      update public.members
      set name = v_name,
          updated_at = now()
      where id = v_member_id;

      -- 추후 순장 계정과 연결돼 있더라도 표시 이름이 어긋나지 않게 맞춘다.
      update public.app_users
      set name = v_name,
          updated_at = now()
      where member_id = v_member_id;

      v_result := jsonb_build_object('ok', true, 'memberId', v_member_id_text, 'name', v_name);
    end if;
  end if;

  perform public.attendance_audit(
    v_user.id,
    v_auth_user_id,
    v_user.name,
    v_action,
    coalesce((v_result->>'ok')::boolean, false),
    jsonb_strip_nulls(jsonb_build_object(
      'memberId', nullif(v_member_id_text, ''),
      'error', case
        when coalesce((v_result->>'ok')::boolean, false) then null
        else v_result->>'error'
      end
    ))
  );

  return v_result;
exception when others then
  raise log 'attendance_api updateMemberName internal error: %', sqlerrm;
  return jsonb_build_object('ok', false, 'error', '요청을 처리하지 못했습니다. 잠시 후 다시 시도하세요.');
end;
$$;

revoke all on function public.attendance_api(jsonb) from public, anon, authenticated;
grant execute on function public.attendance_api(jsonb) to authenticated;

commit;
