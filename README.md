# 젊은이사역부 출석체크 앱

교회 청년부 출석(예배·순모임)을 관리하는 웹 앱.
**React 프론트엔드 + Supabase PostgreSQL** 구조입니다.

```
[순장/관리자 폰]  →  React 앱  →  Supabase RPC  →  PostgreSQL
```

## 폴더 구성

| 폴더 | 내용 |
|------|------|
| `frontend/` | React 웹 앱 (순장/관리자가 사용하는 화면) |
| `supabase/` | PostgreSQL 스키마, RPC, 데이터 이전 안내 |
| `apps-script/` | 전환 검증 중 사용할 수 있는 기존 백엔드 |

## 기능

- 이메일 인증 로그인 및 비밀번호 재설정 (순장 / 최고권한)
- 예배·순모임 출석 체크 + 비고(사유)
- 순장은 자기 순만, 최고권한은 전체 순 조회
- 신규자 등록 (초신자→새 순 / 진급자→새내기순)
- 최고권한이 신규자를 일반 순에 배정
- 새 순·새내기순은 여러 순장을 지정하고 일회용 코드로 이메일 계정을 연결
- 최고권한이 리뉴얼 CSV 서식을 내려받아 작성·붙여넣거나 화면에서 직접 순원을 일괄 재배정한 뒤 순장을 재지정
- `members`의 순ID와 순이름을 함께 관리하며, 과거 출석의 당시 순 정보는 보존

## 설치 & 실행 (로컬 미리보기)

```bash
cd frontend
npm install
npm run dev
```

→ 브라우저에서 http://localhost:5173 열기.
`.env` 없이 실행하면 **예시 데이터(오프라인 모드)** 로 화면을 미리 볼 수 있습니다.
(예시 코드: `g2-5012` 순장 / `admin-1488` 최고권한)

예시 모드에는 실제 명단이나 운영용 액세스 코드를 넣지 마세요.

## 점검

```bash
cd frontend
npm test
npm run build
```

## 실제 데이터에 연결하기

1. `supabase/README.md` 순서대로 스키마, RPC, 운영 데이터를 적용합니다.
2. `frontend/.env.example` 을 `.env` 로 복사합니다.
3. `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`를 입력합니다.
4. 이메일 가입·인증 후 관리자에게 받은 일회용 연결 코드를 입력합니다.
5. `npm run dev`를 다시 실행합니다.

Supabase 설정이 없고 `VITE_API_URL`만 있으면 기존 Apps Script를 사용합니다.

## 배포 (인터넷에 올리기)

앱이 `frontend/` 하위에 있으므로 **빌드 위치 지정이 필수**입니다. 지정하지 않으면 배포 후 `Page not found`(404) 가 뜹니다.

- **Netlify**: 루트의 `netlify.toml` 이 base/publish 를 자동 지정합니다.
  Site configuration → Environment variables 에 **`VITE_SUPABASE_URL`**, **`VITE_SUPABASE_PUBLISHABLE_KEY`** 추가 후 재배포하세요.
- **Vercel**: GitHub 레포 연결 → Root Directory 를 `frontend` 로 지정 → Supabase 환경변수 2개 추가 → 배포
- **GitHub Pages**: `main`에 푸시하면 `.github/workflows/deploy-pages.yml`이 테스트·빌드·배포를 자동 실행합니다.

운영자는 각자 이메일과 비밀번호로 가입합니다. 가입 이메일 인증 후 기존 권한의 일회용 연결 코드를 한 번 입력하며,
이후 로그인과 비밀번호 재설정은 Supabase Auth가 처리합니다.

> 환경변수는 빌드 시점에 번들로 주입됩니다. Supabase와 Apps Script 설정이 모두 없으면
> **예시 데이터(예시모드)** 로 동작하니, 환경변수를 넣은 뒤 반드시 재배포하세요.

## 배경

기존 Google Form + Sheet 로 개별 체크하던 것을, 순장이 한 화면에서 순 전체를 체크하도록 개선한 앱입니다.
DB 구조와 데이터 이관은 저장소의 데이터 템플릿(별도 xlsx)에서 시작했습니다.
