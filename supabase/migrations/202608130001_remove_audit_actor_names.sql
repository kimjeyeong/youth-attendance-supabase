begin;

-- 감사 로그에는 식별자와 작업 내용만 필요하다. 운영자 실명은 개인정보이며
-- actor_user_id / actor_auth_id로 추적할 수 있으므로 새 기록에 저장하지 않는다.
-- 기존 호출부와의 호환성을 위해 함수 인자는 유지하되 p_actor_name은 무시한다.
create or replace function public.attendance_audit(
  p_actor_user_id text,
  p_actor_auth_id uuid,
  p_actor_name text,
  p_action text,
  p_ok boolean,
  p_detail jsonb
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.admin_audit(actor_user_id, actor_auth_id, action, ok, detail)
  values (
    p_actor_user_id,
    p_actor_auth_id,
    p_action,
    p_ok,
    coalesce(p_detail, '{}'::jsonb)
  );
end;
$$;

-- 컬럼 삭제로 기존 감사 기록에 남아 있던 운영자 이름도 함께 제거한다.
alter table public.admin_audit
  drop column if exists actor_name;

-- 내부 도우미는 Data API에서 직접 실행할 수 없어야 한다.
revoke all on function public.attendance_audit(text, uuid, text, text, boolean, jsonb)
from public, anon, authenticated;

commit;
