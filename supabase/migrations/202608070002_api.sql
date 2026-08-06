begin;

create or replace function public.attendance_groups_json()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', g.id,
        'name', g.name,
        'type', g.type,
        'leaderId', coalesce((
          select u.member_id::text
          from public.app_users u
          where u.role = '순장' and u.group_id = g.id and u.active and u.member_id is not null
          order by u.created_at, u.id
          limit 1
        ), ''),
        'leaderIds', coalesce((
          select jsonb_agg(u.member_id::text order by u.created_at, u.id)
          from public.app_users u
          where u.role = '순장' and u.group_id = g.id and u.active and u.member_id is not null
        ), '[]'::jsonb)
      ) order by g.id
    ),
    '[]'::jsonb
  )
  from public.groups g
  where g.active;
$$;

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
    v_code := lower(p_prefix) || '-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 6);
    exit when not exists (select 1 from public.app_users where access_code = v_code);
  end loop;
  return v_code;
end;
$$;

create or replace function public.attendance_api(p_request jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_action text := trim(coalesce(p_request->>'action', ''));
  v_code text := trim(coalesce(p_request->>'code', ''));
  v_user public.app_users%rowtype;
  v_member public.members%rowtype;
  v_group public.groups%rowtype;
  v_existing public.app_users%rowtype;
  v_result jsonb;
  v_records jsonb;
  v_record jsonb;
  v_assignments jsonb;
  v_assignment jsonb;
  v_scope text;
  v_group_id text;
  v_user_id text;
  v_name text;
  v_type text;
  v_worship text;
  v_cell text;
  v_note text;
  v_date_text text;
  v_date date;
  v_member_id bigint;
  v_count integer;
  v_distinct_count integer;
  v_moved integer := 0;
  v_settled integer := 0;
  v_saved integer := 0;
  v_seen_ids bigint[] := '{}'::bigint[];
  v_multiple boolean;
  v_is_admin boolean;
  v_is_new boolean;
  v_code_changed boolean;
  v_new_code text;
  v_new_user_id text;
begin
  select * into v_user
  from public.app_users
  where access_code = v_code and active
  limit 1;

  if v_action = 'login' then
    if v_user.id is null then
      return jsonb_build_object('ok', false, 'error', '코드가 올바르지 않습니다.');
    end if;
    return jsonb_build_object(
      'ok', true,
      'user', jsonb_build_object(
        'name', v_user.name,
        'role', v_user.role,
        'groupId', case when v_user.role = '최고권한' then '전체' else coalesce(v_user.group_id, '') end
      ),
      'groups', public.attendance_groups_json()
    );
  end if;

  if v_user.id is null then
    return jsonb_build_object('ok', false, 'error', '유효하지 않은 액세스 코드입니다.');
  end if;

  v_is_admin := v_user.role = '최고권한';
  v_group_id := nullif(trim(coalesce(p_request->>'groupId', '')), '');
  v_scope := case when v_is_admin then v_group_id else v_user.group_id end;

  if v_action = 'getGroups' then
    return jsonb_build_object(
      'ok', true,
      'user', jsonb_build_object(
        'name', v_user.name,
        'role', v_user.role,
        'groupId', case when v_is_admin then '전체' else coalesce(v_user.group_id, '') end
      ),
      'groups', public.attendance_groups_json()
    );
  end if;

  if v_action = 'getMembers' then
    select coalesce(jsonb_agg(item order by member_name, member_id), '[]'::jsonb)
    into v_result
    from (
      select
        m.name as member_name,
        m.id as member_id,
        jsonb_build_object(
          'id', m.id,
          'name', m.name,
          'status', m.status,
          'groupId', m.group_id,
          'groupName', g.name,
          'note', m.note
        ) as item
      from public.members m
      join public.groups g on g.id = m.group_id
      where m.status <> '비활성'
        and (v_scope is null or m.group_id = v_scope)
    ) members_json;
    return jsonb_build_object('ok', true, 'members', v_result);
  end if;

  if v_action in ('getAttendance', 'saveAttendance') then
    v_date_text := trim(coalesce(p_request->>'date', ''));
    if v_date_text !~ '^\d{4}-\d{2}-\d{2}$' then
      return jsonb_build_object('ok', false, 'error', '날짜 형식이 올바르지 않습니다.');
    end if;
    begin
      v_date := v_date_text::date;
    exception when others then
      return jsonb_build_object('ok', false, 'error', '날짜 형식이 올바르지 않습니다.');
    end;
    if to_char(v_date, 'YYYY-MM-DD') <> v_date_text then
      return jsonb_build_object('ok', false, 'error', '날짜 형식이 올바르지 않습니다.');
    end if;
  end if;

  if v_action = 'getAttendance' then
    select coalesce(
      jsonb_object_agg(
        a.member_id::text,
        jsonb_build_object('worship', a.worship, 'cell', a.cell, 'note', a.note)
      ),
      '{}'::jsonb
    )
    into v_result
    from public.attendance a
    join public.members m on m.id = a.member_id
    where a.attendance_date = v_date
      and m.status <> '비활성'
      and (v_scope is null or m.group_id = v_scope);
    return jsonb_build_object('ok', true, 'attendance', v_result);
  end if;

  if v_action = 'getAttendanceRange' then
    select coalesce(jsonb_agg(item order by record_date, member_id), '[]'::jsonb)
    into v_result
    from (
      select
        a.attendance_date as record_date,
        a.member_id,
        jsonb_build_object(
          'date', to_char(a.attendance_date, 'YYYY-MM-DD'),
          'memberId', a.member_id,
          'groupId', a.group_id,
          'worship', a.worship,
          'cell', a.cell
        ) as item
      from public.attendance a
      join public.members m on m.id = a.member_id
      where m.status <> '비활성'
        and (v_scope is null or m.group_id = v_scope)
    ) attendance_json;
    return jsonb_build_object('ok', true, 'records', v_result);
  end if;

  if v_action = 'saveAttendance' then
    v_records := p_request->'records';
    if jsonb_typeof(v_records) is distinct from 'array' then
      return jsonb_build_object('ok', false, 'error', 'records 형식이 올바르지 않습니다.');
    end if;
    v_count := jsonb_array_length(v_records);
    if v_count > 500 then
      return jsonb_build_object('ok', false, 'error', '한 번에 저장할 수 있는 인원을 초과했습니다.');
    end if;
    select count(distinct item->>'memberId') into v_distinct_count
    from jsonb_array_elements(v_records) item;
    if v_distinct_count <> v_count then
      return jsonb_build_object('ok', false, 'error', '중복된 구성원 기록이 포함되어 있습니다.');
    end if;

    for v_record in select value from jsonb_array_elements(v_records)
    loop
      if trim(coalesce(v_record->>'memberId', '')) !~ '^\d+$' then
        return jsonb_build_object('ok', false, 'error', '저장 권한이 없는 구성원이 포함되어 있습니다.');
      end if;
      v_member_id := (v_record->>'memberId')::bigint;
      select * into v_member
      from public.members
      where id = v_member_id
        and status <> '비활성'
        and (v_scope is null or group_id = v_scope);
      if v_member.id is null then
        return jsonb_build_object('ok', false, 'error', '저장 권한이 없는 구성원이 포함되어 있습니다.');
      end if;
      v_worship := trim(coalesce(v_record->>'worship', ''));
      v_cell := trim(coalesce(v_record->>'cell', ''));
      v_note := trim(coalesce(v_record->>'note', ''));
      if v_worship not in ('', '출석', '결석', '온라인') or v_cell not in ('', '참석', '불참') then
        return jsonb_build_object('ok', false, 'error', '출석 상태 값이 올바르지 않습니다.');
      end if;
      if char_length(v_note) > 500 then
        return jsonb_build_object('ok', false, 'error', '비고는 500자 이내로 입력하세요.');
      end if;
      insert into public.attendance (
        attendance_date, member_id, group_id, worship, cell, note, checked_by, recorded_at
      ) values (
        v_date, v_member_id, v_member.group_id, v_worship, v_cell, v_note, v_user.name, now()
      )
      on conflict (attendance_date, member_id) do update
      set worship = excluded.worship,
          cell = excluded.cell,
          note = excluded.note,
          checked_by = excluded.checked_by,
          recorded_at = excluded.recorded_at;
      v_saved := v_saved + 1;
    end loop;
    return jsonb_build_object('ok', true, 'saved', v_saved);
  end if;

  if v_action = 'addMember' then
    v_name := trim(coalesce(p_request->>'name', ''));
    v_type := trim(coalesce(p_request->>'type', ''));
    if v_name = '' then return jsonb_build_object('ok', false, 'error', '이름을 입력하세요.'); end if;
    if char_length(v_name) > 50 then return jsonb_build_object('ok', false, 'error', '이름은 50자 이내로 입력하세요.'); end if;
    if v_type not in ('초신자', '진급자') then
      return jsonb_build_object('ok', false, 'error', '신규자 유형이 올바르지 않습니다.');
    end if;
    select * into v_group
    from public.groups
    where active and type = case when v_type = '진급자' then '새내기' else '새순' end
    order by id
    limit 1;
    if v_group.id is null then
      return jsonb_build_object('ok', false, 'error', case when v_type = '진급자' then '새내기' else '새순' end || ' 유형의 순을 찾을 수 없습니다.');
    end if;
    if not v_is_admin and v_user.group_id <> v_group.id then
      return jsonb_build_object('ok', false, 'error', '이 유형의 신규자를 등록할 권한이 없습니다.');
    end if;
    insert into public.members (name, status, group_id, registered_on, note)
    values (v_name, '신규자', v_group.id, current_date, case when v_type = '진급자' then '고등부 진급' else '초신자' end)
    returning id into v_member_id;
    return jsonb_build_object('ok', true, 'id', v_member_id, 'groupId', v_group.id);
  end if;

  if v_action = 'assignGroup' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 순을 배정할 수 있습니다.'); end if;
    if trim(coalesce(p_request->>'memberId', '')) !~ '^\d+$' or v_group_id is null then
      return jsonb_build_object('ok', false, 'error', 'memberId, groupId 필요');
    end if;
    v_member_id := (p_request->>'memberId')::bigint;
    select * into v_group from public.groups where id = v_group_id and active and type = '일반';
    if v_group.id is null then return jsonb_build_object('ok', false, 'error', '활성 상태인 일반 순으로만 배정할 수 있습니다.'); end if;
    select * into v_member from public.members where id = v_member_id;
    if v_member.id is null then return jsonb_build_object('ok', false, 'error', '해당 member를 찾을 수 없습니다.'); end if;
    if v_member.status <> '신규자' then return jsonb_build_object('ok', false, 'error', '배정 대기 중인 신규자만 순을 배정할 수 있습니다.'); end if;
    update public.members set group_id = v_group.id, status = '정착', assigned_on = current_date where id = v_member_id;
    return jsonb_build_object('ok', true);
  end if;

  if v_action = 'renewMembers' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 순원을 재배정할 수 있습니다.'); end if;
    v_assignments := p_request->'assignments';
    if jsonb_typeof(v_assignments) is distinct from 'array' or jsonb_array_length(v_assignments) = 0 then
      return jsonb_build_object('ok', false, 'error', '변경할 순원을 선택하세요.');
    end if;
    if jsonb_array_length(v_assignments) > 500 then
      return jsonb_build_object('ok', false, 'error', '한 번에 500명까지만 변경할 수 있습니다.');
    end if;
    for v_assignment in select value from jsonb_array_elements(v_assignments)
    loop
      if trim(coalesce(v_assignment->>'memberId', '')) !~ '^\d+$' then
        return jsonb_build_object('ok', false, 'error', '중복되거나 올바르지 않은 재배정 항목이 있습니다.');
      end if;
      v_member_id := (v_assignment->>'memberId')::bigint;
      v_group_id := trim(coalesce(v_assignment->>'groupId', ''));
      if v_member_id = any(v_seen_ids) then
        return jsonb_build_object('ok', false, 'error', '중복되거나 올바르지 않은 재배정 항목이 있습니다.');
      end if;
      v_seen_ids := array_append(v_seen_ids, v_member_id);
      select * into v_member from public.members where id = v_member_id;
      select * into v_group from public.groups where id = v_group_id and active;
      if v_member.id is null then return jsonb_build_object('ok', false, 'error', '구성원을 찾을 수 없습니다: ' || v_member_id); end if;
      if v_member.status = '비활성' then return jsonb_build_object('ok', false, 'error', '비활성 구성원은 재배정할 수 없습니다.'); end if;
      if v_group.id is null then return jsonb_build_object('ok', false, 'error', '활성 순을 찾을 수 없습니다: ' || v_group_id); end if;
      if v_member.group_id <> v_group.id then v_moved := v_moved + 1; end if;
    end loop;
    if v_moved = 0 then return jsonb_build_object('ok', false, 'error', '실제로 변경되는 순원이 없습니다.'); end if;
    for v_assignment in select value from jsonb_array_elements(v_assignments)
    loop
      v_member_id := (v_assignment->>'memberId')::bigint;
      v_group_id := trim(v_assignment->>'groupId');
      select * into v_member from public.members where id = v_member_id;
      select * into v_group from public.groups where id = v_group_id;
      if v_member.group_id <> v_group.id then
        if v_member.status = '신규자' and v_group.type = '일반' then v_settled := v_settled + 1; end if;
        update public.members
        set group_id = v_group.id,
            assigned_on = current_date,
            status = case when status = '신규자' and v_group.type = '일반' then '정착' else status end
        where id = v_member_id;
      end if;
    end loop;
    return jsonb_build_object('ok', true, 'moved', v_moved, 'settled', v_settled);
  end if;

  if v_action = 'syncMemberGroupNames' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 순이름을 동기화할 수 있습니다.'); end if;
    return jsonb_build_object('ok', true, 'updated', 0);
  end if;

  if v_action = 'getLeaders' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 조회할 수 있습니다.'); end if;
    select coalesce(jsonb_agg(item order by group_id), '[]'::jsonb)
    into v_result
    from (
      select
        g.id as group_id,
        jsonb_build_object(
          'groupId', g.id,
          'groupName', g.name,
          'type', g.type,
          'multiple', g.type in ('새순', '새내기'),
          'leaders', coalesce((
            select jsonb_agg(
              jsonb_build_object(
                'memberId', coalesce(u.member_id::text, ''),
                'userId', u.id,
                'name', coalesce(m.name, u.name),
                'code', u.access_code,
                'active', u.active
              ) order by u.created_at, u.id
            )
            from public.app_users u
            left join public.members m on m.id = u.member_id
            where u.role = '순장' and u.group_id = g.id and u.active
          ), '[]'::jsonb),
          'leaderId', coalesce((select u.member_id::text from public.app_users u where u.role = '순장' and u.group_id = g.id and u.active order by u.created_at, u.id limit 1), ''),
          'leaderName', coalesce((select coalesce(m.name, u.name) from public.app_users u left join public.members m on m.id = u.member_id where u.role = '순장' and u.group_id = g.id and u.active order by u.created_at, u.id limit 1), ''),
          'code', coalesce((select u.access_code from public.app_users u where u.role = '순장' and u.group_id = g.id and u.active order by u.created_at, u.id limit 1), ''),
          'active', exists(select 1 from public.app_users u where u.role = '순장' and u.group_id = g.id and u.active)
        ) as item
      from public.groups g
      where g.active
    ) leaders_json;
    return jsonb_build_object('ok', true, 'leaders', v_result);
  end if;

  if v_action = 'setLeader' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 순장을 지정할 수 있습니다.'); end if;
    v_group_id := trim(coalesce(p_request->>'groupId', ''));
    if trim(coalesce(p_request->>'memberId', '')) !~ '^\d+$' or v_group_id = '' then
      return jsonb_build_object('ok', false, 'error', 'groupId, memberId 가 필요합니다.');
    end if;
    v_member_id := (p_request->>'memberId')::bigint;
    select * into v_group from public.groups where id = v_group_id and active;
    if v_group.id is null then return jsonb_build_object('ok', false, 'error', '해당 순을 찾을 수 없습니다.'); end if;
    select * into v_member from public.members where id = v_member_id;
    if v_member.id is null then return jsonb_build_object('ok', false, 'error', '해당 구성원을 찾을 수 없습니다.'); end if;
    if v_member.status = '비활성' then return jsonb_build_object('ok', false, 'error', '비활성 구성원은 순장으로 지정할 수 없습니다.'); end if;
    v_multiple := v_group.type in ('새순', '새내기');

    if not v_multiple then
      select * into v_existing
      from public.app_users
      where role = '순장' and group_id = v_group.id and active
      order by created_at, id
      limit 1;
      if v_existing.id is not null and v_existing.member_id = v_member.id then
        return jsonb_build_object('ok', true, 'code', v_existing.access_code, 'leaderName', v_member.name, 'memberId', v_member.id::text, 'userId', v_existing.id, 'isNew', false, 'codeChanged', false);
      end if;
      update public.app_users set active = false where role = '순장' and group_id = v_group.id and active;
    end if;

    select * into v_existing
    from public.app_users
    where role = '순장' and group_id = v_group.id and member_id = v_member.id
    order by active desc, created_at
    limit 1;
    v_is_new := v_existing.id is null;
    v_code_changed := not v_multiple;
    if v_is_new then
      v_new_code := public.attendance_generate_code(v_group.id);
      v_new_user_id := 'leader-' || v_member.id || '-' || lower(v_group.id);
      if exists(select 1 from public.app_users where id = v_new_user_id) then
        v_new_user_id := v_new_user_id || '-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 6);
      end if;
      insert into public.app_users (id, name, role, group_id, member_id, access_code, active, note)
      values (v_new_user_id, v_member.name, '순장', v_group.id, v_member.id, v_new_code, true, v_group.name || ' 순장');
    else
      v_new_user_id := v_existing.id;
      v_new_code := case when v_multiple and v_existing.access_code <> '' then v_existing.access_code else public.attendance_generate_code(v_group.id) end;
      update public.app_users
      set name = v_member.name, access_code = v_new_code, active = true, member_id = v_member.id
      where id = v_existing.id;
    end if;
    return jsonb_build_object('ok', true, 'code', v_new_code, 'leaderName', v_member.name, 'memberId', v_member.id::text, 'userId', v_new_user_id, 'isNew', v_is_new, 'codeChanged', v_code_changed and not v_is_new);
  end if;

  if v_action = 'clearLeader' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 순장을 해제할 수 있습니다.'); end if;
    v_group_id := trim(coalesce(p_request->>'groupId', ''));
    v_user_id := trim(coalesce(p_request->>'userId', ''));
    select * into v_group from public.groups where id = v_group_id and active;
    if v_group.id is null then return jsonb_build_object('ok', false, 'error', '해당 순을 찾을 수 없습니다.'); end if;
    v_multiple := v_group.type in ('새순', '새내기');
    if trim(coalesce(p_request->>'memberId', '')) ~ '^\d+$' then v_member_id := (p_request->>'memberId')::bigint; else v_member_id := null; end if;
    if v_multiple and v_member_id is null and v_user_id = '' then return jsonb_build_object('ok', false, 'error', '해제할 순장을 지정하세요.'); end if;
    if v_multiple then
      update public.app_users
      set active = false
      where role = '순장' and group_id = v_group.id and active
        and ((v_user_id <> '' and id = v_user_id) or (v_member_id is not null and member_id = v_member_id));
    else
      update public.app_users set active = false where role = '순장' and group_id = v_group.id and active;
    end if;
    return jsonb_build_object('ok', true);
  end if;

  if v_action = 'regenerateCode' then
    if not v_is_admin then return jsonb_build_object('ok', false, 'error', '최고권한만 코드를 재발급할 수 있습니다.'); end if;
    v_group_id := trim(coalesce(p_request->>'groupId', ''));
    v_user_id := trim(coalesce(p_request->>'userId', ''));
    select * into v_group from public.groups where id = v_group_id and active;
    if v_group.id is null then return jsonb_build_object('ok', false, 'error', '해당 순을 찾을 수 없습니다.'); end if;
    v_multiple := v_group.type in ('새순', '새내기');
    if v_multiple and v_user_id = '' then return jsonb_build_object('ok', false, 'error', '재발급할 순장을 지정하세요.'); end if;
    select * into v_existing
    from public.app_users
    where role = '순장' and group_id = v_group.id and active and (not v_multiple or id = v_user_id)
    order by created_at, id
    limit 1;
    if v_existing.id is null then return jsonb_build_object('ok', false, 'error', '먼저 순장을 지정하세요.'); end if;
    v_new_code := public.attendance_generate_code(v_group.id);
    update public.app_users set access_code = v_new_code where id = v_existing.id;
    return jsonb_build_object('ok', true, 'code', v_new_code);
  end if;

  return jsonb_build_object('ok', false, 'error', '알 수 없는 action: ' || v_action);
exception when others then
  return jsonb_build_object('ok', false, 'error', '요청 처리 오류: ' || sqlerrm);
end;
$$;

revoke all on function public.attendance_groups_json() from public;
revoke all on function public.attendance_generate_code(text) from public;
revoke all on function public.attendance_api(jsonb) from public;
grant execute on function public.attendance_api(jsonb) to anon, authenticated;

commit;
