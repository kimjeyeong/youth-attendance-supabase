# 젊은이사역부 출석체크 앱

교회 청년부 출석(예배·순모임)을 관리하는 웹 앱.
**React 프론트엔드 + Google Apps Script API + Google Sheet(DB)** 구조입니다.

```
[순장/관리자 폰]  →  React 앱  →  Apps Script API  →  Google Sheet
```

## 폴더 구성

| 폴더 | 내용 |
|------|------|
| `apps-script/` | Google Sheet에 붙는 백엔드 API (`Code.gs`) |
| `frontend/` | React 웹 앱 (순장/관리자가 사용하는 화면) |

## 기능

- 액세스 코드 로그인 (순장 / 최고권한)
- 예배·순모임 출석 체크 + 비고(사유)
- 순장은 자기 순만, 최고권한은 전체 순 조회
- 신규자 등록 (초신자→새 순 / 진급자→새내기순)
- 최고권한이 신규자를 일반 순에 배정

## 설치 & 실행 (로컬 미리보기)

```bash
cd frontend
npm install
npm run dev
```

→ 브라우저에서 http://localhost:5173 열기.
`.env` 없이 실행하면 **예시 데이터(오프라인 모드)** 로 화면을 미리 볼 수 있습니다.
(예시 코드: `g2-5012` 순장 / `admin-1488` 최고권한)

## 실제 데이터에 연결하기

1. **백엔드 배포**: `apps-script/README.md` 를 따라 Apps Script를 웹 앱으로 배포 → URL 복사
2. **프론트 연결**: `frontend/.env.example` 을 `.env` 로 복사하고 `VITE_API_URL=<복사한 URL>` 입력
3. `npm run dev` 다시 실행 → 이제 실제 시트와 연동됨

## 배포 (인터넷에 올리기)

- **Vercel**(추천): GitHub 레포 연결 → Root Directory 를 `frontend` 로 지정 → 환경변수 `VITE_API_URL` 추가 → 배포
- **GitHub Pages**: `frontend/vite.config.js` 의 `base` 를 `'/저장소이름/'` 로 바꾼 뒤 `npm run build` → `dist/` 를 Pages 로 배포

## 배경

기존 Google Form + Sheet 로 개별 체크하던 것을, 순장이 한 화면에서 순 전체를 체크하도록 개선한 앱입니다.
DB 구조와 데이터 이관은 저장소의 데이터 템플릿(별도 xlsx)에서 시작했습니다.
