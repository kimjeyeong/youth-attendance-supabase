// 예시(오프라인) 미리보기 데이터 — 실제 명단/이력으로 채워짐.
// 주의: 실제 이름이 들어있습니다. GitHub에 올릴 땐 private 저장소를 쓰거나,
//       실제 시트에 연결(VITE_API_URL 설정)한 뒤에는 이 데이터는 사용되지 않습니다.
const groups = [
  {
    "id": "G1",
    "name": "신앙순",
    "type": "일반",
    "leaderId": 105
  },
  {
    "id": "G10",
    "name": "환순",
    "type": "일반",
    "leaderId": 92
  },
  {
    "id": "G11",
    "name": "은승순",
    "type": "일반",
    "leaderId": 26
  },
  {
    "id": "G2",
    "name": "하경순",
    "type": "일반",
    "leaderId": 1
  },
  {
    "id": "G3",
    "name": "은혁순",
    "type": "일반",
    "leaderId": 58
  },
  {
    "id": "G4",
    "name": "윤서순",
    "type": "일반",
    "leaderId": 39
  },
  {
    "id": "G5",
    "name": "다은순",
    "type": "일반",
    "leaderId": 119
  },
  {
    "id": "G6",
    "name": "지우순",
    "type": "일반",
    "leaderId": 135
  },
  {
    "id": "G7",
    "name": "예나순",
    "type": "일반",
    "leaderId": 13
  },
  {
    "id": "G8",
    "name": "인우순",
    "type": "일반",
    "leaderId": 42
  },
  {
    "id": "G9",
    "name": "하빈순",
    "type": "일반",
    "leaderId": 72
  },
  {
    "id": "S2",
    "name": "새내기순",
    "type": "새내기",
    "leaderId": ""
  },
  {
    "id": "S1",
    "name": "새순",
    "type": "새순",
    "leaderId": ""
  }
]

const users = [
  {
    "code": "g1-2824",
    "name": "정신앙",
    "role": "순장",
    "groupId": "G1"
  },
  {
    "code": "g10-1409",
    "name": "신환",
    "role": "순장",
    "groupId": "G10"
  },
  {
    "code": "g11-5506",
    "name": "오은승",
    "role": "순장",
    "groupId": "G11"
  },
  {
    "code": "g2-5012",
    "name": "박하경",
    "role": "순장",
    "groupId": "G2"
  },
  {
    "code": "g3-4657",
    "name": "이은혁",
    "role": "순장",
    "groupId": "G3"
  },
  {
    "code": "g4-3286",
    "name": "이윤서",
    "role": "순장",
    "groupId": "G4"
  },
  {
    "code": "g5-2679",
    "name": "이다은",
    "role": "순장",
    "groupId": "G5"
  },
  {
    "code": "g6-9935",
    "name": "김지우",
    "role": "순장",
    "groupId": "G6"
  },
  {
    "code": "g7-2424",
    "name": "정예나",
    "role": "순장",
    "groupId": "G7"
  },
  {
    "code": "g8-7912",
    "name": "최인우",
    "role": "순장",
    "groupId": "G8"
  },
  {
    "code": "g9-1520",
    "name": "최하빈",
    "role": "순장",
    "groupId": "G9"
  },
  {
    "code": "admin-1488",
    "name": "회장",
    "role": "최고권한",
    "groupId": "전체"
  },
  {
    "code": "admin-2535",
    "name": "목사님",
    "role": "최고권한",
    "groupId": "전체"
  },
  {
    "code": "admin-4582",
    "name": "admin",
    "role": "최고권한",
    "groupId": "전체"
  }
]

