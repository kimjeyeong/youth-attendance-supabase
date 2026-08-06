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
