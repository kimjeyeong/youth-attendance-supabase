import test from 'node:test'
import assert from 'node:assert/strict'
import { computeStats } from '../src/stats.js'

test('출석률은 예배 상태가 체크된 기록만 집계한다', () => {
  const groups = [{ id: 'G1', name: '기쁨순' }]
  const members = [
    { id: 1, name: '가', groupId: 'G1', status: '정착' },
    { id: 2, name: '나', groupId: 'G1', status: '신규자' },
    { id: 3, name: '다', groupId: 'G1', status: '정착' },
  ]
  const records = [
    { date: '2026-08-02', memberId: 1, groupId: 'G1', worship: '출석', cell: '참석' },
    { date: '2026-08-02', memberId: 2, groupId: 'G1', worship: '결석', cell: '불참' },
    { date: '2026-08-02', memberId: 3, groupId: 'G1', worship: '', cell: '' },
  ]

  const stats = computeStats(members, records, groups)
  assert.equal(stats.total, 3)
  assert.equal(stats.newbies, 1)
  assert.equal(stats.latestRate, 50)
  assert.equal(stats.cellRate, 50)
  assert.equal(stats.weekly[0].total, 2)
  assert.equal(stats.byGroup[0].rate, 50)
  assert.equal(stats.people[0].rate, 100)
  assert.equal(stats.people[1].rate, 0)
  assert.equal(stats.people[2].checked, 0)
})

test('개인별 현황은 최근 12주만 집계하고 온라인을 출석에 포함한다', () => {
  const groups = [{ id: 'G1', name: '기쁨순' }]
  const members = [{ id: 1, name: '가', groupId: 'G1', status: '정착' }]
  const records = Array.from({ length: 13 }, (_, index) => ({
    date: `2026-01-${String(index + 1).padStart(2, '0')}`,
    memberId: 1,
    groupId: 'G1',
    worship: index === 0 ? '결석' : index === 12 ? '온라인' : '출석',
  }))

  const stats = computeStats(members, records, groups)
  assert.equal(stats.analysisWeeks, 12)
  assert.equal(stats.people[0].checked, 12)
  assert.equal(stats.people[0].attended, 12)
  assert.equal(stats.people[0].online, 1)
  assert.equal(stats.people[0].rate, 100)
  assert.equal(stats.people[0].latestStatus, '온라인')
})
