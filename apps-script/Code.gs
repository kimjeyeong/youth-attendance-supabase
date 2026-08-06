/**
 * 젊은이사역부 출석체크 - Google Apps Script API
 * ------------------------------------------------
 * 이 스크립트는 Google Sheet(DB)에 붙어서 REST 비슷한 API 역할을 합니다.
 * 프론트엔드(React)가 fetch로 호출하면 여기서 시트를 읽고/씁니다.
 *
 * 배포 방법은 apps-script/README.md 참고.
 */

// ===== 설정 =====
// 이 스크립트를 시트에 "바인딩"해서 만들면 아래 그대로 두면 됩니다.
// 따로 만들었다면 SHEET_ID 에 시트 ID를 넣으세요.
var SHEET_ID = '';   // 예: '1ZbeExnYy5gLUbnYZxRVy_4eaITzilT9iKxv1QnpOdnI'

var TAB = {
  members: 'members',
  attendance: 'attendance',
  groups: 'groups',
  users: 'users'
};

// ===== 진입점 =====
function doGet(e) {
  // 헬스체크 / 브라우저에서 직접 열었을 때
  return json({ ok: true, message: 'attendance API is running' });
}

function doPost(e) {
  var res;
  try {
    var req = JSON.parse(e.postData.contents);
    res = handle(req);
  } catch (err) {
    res = { ok: false, error: String(err && err.message || err) };
  }
  return json(res);
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== 라우팅 =====
function handle(req) {
  var action = req.action;

  // login 은 인증 전에 처리
  if (action === 'login') return login(req);

  // 그 외 모든 요청은 code 로 사용자 인증
  var user = authUser(req.code);
  if (!user) return { ok: false, error: '유효하지 않은 액세스 코드입니다.' };

  switch (action) {
    case 'getGroups':     return { ok: true, user: publicUser(user), groups: getGroups() };
    case 'getMembers':    return { ok: true, members: getMembers(user, req.groupId) };
    case 'getAttendance':
      if (!isValidDate(req.date)) return { ok: false, error: '날짜 형식이 올바르지 않습니다.' };
      return { ok: true, attendance: getAttendance(req.date, user, req.groupId) };
    case 'getAttendanceRange': return { ok: true, records: getAttendanceRange(user, req.groupId) };
    case 'saveAttendance':return saveAttendance(req, user);
    case 'addMember':     return addMember(req, user);
    case 'assignGroup':   return assignGroup(req, user);
    default:              return { ok: false, error: '알 수 없는 action: ' + action };
  }
}

// ===== 시트 유틸 =====
function ss() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}
function sheet(name) {
  var s = ss().getSheetByName(name);
  if (!s) throw new Error('탭을 찾을 수 없음: ' + name);
  return s;
}
// 헤더명 -> 열 인덱스(0-based)
function headerMap(sh) {
  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var map = {};
  headers.forEach(function (h, i) { map[String(h).trim()] = i; });
  return map;
}
// 시트 전체를 객체 배열로 (rowNum 포함)
function readObjects(name) {
  var sh = sheet(name);
  var last = sh.getLastRow();
  if (last < 2) return { rows: [], map: headerMap(sh), sh: sh };
  var values = sh.getRange(1, 1, last, sh.getLastColumn()).getValues();
  var headers = values[0].map(function (h) { return String(h).trim(); });
  var rows = [];
  for (var r = 1; r < values.length; r++) {
    var obj = { _row: r + 1 };
    for (var c = 0; c < headers.length; c++) obj[headers[c]] = values[r][c];
    rows.push(obj);
  }
  return { rows: rows, map: headerMap(sh), sh: sh };
}
function today() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
}
function nowStamp() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
}
function isValidDate(value) {
  var text = String(value || '');
  var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  if (!match) return false;
  var date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.getFullYear() === Number(match[1])
    && date.getMonth() === Number(match[2]) - 1
    && date.getDate() === Number(match[3]);
}
function requireHeaders(map, names) {
  names.forEach(function (name) {
    if (map[name] === undefined) throw new Error('필수 헤더를 찾을 수 없음: ' + name);
  });
}

