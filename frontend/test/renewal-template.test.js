import test from 'node:test'
import assert from 'node:assert/strict'
import { buildRenewalCsv, parseRenewalPaste } from '../src/renewalTemplate.js'

const groups = [
  { id: 'G1', name: '기쁨순' },
  { id: 'G2', name: '소망순' },
]
const members = [
  { id: 1, name: '김,가', groupId: 'G1', groupName: '기쁨순' },
  { id: 2, name: '이나', groupId: 'G2', groupName: '소망순' },
]

test('리뉴얼 CSV는 한글 Excel 호환 BOM과 명확한 변경할 순 열을 포함한다', () => {
  const csv = buildRenewalCsv(members, groups)
  assert.ok(csv.startsWith('\uFEFFmember_id,이름,현재순,변경할 순'))
  assert.match(csv, /1,"김,가",기쁨순,$/m)
})

test('리뉴얼 CSV의 운영 데이터는 Excel 수식으로 실행되지 않는다', () => {
  const dangerousMembers = [
    { id: 3, name: '=HYPERLINK("https://example.invalid")', groupId: 'G3' },
    { id: 4, name: '  +SUM(1,1)', groupId: 'G3' },
  ]
  const dangerousGroups = [{ id: 'G3', name: '@악성순' }]

  const csv = buildRenewalCsv(dangerousMembers, dangerousGroups)

  assert.match(csv, /3,"'=HYPERLINK\(""https:\/\/example\.invalid""\)",'@악성순,$/m)
  assert.match(csv, /4,"'  \+SUM\(1,1\)",'@악성순,$/m)
})

test('엑셀에서 붙여넣은 새 순이름과 순ID를 변경 대기로 변환한다', () => {
  const parsed = parseRenewalPaste(
    'member_id\t이름\t현재순\t변경할 순\n1\t김,가\t기쁨순\t소망순\n2\t이나\t소망순\tG1',
    members,
    groups,
  )
  assert.deepEqual(parsed.errors, [])
  assert.deepEqual(parsed.assignments, { 1: 'G2', 2: 'G1' })
})

test('존재하지 않는 순과 중복 member_id를 저장 전에 알려준다', () => {
  const parsed = parseRenewalPaste(
    'member_id\t이름\t현재순\t변경할 순\n1\t김,가\t기쁨순\t없는순\n1\t김,가\t기쁨순\t소망순',
    members,
    groups,
  )
  assert.equal(parsed.errors.length, 2)
  assert.deepEqual(parsed.assignments, {})
})

test('기존 새순 헤더도 특별 순 새순과 구분해 호환 처리한다', () => {
  const parsed = parseRenewalPaste(
    'member_id\t이름\t현재순\t새순\n1\t김,가\t기쁨순\t소망순',
    members,
    groups,
  )
  assert.deepEqual(parsed.errors, [])
  assert.deepEqual(parsed.assignments, { 1: 'G2' })
})
