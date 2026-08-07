// 개인정보가 없는 로컬 미리보기용 예시 데이터입니다.
const groups = [
  { id: 'G1', name: '기쁨순', type: '일반', leaderId: 1 },
  { id: 'G2', name: '소망순', type: '일반', leaderId: 5 },
  { id: 'S1', name: '새순', type: '새순', leaderId: 9 },
  { id: 'S2', name: '새내기순', type: '새내기', leaderId: 11 },
]

const users = [
  { userId: 'u1', code: 'g1-0000', name: '기쁨순장', role: '순장', groupId: 'G1' },
  { userId: 'u2', code: 'g2-5012', name: '소망순장', role: '순장', groupId: 'G2' },
  { userId: 'u3', code: 'new-0000', name: '새순순장', role: '순장', groupId: 'S1' },
  { userId: 'u4', code: 'rookie-0000', name: '새내기순장', role: '순장', groupId: 'S2' },
  { userId: 'u5', code: 'admin-1488', name: '예시 관리자', role: '최고권한', groupId: '전체', positionTitle: '비상용 관리자', protected: true, accountLinked: true },
]

const members = [
  { id: 1, name: '기쁨순장', groupId: 'G1', status: '정착', note: '순장' },
  { id: 2, name: '예시청년 1', groupId: 'G1', status: '정착', note: '' },
  { id: 3, name: '예시청년 2', groupId: 'G1', status: '정착', note: '' },
  { id: 4, name: '예시청년 3', groupId: 'G1', status: '정착', note: '' },
  { id: 5, name: '소망순장', groupId: 'G2', status: '정착', note: '순장' },
  { id: 6, name: '예시청년 4', groupId: 'G2', status: '정착', note: '' },
  { id: 7, name: '예시청년 5', groupId: 'G2', status: '정착', note: '' },
  { id: 8, name: '예시청년 6', groupId: 'G2', status: '정착', note: '' },
  { id: 9, name: '새순순장', groupId: 'S1', status: '정착', note: '순장' },
  { id: 10, name: '새가족 예시', groupId: 'S1', status: '신규자', note: '초신자' },
  { id: 11, name: '새내기순장', groupId: 'S2', status: '정착', note: '순장' },
  { id: 12, name: '진급자 예시', groupId: 'S2', status: '신규자', note: '고등부 진급' },
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
// 해제된(비활성) 계정은 로그인할 수 없다 — 백엔드 authUser 와 동일한 규칙
function isExpired(user) { return Boolean(user.expiresOn && user.expiresOn < new Date().toISOString().slice(0, 10)) }
function userFor(code) { return users.find((user) => user.code === code && user.active !== false && !isExpired(user)) }
function scopeFor(user, groupId) { return user.role === '최고권한' ? (groupId || null) : user.groupId }
function isMultiLeaderGroup(group) { return group && (group.type === '새순' || group.type === '새내기') }
function leaderIdsFor(group) {
  const ids = Array.isArray(group.leaderIds) ? group.leaderIds : (group.leaderId ? [group.leaderId] : [])
  return ids.map(String)
}
function setLeaderIds(group, ids) {
  group.leaderIds = [...new Set(ids.map(String))]
  group.leaderId = group.leaderIds[0] || ''
}
function accountUserId(groupId, memberId) { return `leader-${memberId}-${groupId}` }
function scopedMembers(user, groupId) {
  const scope = scopeFor(user, groupId)
  return members.filter((member) => member.status !== '비활성' && (!scope || member.groupId === scope))
}

export const mockApi = {
  login({ code }) {
    const user = userFor(code)
    if (!user) return fail('코드가 올바르지 않습니다.')
    return ok({ user: { name: user.name, role: user.role, groupId: user.groupId, positionTitle: user.positionTitle || '', expiresOn: user.expiresOn || '' }, groups })
  },
  getGroups({ code }) {
    if (!userFor(code)) return fail('유효하지 않은 액세스 코드입니다.')
    return ok({ groups })
  },
  getMembers({ code, groupId }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    return ok({ members: scopedMembers(user, groupId).map((member) => ({
      ...member,
      groupName: groups.find((group) => group.id === member.groupId)?.name || '',
    })) })
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
  addMember({ code, name, type }) {
    const user = userFor(code)
    if (!user) return fail('유효하지 않은 액세스 코드입니다.')
    if (type !== '초신자' && type !== '진급자') return fail('신규자 유형이 올바르지 않습니다.')
    const targetType = type === '진급자' ? '새내기' : '새순'
    const group = groups.find((item) => item.type === targetType)
    if (user.role !== '최고권한' && user.groupId !== group.id) return fail('이 유형의 신규자를 등록할 권한이 없습니다.')
    const id = Math.max(...members.map((member) => Number(member.id))) + 1
    members.push({ id, name: String(name).trim(), groupId: group.id, status: '신규자', note: type })
    return ok({ id, groupId: group.id })
  },
  getAdmins({ code }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    return ok({
      admins: users.filter((user) => user.role === '최고권한').map((user) => ({
        userId: user.userId,
        name: user.name,
        positionTitle: user.positionTitle || '',
        expiresOn: user.expiresOn || '',
        active: user.active !== false,
        expired: isExpired(user),
        accountLinked: Boolean(user.accountLinked),
        email: user.email || '',
        protected: Boolean(user.protected),
        isSelf: user.userId === current.userId,
        code: user.active !== false && !user.accountLinked ? user.code : '',
      })),
    })
  },
  createAdminInvitation({ code, name, positionTitle, expiresOn = '' }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    if (String(name || '').trim().length < 2) return fail('이름은 2~50자로 입력하세요.')
    if (String(positionTitle || '').trim().length < 2) return fail('직책은 2~50자로 입력하세요.')
    const userId = `admin-${Math.random().toString(36).slice(2, 10)}`
    const inviteCode = `admin-${Math.random().toString(36).slice(2, 14)}`
    users.push({ userId, code: inviteCode, name: name.trim(), role: '최고권한', groupId: '전체', positionTitle: positionTitle.trim(), expiresOn, active: true, accountLinked: false })
    return ok({ userId, code: inviteCode })
  },
  updateAdmin({ code, userId, name, positionTitle, expiresOn = '' }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    const target = users.find((user) => user.userId === userId && user.role === '최고권한')
    if (!target) return fail('해당 최고권한 계정을 찾을 수 없습니다.')
    if (target.protected) return fail('비상용 admin 계정은 수정할 수 없습니다.')
    if (String(name || '').trim().length < 2 || String(positionTitle || '').trim().length < 2) return fail('이름과 직책을 확인하세요.')
    Object.assign(target, { name: name.trim(), positionTitle: positionTitle.trim(), expiresOn })
    return ok()
  },
  regenerateAdminCode({ code, userId }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    const target = users.find((user) => user.userId === userId && user.role === '최고권한')
    if (!target) return fail('해당 최고권한 계정을 찾을 수 없습니다.')
    if (target.accountLinked) return fail('이미 이메일 계정이 연결됐습니다. 비밀번호 찾기를 사용하세요.')
    if (isExpired(target)) return fail('임기 종료일을 먼저 수정하세요.')
    target.code = `admin-${Math.random().toString(36).slice(2, 14)}`
    return ok({ code: target.code })
  },
  deactivateAdmin({ code, userId }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    const target = users.find((user) => user.userId === userId && user.role === '최고권한')
    if (!target) return fail('해당 최고권한 계정을 찾을 수 없습니다.')
    if (target.protected) return fail('비상용 admin 계정은 비활성화할 수 없습니다.')
    if (target.userId === current.userId) return fail('현재 로그인한 자기 계정은 비활성화할 수 없습니다.')
    target.active = false
    return ok()
  },
  reactivateAdmin({ code, userId }) {
    const current = userFor(code)
    if (!current || current.role !== '최고권한') return fail('최고권한만 최고권한 계정을 관리할 수 있습니다.')
    const target = users.find((user) => user.userId === userId && user.role === '최고권한')
    if (!target) return fail('해당 최고권한 계정을 찾을 수 없습니다.')
    if (isExpired(target)) return fail('임기 종료일을 먼저 수정하세요.')
    target.active = true
    return ok()
  },
  getLeaders({ code }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 조회할 수 있습니다.')
    return ok({
      leaders: groups.map((group) => {
        const accounts = users.filter((item) => item.role === '순장' && item.groupId === group.id)
        const used = new Set()
        const leaders = leaderIdsFor(group).map((memberId) => {
          const member = members.find((item) => String(item.id) === memberId)
          const account = accounts.find((item) => item.userId === accountUserId(group.id, memberId))
            || accounts.find((item) => !used.has(item.userId) && item.name === member?.name)
          if (account) used.add(account.userId)
          return {
            memberId,
            userId: account?.userId || '',
            name: member?.name || account?.name || '',
            code: account?.code || '',
            active: account ? account.active !== false : false,
          }
        })
        const first = leaders[0] || {}
        return {
          groupId: group.id,
          groupName: group.name,
          type: group.type,
          multiple: isMultiLeaderGroup(group),
          leaders,
          leaderId: first.memberId || '',
          leaderName: first.name || '',
          code: first.code || '',
          active: first.active || false,
        }
      }),
    })
  },
  setLeader({ code, groupId, memberId }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 순장을 지정할 수 있습니다.')
    const group = groups.find((item) => item.id === groupId)
    const member = members.find((item) => String(item.id) === String(memberId))
    if (!group) return fail('해당 순을 찾을 수 없습니다.')
    if (!member) return fail('해당 구성원을 찾을 수 없습니다.')
    const previousLeaderId = leaderIdsFor(group)[0] || ''
    const nextIds = isMultiLeaderGroup(group)
      ? [...leaderIdsFor(group), String(member.id)]
      : [String(member.id)]
    setLeaderIds(group, nextIds)
    const accounts = users.filter((item) => item.role === '순장' && item.groupId === groupId)
    const stableUserId = accountUserId(groupId, member.id)
    const existing = isMultiLeaderGroup(group)
      ? accounts.find((item) => item.userId === stableUserId || item.name === member.name)
      : accounts[0]
    if (existing) {
      existing.name = member.name
      existing.active = true
      const codeChanged = !isMultiLeaderGroup(group) && previousLeaderId !== String(member.id)
      if (codeChanged) existing.code = `${groupId.toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`
      return ok({ code: existing.code, leaderName: member.name, memberId: String(member.id), userId: existing.userId, isNew: false, codeChanged })
    }
    const newCode = `${groupId.toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`
    users.push({ userId: stableUserId, code: newCode, name: member.name, role: '순장', groupId, active: true })
    return ok({ code: newCode, leaderName: member.name, memberId: String(member.id), userId: stableUserId, isNew: true })
  },
  clearLeader({ code, groupId, memberId, userId }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 순장을 해제할 수 있습니다.')
    const group = groups.find((item) => item.id === groupId)
    if (!group) return fail('해당 순을 찾을 수 없습니다.')
    const accounts = users.filter((item) => item.role === '순장' && item.groupId === groupId)
    if (isMultiLeaderGroup(group)) {
      if (!memberId && !userId) return fail('해제할 순장을 지정하세요.')
      setLeaderIds(group, leaderIdsFor(group).filter((id) => id !== String(memberId || '')))
      const account = accounts.find((item) => item.userId === userId)
        || accounts.find((item) => item.userId === accountUserId(groupId, memberId))
      if (account) account.active = false
    } else {
      setLeaderIds(group, [])
      accounts.forEach((account) => { account.active = false })
    }
    return ok()
  },
  regenerateCode({ code, groupId, userId }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 코드를 재발급할 수 있습니다.')
    const group = groups.find((item) => item.id === groupId)
    const accounts = users.filter((item) => item.role === '순장' && item.groupId === groupId)
    const account = isMultiLeaderGroup(group) ? accounts.find((item) => item.userId === userId) : accounts[0]
    if (!account) return fail('먼저 순장을 지정하세요.')
    account.code = `${groupId.toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`
    account.active = true
    return ok({ code: account.code })
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
  syncMemberGroupNames({ code }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 순이름을 동기화할 수 있습니다.')
    return ok({ updated: members.length })
  },
  renewMembers({ code, assignments }) {
    const user = userFor(code)
    if (!user || user.role !== '최고권한') return fail('최고권한만 순원을 재배정할 수 있습니다.')
    if (!Array.isArray(assignments) || assignments.length === 0) return fail('변경할 순원을 선택하세요.')
    const seen = new Set()
    const changes = []
    for (const assignment of assignments) {
      const member = members.find((item) => String(item.id) === String(assignment.memberId))
      const group = groups.find((item) => item.id === assignment.groupId)
      if (!member || !group || seen.has(String(assignment.memberId)) || member.status === '비활성') {
        return fail('중복되거나 올바르지 않은 재배정 항목이 있습니다.')
      }
      seen.add(String(assignment.memberId))
      if (member.groupId !== group.id) changes.push({ member, group })
    }
    if (changes.length === 0) return fail('실제로 변경되는 순원이 없습니다.')
    let settled = 0
    changes.forEach(({ member, group }) => {
      member.groupId = group.id
      member.groupName = group.name
      if (member.status === '신규자' && group.type === '일반') {
        member.status = '정착'
        settled++
      }
    })
    return ok({ moved: changes.length, settled })
  },
}