const members = [
  {
    "id": 1,
    "name": "박하경",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": "하경순 순장"
  },
  {
    "id": 2,
    "name": "양승완",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 3,
    "name": "김노아",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 4,
    "name": "최세민",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 5,
    "name": "이수민",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 6,
    "name": "서영민",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 7,
    "name": "김선빈",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 8,
    "name": "서호",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 9,
    "name": "허재민",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 10,
    "name": "김현석",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 11,
    "name": "진예은",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 12,
    "name": "주세은",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 13,
    "name": "정예나",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": "예나순 순장"
  },
  {
    "id": 14,
    "name": "김제영",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 15,
    "name": "박미혜",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 16,
    "name": "이현재B",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 17,
    "name": "백성빈",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 18,
    "name": "김한글",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 19,
    "name": "박미리",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 20,
    "name": "강민우",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 21,
    "name": "김여린",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 22,
    "name": "박다빈",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 23,
    "name": "윤예찬",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 24,
    "name": "김겸호",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 25,
    "name": "박환휘",
    "groupId": "G7",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 26,
    "name": "오은승",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": "은승순 순장"
  },
  {
    "id": 27,
    "name": "정은서",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 28,
    "name": "정예전",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 29,
    "name": "신범수",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 30,
    "name": "정서영",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 31,
    "name": "이성현",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 32,
    "name": "김가은",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 33,
    "name": "방찬우",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 34,
    "name": "김하은",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 35,
    "name": "한지현",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 36,
    "name": "김해인",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 37,
    "name": "조윤호",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 38,
    "name": "윤예진",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 39,
    "name": "이윤서",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": "윤서순 순장"
  },
  {
    "id": 40,
    "name": "최규범",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 41,
    "name": "박승은",
    "groupId": "G11",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 42,
    "name": "최인우",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": "인우순 순장"
  },
  {
    "id": 43,
    "name": "구세영",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 44,
    "name": "강예성",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 45,
    "name": "최임준",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 46,
    "name": "윤수빈",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 47,
    "name": "오아현",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 48,
    "name": "황예은",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 49,
    "name": "이현재A",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 50,
    "name": "김주영",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 51,
    "name": "유동근",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 52,
    "name": "조재성",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 53,
    "name": "박진우",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 54,
    "name": "송예람",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 55,
    "name": "황시원",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 56,
    "name": "박창선",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 57,
    "name": "김민식",
    "groupId": "G8",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 58,
    "name": "이은혁",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": "은혁순 순장"
  },
  {
    "id": 59,
    "name": "신소희",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 60,
    "name": "남경현",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 61,
    "name": "김대휘",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 62,
    "name": "이정찬",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 63,
    "name": "조영선",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 64,
    "name": "박준혁",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 65,
    "name": "송명원",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 66,
    "name": "서은수",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 67,
    "name": "오도은",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 68,
    "name": "박가온",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 69,
    "name": "문성빈",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 70,
    "name": "이재욱",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 71,
    "name": "정현녕",
    "groupId": "G3",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 72,
    "name": "최하빈",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": "하빈순 순장"
  },
  {
    "id": 73,
    "name": "조수현",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 74,
    "name": "정양헌",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 75,
    "name": "윤수인",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 76,
    "name": "유강림",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 77,
    "name": "김우진",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 78,
    "name": "박진수",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 79,
    "name": "김의림",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 80,
    "name": "함도영",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 81,
    "name": "김지수",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 82,
    "name": "엄보현",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 83,
    "name": "김도현",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 84,
    "name": "김은현",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 85,
    "name": "남진우",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 86,
    "name": "이민주",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 87,
    "name": "송호",
    "groupId": "G9",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 88,
    "name": "한세웅",
    "groupId": "S1",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 89,
    "name": "유수민",
    "groupId": "S1",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 90,
    "name": "선형우",
    "groupId": "S1",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 91,
    "name": "정예강",
    "groupId": "S1",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 92,
    "name": "신환",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": "환순 순장"
  },
  {
    "id": 93,
    "name": "정승일",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 94,
    "name": "정승민",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 95,
    "name": "백지영",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 96,
    "name": "주혜원",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 97,
    "name": "장동화",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 98,
    "name": "민고은",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 99,
    "name": "정신웅",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 100,
    "name": "김영우",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 101,
    "name": "김태현",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 102,
    "name": "곽하은",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 103,
    "name": "한제문",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 104,
    "name": "최진우",
    "groupId": "G10",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 105,
    "name": "정신앙",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": "신앙순 순장"
  },
  {
    "id": 106,
    "name": "최은지",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 107,
    "name": "윤승원",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 108,
    "name": "정경원",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 109,
    "name": "이창석",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 110,
    "name": "김현수",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 111,
    "name": "박현성",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 112,
    "name": "장지민",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 113,
    "name": "장예섬",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 114,
    "name": "정영아",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 115,
    "name": "정성아",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 116,
    "name": "송지은",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 117,
    "name": "조동민",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 118,
    "name": "최유빈",
    "groupId": "G1",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 119,
    "name": "이다은",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": "다은순 순장"
  },
  {
    "id": 120,
    "name": "배창민",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 121,
    "name": "김성휘",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 122,
    "name": "박신성",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 123,
    "name": "김하영",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 124,
    "name": "김서현",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 125,
    "name": "최동영",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 126,
    "name": "탁우정",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 127,
    "name": "황수현",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 128,
    "name": "이강민",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 129,
    "name": "변무혁",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 130,
    "name": "정철진",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 131,
    "name": "양동훈",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 132,
    "name": "김예지",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 133,
    "name": "김윤서B",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 134,
    "name": "김지희",
    "groupId": "G5",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 135,
    "name": "김지우",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": "지우순 순장"
  },
  {
    "id": 136,
    "name": "백지혜",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 137,
    "name": "지은선",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 138,
    "name": "장윤서",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 139,
    "name": "김영일",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 140,
    "name": "양다정",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 141,
    "name": "김영민",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 142,
    "name": "김예은",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 143,
    "name": "안화영",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 144,
    "name": "위창민",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 145,
    "name": "박신혜",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 146,
    "name": "이정수",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 147,
    "name": "황태규",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 148,
    "name": "문희락",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 149,
    "name": "이기주",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 150,
    "name": "이정안",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 151,
    "name": "지태근",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 152,
    "name": "전제현",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 153,
    "name": "김태우",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 154,
    "name": "양은송",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 155,
    "name": "여민성",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 156,
    "name": "정시현",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 157,
    "name": "곽시은",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 158,
    "name": "권혁주",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 159,
    "name": "김민기",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 160,
    "name": "김민지",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 161,
    "name": "김승민",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 162,
    "name": "김유빈",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 163,
    "name": "김한이",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 164,
    "name": "남윤호",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 165,
    "name": "오주환",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 166,
    "name": "유예현",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 167,
    "name": "윤수연",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 168,
    "name": "윤종혁",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 169,
    "name": "이가은",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 170,
    "name": "이주희",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 171,
    "name": "이초은",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 172,
    "name": "정윤일",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 173,
    "name": "주원",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 174,
    "name": "채민석",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 175,
    "name": "한원진",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 176,
    "name": "황예담",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 177,
    "name": "성금모",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 178,
    "name": "김시우",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 179,
    "name": "강연서",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 180,
    "name": "이은호",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 181,
    "name": "김규민",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 182,
    "name": "하근수",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 183,
    "name": "임재현",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 184,
    "name": "조은우",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 185,
    "name": "신고은",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 186,
    "name": "정예은",
    "groupId": "S2",
    "status": "신규자",
    "contact": "",
    "note": ""
  },
  {
    "id": 187,
    "name": "김윤서A",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 188,
    "name": "구주영",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 189,
    "name": "정진아",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 190,
    "name": "추형찬",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 191,
    "name": "백영웅",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 192,
    "name": "윤예송",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 193,
    "name": "유주광",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 194,
    "name": "최신행",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 195,
    "name": "김한결",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 196,
    "name": "강주은",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 197,
    "name": "손유빈",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 198,
    "name": "이예주",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 199,
    "name": "탁서홍",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 200,
    "name": "박채아",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 201,
    "name": "박성산",
    "groupId": "G4",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 202,
    "name": "황인성",
    "groupId": "G2",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 203,
    "name": "조태희",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  },
  {
    "id": 204,
    "name": "윤선종",
    "groupId": "G6",
    "status": "정착",
    "contact": "",
    "note": ""
  }
]

