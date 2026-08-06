// 개인정보가 없는 로컬 미리보기용 예시 데이터입니다.
const groups = [
  { id: 'G1', name: '기쁨순', type: '일반', leaderId: 1 },
  { id: 'G2', name: '소망순', type: '일반', leaderId: 5 },
  { id: 'S1', name: '새순', type: '새순', leaderId: 9 },
  { id: 'S2', name: '새내기순', type: '새내기', leaderId: 11 },
]

const users = [
  { code: 'g1-0000', name: '기쁨순장', role: '순장', groupId: 'G1' },
  { code: 'g2-5012', name: '소망순장', role: '순장', groupId: 'G2' },
  { code: 'new-0000', name: '새순순장', role: '순장', groupId: 'S1' },
  { code: 'rookie-0000', name: '새내기순장', role: '순장', groupId: 'S2' },
  { code: 'admin-1488', name: '예시 관리자', role: '최고권한', groupId: '전체' },
]

const members = [
  { id: 1, name: '기쁨순장', groupId: 'G1', status: '정착', contact: '', note: '순장' },
  { id: 2, name: '예시청년 1', groupId: 'G1', status: '정착', contact: '', note: '' },
  { id: 3, name: '예시청년 2', groupId: 'G1', status: '정착', contact: '', note: '' },
  { id: 4, name: '예시청년 3', groupId: 'G1', status: '정착', contact: '', note: '' },
  { id: 5, name: '소망순장', groupId: 'G2', status: '정착', contact: '', note: '순장' },
  { id: 6, name: '예시청년 4', groupId: 'G2', status: '정착', contact: '', note: '' },
  { id: 7, name: '예시청년 5', groupId: 'G2', status: '정착', contact: '', note: '' },
  { id: 8, name: '예시청년 6', groupId: 'G2', status: '정착', contact: '', note: '' },
  { id: 9, name: '새순순장', groupId: 'S1', status: '정착', contact: '', note: '순장' },
  { id: 10, name: '새가족 예시', groupId: 'S1', status: '신규자', contact: '', note: '초신자' },
  { id: 11, name: '새내기순장', groupId: 'S2', status: '정착', contact: '', note: '순장' },
  { id: 12, name: '진급자 예시', groupId: 'S2', status: '신규자', contact: '', note: '고등부 진급' },
]

const history = []
const sampleDates = ['2026-06-14', '2026-06-21', '2026-06-28', '2026-07-05', '2026-07-12', '2026-07-19', '2026-07-26', '2026-08-02']
sampleDates.forEach((date, week) => {
  members.filter((member) => member.groupId === 'G1' || member.groupId === 'G2').forEach((member) => {
    const absent = (member.id + week) % 5 === 0
    history.push({
      date,
      memberId: member.id,
      groupId: member.groupId,
      worship: absent ? '결석' : (week % 4 === 0 ? '온라인' : '출석'),
      cell: absent ? '불참' : '참석',
    })
  })
})

const attendance = {} // date -> { memberId -> { worship, cell, note } }
function ok(extra = {}) { return Promise.resolve({ ok: true, ...extra }) }
function fail(error) { return Promise.resolve({ ok: false, error }) }
function userFor(code) { return users.find((user) => user.code === code) }
function scopeFor(user, groupId) { return user.role === '최고권한' ? (groupId || null) : user.groupId }
function scopedMembers(user, groupId) {
  const scope = scopeFor(user, groupId)
  return members.filter((member) => member.status !== '비활성' && (!scope || member.groupId === scope))
}

export const mockApi = {
  login({ code }) {
    const user = userFor(code)
    if (!user) return fail('코드가 올바르지 않습니다.')
    return ok({ user: { name: user.name, role: user.role, groupId: user.groupId }, groups })
  },
  getGroups({ code }) {
    if (!userFor(code)) return fail('유효하지 않은 액세스 코드입니다.')
    return ok({ groups })
  },
  getMembers({ code, groupId }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    return ok({ members: scopedMembers(user, groupId) })
  },
  getAttendance({ code, date, groupId }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    const allowed = new Set(scopedMembers(user, groupId).map((member) => String(member.id)))
    const records = attendance[date] || {}
    const filtered = Object.fromEntries(Object.entries(records).filter(([memberId]) => allowed.has(memberId)))
    return ok({ attendance: filtered })
  },
  getAttendanceRange({ code, groupId }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    const allowed = new Set(scopedMembers(user, groupId).map((member) => String(member.id)))
    return ok({ records: history.filter((record) => allowed.has(String(record.memberId))) })
  },
  saveAttendance({ code, date, groupId, records }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    const allowed = new Map(scopedMembers(user, groupId).map((member) => [String(member.id), member]))
    if (!Array.isArray(records) || records.some((record) => !allowed.has(String(record.memberId)))) {
      return fail('저장 권한이 없는 구성원이 포함되어 있습니다.')
    }
    attendance[date] ||= {}
    records.forEach((record) => {
      const memberId = String(record.memberId)
      attendance[date][memberId] = { worship: record.worship || '', cell: record.cell || '', note: record.note || '' }
      const existing = history.find((item) => item.date === date && String(item.memberId) === memberId)
      const next = { date, memberId: record.memberId, groupId: allowed.get(memberId).groupId, worship: record.worship || '', cell: record.cell || '' }
      if (existing) Object.assign(existing, next)
      else history.push(next)
    })
    return ok({ saved: records.length })
  },
  addMember({ code, name, contact, type }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    if (type !== '초신자' && type !== '진급자') return fail('신규자 유형이 올바르지 않습니다.')
    const targetType = type === '진급자' ? '새내기' : '새순'
    const group = groups.find((item) => item.type === targetType)
    if (user.role !== '최고권한' && user.groupId !== group.id) return fail('이 유형의 신규자를 등록할 권한이 없습니다.')
    const id = Math.max(...members.map((member) => Number(member.id))) + 1
    members.push({ id, name: String(name).trim(), groupId: group.id, status: '신규자', contact: String(contact || '').trim(), note: type })
    return ok({ id, groupId: group.id })
  },
  assignGroup({ code, memberId, groupId }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 순을 배정할 수 있습니다.')
    const group = groups.find((item) => item.id === groupId && item.type === '일반')
    const member = members.find((item) => String(item.id) === String(memberId))
    if (!group) return fail('활성 상태인 일반 순으로만 배정할 수 있습니다.')
    if (!member || member.status !== '신규자') return fail('배정 대기 중인 신규자만 순을 배정할 수 있습니다.')
    member.groupId = groupId
    member.status = '정착'
    return ok()
  },
}
