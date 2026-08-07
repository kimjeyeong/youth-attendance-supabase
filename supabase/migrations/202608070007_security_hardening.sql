begin;

-- Supabase projects can grant EXECUTE to Data API roles by default.
-- Keep every helper and legacy SECURITY DEFINER function private, then expose
-- only the two authenticated entry points used by the application.
revoke execute on all functions in schema public from public, anon, authenticated;

grant execute on function public.attendance_claim_account(text) to authenticated;
grant execute on function public.attendance_api(jsonb) to authenticated;

-- New functions must be explicitly granted instead of becoming Data API RPCs.
alter default privileges in schema public
  revoke execute on functions from public;
alter default privileges in schema public
  revoke execute on functions from anon, authenticated;

commit;