// 출석 이력 (대시보드 차트용) [{date, memberId, groupId, worship, cell}]
const history = [
{
"date": "2026-01-04",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 16,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 25,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 26,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 27,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 28,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 29,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 30,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 31,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 32,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 33,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 34,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 35,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 36,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 37,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 38,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 39,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 40,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 41,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 45,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 48,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 51,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 52,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 57,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 64,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 74,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 76,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 77,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 78,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 82,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 86,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 87,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 88,
"groupId": "S1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 89,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 90,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 91,
"groupId": "S1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 94,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 96,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 97,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 98,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 99,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 100,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 102,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 103,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 116,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 121,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 122,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 124,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 126,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 127,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 128,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 129,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 130,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 132,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 133,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 136,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 137,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 139,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 140,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 143,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 147,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 148,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 158,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 162,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 166,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 170,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 176,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 183,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 184,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 185,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 186,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 169,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 174,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 176,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 183,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 184,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 185,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 186,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 74,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 76,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 78,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 82,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 86,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 87,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 16,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 18,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 19,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 25,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 109,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 110,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 116,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 48,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 51,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 52,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 88,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 89,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 90,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 91,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 94,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 96,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 97,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 98,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 99,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 100,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 102,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 103,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 136,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 137,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 139,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 140,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 141,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 144,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 147,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 148,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 121,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 122,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 124,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 127,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 128,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 133,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 26,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 27,
"groupId": "G11",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 28,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 29,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 30,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 31,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 32,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 33,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 34,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 35,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 36,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 37,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 38,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 39,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 40,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 41,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 189,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 194,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 198,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-04",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-04",
"memberId": 201,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 190,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 196,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 198,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 48,
"groupId": "G8",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 52,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 56,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 74,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 76,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 78,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 82,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 86,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 87,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 189,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 198,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 199,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 201,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 162,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 164,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 16,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 25,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 6,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 60,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 63,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 63,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-11",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-11",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 94,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 96,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 97,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 98,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 99,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 100,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 102,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 103,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 26,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 27,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 28,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 29,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 30,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 31,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 32,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 33,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 34,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 35,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 36,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 37,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 38,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 39,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 40,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 41,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 136,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 140,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 141,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 148,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 149,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 154,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 88,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 89,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 90,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 91,
"groupId": "S1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 122,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 123,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 124,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 125,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 128,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 132,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-18",
"memberId": 133,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-18",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 189,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 190,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 198,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 74,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 76,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 78,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 82,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 86,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 87,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 16,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 17,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 18,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 19,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 21,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 25,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 158,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 165,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 8,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 118,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 58,
"groupId": "G3",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 62,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 64,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 124,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 94,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 96,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 97,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 98,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 99,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 100,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 102,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 103,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 74,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 76,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 78,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 82,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 85,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 86,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 87,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 162,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 166,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 169,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 172,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-02",
"memberId": 174,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-02",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 158,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 164,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 165,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 48,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 52,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 56,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 6,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 7,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 139,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 140,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 148,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-01",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-01",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 74,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 76,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 78,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 82,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 86,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 87,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 26,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 27,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 28,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 29,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 30,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 31,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 32,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 33,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 34,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 35,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 36,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 37,
"groupId": "G11",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 38,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 39,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 40,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 41,
"groupId": "G11",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 189,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 190,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 197,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 198,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 199,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 121,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 124,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 129,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 15,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 16,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 25,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 106,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 117,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 118,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 106,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-08",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 117,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-08",
"memberId": 118,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 165,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 172,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 173,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 16,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 17,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 22,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 23,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 25,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 194,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 198,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 137,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 140,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 143,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 144,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 148,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 149,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 153,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 10,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 94,
"groupId": "G10",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 96,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 97,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 98,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 99,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 100,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 102,
"groupId": "G10",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 103,
"groupId": "G10",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 63,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 46,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 48,
"groupId": "G8",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 52,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-15",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-15",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 92,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 93,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 94,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 95,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 96,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 97,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 98,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 99,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 100,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 101,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 102,
"groupId": "G10",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 103,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 104,
"groupId": "G10",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 189,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 190,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 195,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 196,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 198,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 116,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 48,
"groupId": "G8",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 52,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 63,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 64,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-02-22",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-02-22",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 167,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 15,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 16,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 25,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 2,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 6,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 7,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 7,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-01",
"memberId": 8,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 10,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-01",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 120,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 123,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 124,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 125,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 134,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 48,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 52,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 48,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 52,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 54,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 157,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 167,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 168,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 174,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 120,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 124,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 125,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 132,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 133,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 15,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 16,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 17,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 18,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 19,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 21,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 23,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 25,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 72,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 73,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 74,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 75,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 76,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 77,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 78,
"groupId": "G9",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 79,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 80,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 81,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 82,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 83,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 84,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 85,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 86,
"groupId": "G9",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 87,
"groupId": "G9",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 196,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 198,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 198,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 199,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 201,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-15",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 9,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-15",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 190,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 192,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 197,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 198,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 5,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 6,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 10,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 169,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 175,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 187,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 188,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 189,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 190,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 191,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 192,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 193,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 194,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 195,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 196,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 197,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 198,
"groupId": "G4",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 199,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 200,
"groupId": "G4",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 201,
"groupId": "G4",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 167,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 168,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 5,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 9,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 10,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-03-29",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-29",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-05",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-05",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 60,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-22",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-22",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 60,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-03-08",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-03-08",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 61,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 62,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 64,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-01-25",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-01-25",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 168,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 3,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 6,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 120,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 123,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 124,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 125,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 128,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 129,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 132,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-12",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-12",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 157,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 167,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 168,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 174,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 3,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 6,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 202,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-19",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-19",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 157,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 167,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 168,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 169,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 174,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 139,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 140,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 144,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 145,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 147,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 148,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 149,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 150,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 152,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-04-26",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-04-26",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 111,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 117,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 118,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 7,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 10,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-03",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-03",
"memberId": 202,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-10",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-10",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-17",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-17",
"memberId": 202,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 160,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 164,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 167,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 168,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 173,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 174,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 120,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 121,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 122,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 124,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 134,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 107,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 136,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 138,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 140,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 143,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 147,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 148,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 149,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-24",
"memberId": 153,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-24",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 105,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 106,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 107,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 117,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 118,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 13,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-31",
"memberId": 14,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-31",
"memberId": 15,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-31",
"memberId": 16,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-31",
"memberId": 17,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 18,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 19,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 20,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 21,
"groupId": "G7",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 22,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 23,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-05-31",
"memberId": 24,
"groupId": "G7",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-05-31",
"memberId": 25,
"groupId": "G7",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 6,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 202,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 112,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 113,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 157,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 164,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 167,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 168,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 173,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 106,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 140,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 141,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 148,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 153,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 154,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 203,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 204,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 42,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 43,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 44,
"groupId": "G8",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 45,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 46,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 47,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 48,
"groupId": "G8",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 49,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 50,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 51,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 52,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 53,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 54,
"groupId": "G8",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 55,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 56,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 57,
"groupId": "G8",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 160,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 165,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 169,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 174,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 106,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 64,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-21",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 68,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-21",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-14",
"memberId": 68,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-14",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-07",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-07",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 5,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 202,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 160,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 164,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 171,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 155,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 156,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 157,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 160,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 163,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 165,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 167,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 168,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 171,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 172,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 173,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 174,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 5,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 11,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 202,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 105,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 106,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 108,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 110,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 112,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 113,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 117,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 118,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 157,
"groupId": "S2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 165,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 5,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 202,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 137,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 140,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 141,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 145,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 148,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 153,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 203,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 204,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 155,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 156,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 157,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 158,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 159,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 160,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 161,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 162,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 163,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 164,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 165,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 166,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 167,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 168,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 169,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 170,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 171,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 172,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 173,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 174,
"groupId": "S2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 175,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 176,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 177,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 178,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 179,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 180,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 181,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 182,
"groupId": "S2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 135,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 136,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 137,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 138,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 139,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 140,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 141,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 142,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 143,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 144,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 145,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 146,
"groupId": "G6",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 147,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 148,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 149,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 150,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 151,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 152,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 153,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 154,
"groupId": "G6",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 203,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 204,
"groupId": "G6",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 5,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 7,
"groupId": "G2",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 8,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 12,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 202,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 109,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 67,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-06-28",
"memberId": 68,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-06-28",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 58,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 65,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-05",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-05",
"memberId": 71,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 62,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 68,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-12",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-12",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 58,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 59,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 60,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-19",
"memberId": 61,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 62,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 63,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 64,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 65,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 66,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 67,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 68,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 69,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 70,
"groupId": "G3",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-19",
"memberId": 71,
"groupId": "G3",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 108,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 111,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-07-26",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-07-26",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 119,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 120,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 121,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 122,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 123,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 124,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 125,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 126,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 127,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 128,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 129,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 130,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 131,
"groupId": "G5",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 132,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 133,
"groupId": "G5",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 134,
"groupId": "G5",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 105,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 106,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 107,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 108,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 109,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 110,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 111,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 112,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 113,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 114,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 115,
"groupId": "G1",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 116,
"groupId": "G1",
"worship": "온라인",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 117,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 118,
"groupId": "G1",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 1,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 2,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 3,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 4,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 5,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 6,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 7,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 8,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 9,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 10,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 11,
"groupId": "G2",
"worship": "결석",
"cell": "불참"
},
{
"date": "2026-08-02",
"memberId": 12,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
},
{
"date": "2026-08-02",
"memberId": 202,
"groupId": "G2",
"worship": "출석",
"cell": "참석"
}
]