// ===== 인증 =====
function authUser(code) {
  if (!code) return null;
  var data = readObjects(TAB.users);
  for (var i = 0; i < data.rows.length; i++) {
    var u = data.rows[i];
    if (String(u['액세스코드']).trim() === String(code).trim()
        && String(u['활성']).trim().toUpperCase() === 'Y') {
      return {
        userId: u['user_id'],
        name: u['이름'],
        role: u['역할'],
        groupId: String(u['담당순ID']).trim()
      };
    }
  }
  return null;
}
function publicUser(user) {
  return { name: user.name, role: user.role, groupId: user.groupId };
}
function isAdmin(user) { return user.role === '최고권한'; }

function login(req) {
  var user = authUser(req.code);
  if (!user) return { ok: false, error: '코드가 올바르지 않습니다.' };
  return { ok: true, user: publicUser(user), groups: getGroups() };
}

// ===== 데이터 조회 =====
function getGroups() {
  var data = readObjects(TAB.groups);
  return data.rows
    .filter(function (g) { return String(g['활성']).trim().toUpperCase() !== 'N'; })
    .map(function (g) {
      return {
        id: String(g['순ID']).trim(),
        name: g['순이름'],
        type: g['유형'],
        leaderId: g['순장_member_id']
      };
    });
}

// 권한에 따라 명단 필터. 최고권한이 groupId 지정하면 그 순만.
function getMembers(user, groupId) {
  var scope = isAdmin(user) ? (groupId || null) : user.groupId;
  var data = readObjects(TAB.members);
  return data.rows
    .filter(function (m) { return m['id'] !== '' && m['id'] !== null; })
    .filter(function (m) {
      if (String(m['상태']).trim() === '비활성') return false;
      if (!scope) return true;                     // 전체
      return String(m['순ID']).trim() === scope;   // 특정 순
    })
    .map(function (m) {
      return {
        id: m['id'],
        name: m['이름'],
        contact: m['연락처'],
        status: m['상태'],
        groupId: String(m['순ID']).trim(),
        note: m['비고']
      };
    });
}

// 특정 날짜의 출석 기록 (memberId -> {worship, cell, note})
function getAttendance(date, user, groupId) {
  if (!date) return {};
  var members = getMembers(user, groupId);
  var allow = {};
  members.forEach(function (m) { allow[String(m.id)] = true; });

  var data = readObjects(TAB.attendance);
  var out = {};
  data.rows.forEach(function (a) {
    if (fmtDate(a['날짜']) !== date) return;
    var mid = String(a['member_id']);
    if (!allow[mid]) return;
    out[mid] = {
      worship: a['예배'],
      cell: a['순모임'],
      note: a['비고']
    };
  });
  return out;
}

// 권한 범위 안의 출석 이력 전체 (대시보드용)
function getAttendanceRange(user, groupId) {
  var members = getMembers(user, groupId);
  var allow = {};
  members.forEach(function (m) { allow[String(m.id)] = m.groupId; });

  var data = readObjects(TAB.attendance);
  var out = [];
  data.rows.forEach(function (a) {
    var mid = String(a['member_id']);
    if (!allow[mid]) return;
    out.push({
      date: fmtDate(a['날짜']),
      memberId: a['member_id'],
      groupId: allow[mid],
      worship: a['예배'],
      cell: a['순모임']
    });
  });
  return out;
}

