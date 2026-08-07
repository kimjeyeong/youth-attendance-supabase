# Supabase 전환

기존 React 화면을 유지하면서 Google Apps Script/Sheet 백엔드와 액세스 코드 로그인을 Supabase PostgreSQL/Auth로 교체합니다.

## 적용 순서

Supabase Dashboard의 **SQL Editor**에서 아래 파일을 순서대로 실행합니다.

1. `migrations/202608070001_schema.sql`
2. `migrations/202608070002_api.sql`
3. `private/seed.sql` (개인정보 포함, Git 제외)
4. `migrations/202608070003_auth.sql`
5. `migrations/202608070004_admin_initial_password.sql`
6. `migrations/202608070005_admin_management.sql`
7. `migrations/202608070006_permission_hierarchy.sql`
8. `migrations/202608070007_security_hardening.sql`
9. `migrations/202608070008_security_fixes.sql`
10. `migrations/202608070009_consolidate_emergency_admin.sql`

> `202608070008` 을 적용하면 **아직 사용하지 않은 연결 코드에 72시간 유효기간이 생깁니다.**
> 적용 시점에 배포해 둔 코드가 있다면 72시간 안에 연결하거나, 지난 뒤에는
> 권한관리 / 리뉴얼 화면에서 재발급하세요.

가져오기 완료 후 마지막 결과는 다음 건수여야 합니다.

- groups: 13
- members: 204
- users: 14
- attendance: 2531

원본 출석 2573건 중 같은 날짜·같은 구성원의 중복 42건은 기존 Apps Script와 동일하게 마지막 행을 최종값으로 채택했습니다.

## 프론트엔드 환경변수

```env
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

운영 환경은 두 Supabase 값만 사용합니다. 기존 Apps Script 공개 배포는 보안상 중지되었으므로 `VITE_API_URL`을 설정하거나 웹앱을 다시 공개하지 않습니다.

## 이메일 인증 설정

- Authentication → URL Configuration의 Site URL을 실제 배포 주소로 설정합니다.
- 이메일 확인(Confirm email)을 켠 상태로 유지합니다.
- 운영 환경에서는 Authentication → Email → SMTP Settings에 별도 SMTP를 연결합니다.
  Supabase 기본 메일 서버는 프로젝트 팀원 외 주소로 메일을 보낼 수 없습니다.
- 가입자는 인증 메일을 확인한 뒤 기존 권한의 일회용 연결 코드를 한 번만 입력합니다.
- `202608070003_auth.sql`은 기존 코드를 강한 일회용 코드로 교체하고 익명 RPC 실행을 차단합니다.

## 보안

- 테이블은 RLS를 활성화하고 `anon`, `authenticated` 직접 접근을 차단합니다.
- RPC는 Supabase Auth 로그인 사용자에게만 허용하며, `auth.uid()`로 운영자 권한을 확인합니다.
- Data API는 `attendance_api`, `attendance_claim_account` 두 RPC만 `authenticated` 역할에 공개합니다.
- 새 DB 함수는 기본적으로 비공개이며 필요한 함수만 명시적으로 `grant execute` 합니다.
- 브라우저에는 Publishable key만 사용합니다.
- Secret key와 DB 비밀번호를 소스나 프론트엔드 환경변수에 넣지 않습니다.
- `private/seed.sql`은 운영 개인정보와 액세스 코드를 포함하므로 절대 Git에 커밋하지 않습니다.
- 일회용 연결 코드는 발급 후 **72시간**만 유효하고, 사용하는 즉시 폐기됩니다.
  만료 시각이 없는 코드는 무기한이 아니라 **무효**로 처리합니다(fail-closed).
- 초기 비밀번호 강제 변경은 auth 비밀번호 해시가 실제로 바뀐 것을 확인한 뒤에만 해제됩니다.
- 예기치 못한 DB 오류의 원문은 Postgres 로그에만 남고 브라우저에는 일반 메시지만 갑니다.
- 순장·권한·소속을 바꾸는 요청은 `admin_audit` 테이블에 성공·실패 모두 기록됩니다.
  (식별자와 건수만 남기고 이름·전화번호는 남기지 않습니다. 조회는 SQL Editor 에서 합니다.)