let attendance = {} // date -> { memberId -> {worship, cell, note} }
function ok(extra) { return Promise.resolve(Object.assign({ ok: true }, extra)) }
function scopeOf(code, groupId) {
  const u = users.find((x) => x.code === code)
  if (!u) return { u: null, scope: null }
  const scope = u.role === "\uCD5C\uACE0\uAD8C\uD55C" ? (groupId || null) : u.groupId
  return { u, scope }
}

export const mockApi = {
  login({ code }) {
    const u = users.find((x) => x.code === code)
    if (!u) return Promise.resolve({ ok: false, error: "\uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." })
    return ok({ user: { name: u.name, role: u.role, groupId: u.groupId }, groups })
  },
  getGroups() { return ok({ groups }) },
  getMembers({ code, groupId }) {
    const { scope } = scopeOf(code, groupId)
    const list = members.filter((m) => m.status !== "\uBE44\uD65C\uC131").filter((m) => (scope ? m.groupId === scope : true))
    return ok({ members: list })
  },
  getAttendance({ date }) { return ok({ attendance: attendance[date] || {} }) },
  getAttendanceRange({ code, groupId }) {
    const { scope } = scopeOf(code, groupId)
    const list = history.filter((r) => (scope ? r.groupId === scope : true))
    return ok({ records: list })
  },
  saveAttendance({ date, records }) {
    attendance[date] = attendance[date] || {}
    records.forEach((r) => { attendance[date][r.memberId] = { worship: r.worship, cell: r.cell, note: r.note } })
    return ok({ saved: records.length })
  },
  addMember({ name, type }) {
    const id = Math.max.apply(null, members.map((m) => Number(m.id))) + 1
    const groupId = type === "\uC9C4\uAE09\uC790" ? "S2" : "S1"
    members.push({ id, name, groupId, status: "\uC2E0\uADDC\uC790", contact: "", note: type })
    return ok({ id, groupId })
  },
  assignGroup({ memberId, groupId }) {
    const m = members.find((x) => String(x.id) === String(memberId))
    if (m) { m.groupId = groupId; m.status = "\uC815\uCC29" }
    return ok({})
  },
}
