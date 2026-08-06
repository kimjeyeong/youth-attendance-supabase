import test from 'node:test'
import assert from 'node:assert/strict'
import { mockApi } from '../src/mock.js'

test('순장은 요청값을 바꿔도 자기 순 명단만 조회한다', async () => {
  const result = await mockApi.getMembers({ code: 'g2-5012', groupId: 'G1' })
  assert.equal(result.ok, true)
  assert.ok(result.members.length > 0)
  assert.ok(result.members.every((member) => member.groupId === 'G2'))
})

test('순장은 다른 순원의 출석을 저장할 수 없다', async () => {
  const result = await mockApi.saveAttendance({
    code: 'g2-5012',
    date: '2026-08-02',
    groupId: 'G2',
    records: [{ memberId: 1, worship: '출석', cell: '참석', note: '' }],
  })
  assert.equal(result.ok, false)
})

test('선택을 모두 해제한 기록도 저장되어 기존 값을 지울 수 있다', async () => {
  const save = await mockApi.saveAttendance({
    code: 'g2-5012',
    date: '2026-08-02',
    groupId: 'G2',
    records: [{ memberId: 5, worship: '', cell: '', note: '' }],
  })
  assert.equal(save.ok, true)
  const read = await mockApi.getAttendance({ code: 'g2-5012', date: '2026-08-02', groupId: 'G2' })
  assert.deepEqual(read.attendance['5'], { worship: '', cell: '', note: '' })
})

test('일반 구성원을 신규자 배정 API로 이동시킬 수 없다', async () => {
  const result = await mockApi.assignGroup({ code: 'admin-1488', memberId: 5, groupId: 'G1' })
  assert.equal(result.ok, false)
})

test('순장은 순장 지정 기능을 쓸 수 없다', async () => {
  const list = await mockApi.getLeaders({ code: 'g2-5012' })
  assert.equal(list.ok, false)
  const set = await mockApi.setLeader({ code: 'g2-5012', groupId: 'G1', memberId: 2 })
  assert.equal(set.ok, false)
})

test('순장을 지정하면 로그인 코드가 자동 발급되고 그 코드로 로그인된다', async () => {
  const before = await mockApi.login({ code: 'zzz-none' })
  assert.equal(before.ok, false)

  const res = await mockApi.setLeader({ code: 'admin-1488', groupId: 'S1', memberId: 2 })
  assert.equal(res.ok, true)
  assert.ok(res.code)

  const login = await mockApi.login({ code: res.code })
  assert.equal(login.ok, true)
  assert.equal(login.user.role, '순장')
  assert.equal(login.user.groupId, 'S1')
})

test('순장을 해제하면 그 코드로 더 이상 로그인할 수 없다', async () => {
  const set = await mockApi.setLeader({ code: 'admin-1488', groupId: 'G1', memberId: 3 })
  assert.equal(set.ok, true)
  assert.equal((await mockApi.login({ code: set.code })).ok, true)

  const cleared = await mockApi.clearLeader({ code: 'admin-1488', groupId: 'G1' })
  assert.equal(cleared.ok, true)
  assert.equal((await mockApi.login({ code: set.code })).ok, false)
})

test('코드를 재발급하면 이전 코드는 무효가 된다', async () => {
  const set = await mockApi.setLeader({ code: 'admin-1488', groupId: 'G2', memberId: 6 })
  const oldCode = set.code
  const re = await mockApi.regenerateCode({ code: 'admin-1488', groupId: 'G2' })
  assert.equal(re.ok, true)
  assert.notEqual(re.code, oldCode)
  assert.equal((await mockApi.login({ code: oldCode })).ok, false)
  assert.equal((await mockApi.login({ code: re.code })).ok, true)
})

test('새순·새내기순은 여러 순장을 개별 계정으로 관리한다', async () => {
  const first = await mockApi.setLeader({ code: 'admin-1488', groupId: 'S2', memberId: 3 })
  const second = await mockApi.setLeader({ code: 'admin-1488', groupId: 'S2', memberId: 4 })
  assert.equal(first.ok, true)
  assert.equal(second.ok, true)
  assert.notEqual(first.userId, second.userId)
  assert.equal((await mockApi.login({ code: first.code })).ok, true)
  assert.equal((await mockApi.login({ code: second.code })).ok, true)

  const list = await mockApi.getLeaders({ code: 'admin-1488' })
  const specialGroup = list.leaders.find((group) => group.groupId === 'S2')
  assert.equal(specialGroup.multiple, true)
  assert.ok(specialGroup.leaders.some((leader) => leader.memberId === '3'))
  assert.ok(specialGroup.leaders.some((leader) => leader.memberId === '4'))

  const cleared = await mockApi.clearLeader({
    code: 'admin-1488',
    groupId: 'S2',
    memberId: first.memberId,
    userId: first.userId,
  })
  assert.equal(cleared.ok, true)
  assert.equal((await mockApi.login({ code: first.code })).ok, false)
  assert.equal((await mockApi.login({ code: second.code })).ok, true)
})

test('일반 순의 순장이 바뀌면 이전 로그인 코드를 폐기한다', async () => {
  const before = await mockApi.getLeaders({ code: 'admin-1488' })
  const oldCode = before.leaders.find((group) => group.groupId === 'G2').code
  const changed = await mockApi.setLeader({ code: 'admin-1488', groupId: 'G2', memberId: 8 })

  assert.equal(changed.ok, true)
  assert.equal(changed.codeChanged, true)
  assert.notEqual(changed.code, oldCode)
  assert.equal((await mockApi.login({ code: oldCode })).ok, false)
  assert.equal((await mockApi.login({ code: changed.code })).ok, true)
})

test('순원 리뉴얼은 현재 소속과 순이름만 바꾸고 과거 출석의 당시 순은 보존한다', async () => {
  const denied = await mockApi.renewMembers({
    code: 'new-0000',
    assignments: [{ memberId: 7, groupId: 'G1' }],
  })
  assert.equal(denied.ok, false)

  const renewed = await mockApi.renewMembers({
    code: 'admin-1488',
    assignments: [{ memberId: 7, groupId: 'G1' }],
  })
  assert.equal(renewed.ok, true)
  assert.equal(renewed.moved, 1)

  const members = await mockApi.getMembers({ code: 'admin-1488', groupId: 'G1' })
  const member = members.members.find((item) => String(item.id) === '7')
  assert.equal(member.groupId, 'G1')
  assert.equal(member.groupName, '기쁨순')

  const history = await mockApi.getAttendanceRange({ code: 'admin-1488', groupId: 'G1' })
  const oldRecord = history.records.find((record) => String(record.memberId) === '7')
  assert.equal(oldRecord.groupId, 'G2')
})