function fmtDate(v) {
  if (v instanceof Date) {
    return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return String(v).trim().substring(0, 10);
}

// ===== 출석 저장 (upsert) =====
function saveAttendance(req, user) {
  var date = String(req.date || '');
  if (!isValidDate(date)) return { ok: false, error: '날짜 형식이 올바르지 않습니다.' };
  if (!Array.isArray(req.records)) return { ok: false, error: 'records 형식이 올바르지 않습니다.' };
  if (req.records.length > 500) return { ok: false, error: '한 번에 저장할 수 있는 인원을 초과했습니다.' };

  // 클라이언트가 보낸 memberId를 신뢰하지 않고, 로그인 사용자의 권한 범위로 재검증한다.
  var allowed = {};
  getMembers(user, isAdmin(user) ? req.groupId : user.groupId)
    .forEach(function (member) { allowed[String(member.id)] = true; });
  var seen = {};
  var worshipOptions = { '': true, '출석': true, '결석': true, '온라인': true };
  var cellOptions = { '': true, '참석': true, '불참': true };
  var records = [];
  for (var r = 0; r < req.records.length; r++) {
    var input = req.records[r] || {};
    var memberId = String(input.memberId === undefined ? '' : input.memberId).trim();
    var worship = String(input.worship || '').trim();
    var cell = String(input.cell || '').trim();
    var note = String(input.note || '').trim();
    if (!memberId || !allowed[memberId]) return { ok: false, error: '저장 권한이 없는 구성원이 포함되어 있습니다.' };
    if (seen[memberId]) return { ok: false, error: '중복된 구성원 기록이 포함되어 있습니다.' };
    if (!worshipOptions[worship] || !cellOptions[cell]) return { ok: false, error: '출석 상태 값이 올바르지 않습니다.' };
    if (note.length > 500) return { ok: false, error: '비고는 500자 이내로 입력하세요.' };
    seen[memberId] = true;
    records.push({ memberId: memberId, worship: worship, cell: cell, note: note });
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet(TAB.attendance);
    var map = headerMap(sh);
    requireHeaders(map, ['날짜', 'member_id', '예배', '순모임', '비고', '체크한사람', '기록시각']);
    var last = sh.getLastRow();
    var colDate = map['날짜'], colMid = map['member_id'];
    var colWor = map['예배'], colCell = map['순모임'], colNote = map['비고'],
        colBy = map['체크한사람'], colTs = map['기록시각'];

    // 기존 (날짜|member) -> rowNum 인덱스
    var index = {};
    var vals = [];
    if (last >= 2) {
      vals = sh.getRange(2, 1, last - 1, sh.getLastColumn()).getValues();
      for (var i = 0; i < vals.length; i++) {
        var d = fmtDate(vals[i][colDate]);
        var mid = String(vals[i][colMid]);
        if (d === date) index[mid] = i + 2; // 실제 행 번호
      }
    }

    var appends = [];
    var ts = nowStamp();
    records.forEach(function (rec) {
      var mid = String(rec.memberId);
      if (index[mid]) {
        var row = index[mid];
        var rowValues = vals[row - 2].slice();
        rowValues[colWor] = rec.worship;
        rowValues[colCell] = rec.cell;
        rowValues[colNote] = rec.note;
        rowValues[colBy] = user.name;
        rowValues[colTs] = ts;
        sh.getRange(row, 1, 1, sh.getLastColumn()).setValues([rowValues]);
      } else {
        var newRow = [];
        newRow[colDate] = date;
        newRow[colMid] = rec.memberId;
        newRow[colWor] = rec.worship || '';
        newRow[colCell] = rec.cell || '';
        newRow[colNote] = rec.note || '';
        newRow[colBy] = user.name;
        newRow[colTs] = ts;
        for (var k = 0; k < sh.getLastColumn(); k++) if (newRow[k] === undefined) newRow[k] = '';
        appends.push(newRow);
      }
    });
    if (appends.length) {
      sh.getRange(sh.getLastRow() + 1, 1, appends.length, sh.getLastColumn()).setValues(appends);
    }
    return { ok: true, saved: records.length };
  } finally {
    lock.releaseLock();
  }
}

// ===== 신규자 등록 =====
function addMember(req, user) {
  var name = (req.name || '').trim();
  if (!name) return { ok: false, error: '이름을 입력하세요.' };
  if (name.length > 50) return { ok: false, error: '이름은 50자 이내로 입력하세요.' };
  if (req.type !== '초신자' && req.type !== '진급자') return { ok: false, error: '신규자 유형이 올바르지 않습니다.' };
  var contact = String(req.contact || '').trim();
  if (contact.length > 50) return { ok: false, error: '연락처는 50자 이내로 입력하세요.' };

  // 순ID를 하드코딩하지 않고 groups 탭의 유형으로 찾는다.
  var targetType = req.type === '진급자' ? '새내기' : '새순';
  var targetGroup = getGroups().filter(function (group) { return String(group.type).trim() === targetType; })[0];
  if (!targetGroup) return { ok: false, error: targetType + ' 유형의 순을 찾을 수 없습니다.' };
  var groupId = targetGroup.id;

  // 권한: 최고권한 = 둘 다 / 순장 = 자기 담당순이 그 특수 순일 때만
  if (!isAdmin(user) && user.groupId !== groupId) {
    return { ok: false, error: '이 유형의 신규자를 등록할 권한이 없습니다.' };
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = readObjects(TAB.members);
    var maxId = 0;
    data.rows.forEach(function (m) {
      var n = parseInt(m['id'], 10);
      if (!isNaN(n) && n > maxId) maxId = n;
    });
    var newId = maxId + 1;
    var sh = data.sh, map = data.map;
    requireHeaders(map, ['id', '이름', '연락처', '상태', '순ID', '등록일', '순배정일', '비고']);
    var row = [];
    row[map['id']] = newId;
    row[map['이름']] = name;
    row[map['연락처']] = contact;
    row[map['상태']] = '신규자';
    row[map['순ID']] = groupId;
    row[map['등록일']] = today();
    row[map['순배정일']] = '';
    row[map['비고']] = req.note || (req.type === '진급자' ? '고등부 진급' : '초신자');
    for (var k = 0; k < sh.getLastColumn(); k++) if (row[k] === undefined) row[k] = '';
    sh.appendRow(row);
    return { ok: true, id: newId, groupId: groupId };
  } finally {
    lock.releaseLock();
  }
}

// ===== 순 배정 (최고권한 전용) =====
function assignGroup(req, user) {
  if (!isAdmin(user)) return { ok: false, error: '최고권한만 순을 배정할 수 있습니다.' };
  var memberId = String(req.memberId === undefined ? '' : req.memberId).trim();
  var groupId = String(req.groupId || '').trim();
  if (!memberId || !groupId) return { ok: false, error: 'memberId, groupId 필요' };

  var targetGroup = getGroups().filter(function (group) { return group.id === groupId; })[0];
  if (!targetGroup || String(targetGroup.type).trim() !== '일반') {
    return { ok: false, error: '활성 상태인 일반 순으로만 배정할 수 있습니다.' };
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = readObjects(TAB.members);
    var map = data.map, sh = data.sh;
    requireHeaders(map, ['id', '순ID', '상태', '순배정일']);
    for (var i = 0; i < data.rows.length; i++) {
      if (String(data.rows[i]['id']) === memberId) {
        if (String(data.rows[i]['상태']).trim() !== '신규자') {
          return { ok: false, error: '배정 대기 중인 신규자만 순을 배정할 수 있습니다.' };
        }
        var row = data.rows[i]._row;
        sh.getRange(row, map['순ID'] + 1).setValue(groupId);
        sh.getRange(row, map['상태'] + 1).setValue('정착');
        sh.getRange(row, map['순배정일'] + 1).setValue(today());
        return { ok: true };
      }
    }
    return { ok: false, error: '해당 member를 찾을 수 없습니다.' };
  } finally {
    lock.releaseLock();
  }
}
