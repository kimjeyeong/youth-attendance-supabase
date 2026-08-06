# Supabase 전환

기존 React 화면과 액세스 코드 로그인을 유지하면서 Google Apps Script/Sheet 백엔드를 Supabase PostgreSQL로 교체합니다.

## 적용 순서

Supabase Dashboard의 **SQL Editor**에서 아래 파일을 순서대로 실행합니다.

1. `migrations/202608070001_schema.sql`
2. `migrations/202608070002_api.sql`
3. `private/seed.sql` (개인정보 포함, Git 제외)

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

두 값이 모두 있으면 Supabase를 사용하고, 없으면 기존 `VITE_API_URL`의 Apps Script를 사용합니다. 전환 검증이 끝날 때까지 Apps Script 설정을 함께 유지할 수 있습니다.

## 보안

- 테이블은 RLS를 활성화하고 `anon`, `authenticated` 직접 접근을 차단합니다.
- 브라우저에는 Publishable key만 사용합니다.
- Secret key와 DB 비밀번호를 소스나 프론트엔드 환경변수에 넣지 않습니다.
- `private/seed.sql`은 운영 개인정보와 액세스 코드를 포함하므로 절대 Git에 커밋하지 않습니다.
