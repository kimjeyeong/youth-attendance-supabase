# Apps Script API 배포 방법

이 폴더의 `Code.gs` 는 Google Sheet(DB)에 붙어서 앱의 백엔드 역할을 합니다.

## 1. 스크립트 붙이기

1. 데이터가 들어있는 **Google Sheet를 연다**
2. 상단 메뉴 **확장 프로그램 → Apps Script**
3. 열린 편집기의 기존 코드를 지우고, `Code.gs` 내용을 **전부 붙여넣기**
4. 저장(💾)

> 시트에 직접 붙이면(바인딩) `SHEET_ID` 는 빈 값 그대로 두면 됩니다.

## 2. 웹 앱으로 배포

1. 편집기 오른쪽 위 **배포 → 새 배포**
2. 유형 선택(⚙️) → **웹 앱**
3. 설정:
   - 실행: **나(본인 계정)**
   - 액세스 권한: **모든 사용자**
4. **배포** → 권한 승인(본인 구글 계정)
5. 나오는 **웹 앱 URL**을 복사 → 프론트엔드 `.env` 의 `VITE_API_URL` 에 넣기

## 3. 코드 수정 후 재배포

`Code.gs` 를 고치면 **배포 → 배포 관리 → 편집(연필) → 버전: 새 버전 → 배포** 를 해야 반영됩니다.
(URL 은 그대로 유지됩니다.)

## API 요약

프론트엔드는 이 URL로 `POST` (본문 = JSON 문자열, `Content-Type: text/plain`) 를 보냅니다.

| action | 설명 | 권한 |
|--------|------|------|
| `login` | 액세스 코드 검증 | - |
| `getMembers` | 명단 조회 (순장=자기 순 / 최고권한=전체 또는 지정 순) | 로그인 |
| `getAttendance` | 특정 날짜 출석 조회 | 로그인 |
| `getAttendanceRange` | 권한 범위의 출석 이력 조회 | 로그인 |
| `saveAttendance` | 출석 일괄 저장 | 로그인 |
| `addMember` | 신규자 등록 (초신자→새순 / 진급자→새내기순) | 로그인 |
| `assignGroup` | 신규자를 일반 순에 배정 | 최고권한 |

## 코드 관리(선택)

로컬에서 Git으로 관리하려면 [clasp](https://github.com/google/clasp) 사용:

```bash
npm i -g @google/clasp
clasp login
clasp clone <스크립트ID>
```
