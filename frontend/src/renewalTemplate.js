const HEADERS = ['member_id', '이름', '현재순', '변경할 순']
const TARGET_HEADERS = ['변경할 순', '배정할 순', '리뉴얼 순', '리뉴얼순', '새순']

function csvCell(value) {
  let text = String(value ?? '')
  // Excel은 CSV 셀이 =, +, -, @로 시작하면 수식으로 실행할 수 있다.
  // 이름·순이름은 운영 데이터이므로 앞 공백 뒤의 수식 문자까지 텍스트로 고정한다.
  if (/^[=+\-@]/.test(text.trimStart())) text = `'${text}`
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}

export function buildRenewalCsv(members, groups) {
  const groupName = Object.fromEntries(groups.map((group) => [group.id, group.name]))
  const rows = members.map((member) => [
    member.id,
    member.name,
    member.groupName || groupName[member.groupId] || member.groupId,
    '',
  ])
  return '\uFEFF' + [HEADERS, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n')
}

function splitLine(line, delimiter) {
  if (delimiter === '\t') return line.split('\t')
  const cells = []
  let cell = ''
  let quoted = false
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      if (quoted && line[i + 1] === '"') { cell += '"'; i++ }
      else quoted = !quoted
    } else if (char === delimiter && !quoted) {
      cells.push(cell); cell = ''
    } else {
      cell += char
    }
  }
  cells.push(cell)
  return cells
}

export function parseRenewalPaste(text, members, groups) {
  const lines = String(text || '').split(/\r?\n/).filter((line) => line.trim())
  if (lines.length < 2) return { assignments: {}, errors: ['헤더와 한 명 이상의 행을 붙여넣으세요.'] }

  const delimiter = lines[0].includes('\t') ? '\t' : ','
  const headers = splitLine(lines[0], delimiter).map((header) => header.replace(/^\uFEFF/, '').trim())
  const memberIndex = headers.indexOf('member_id')
  const targetIndex = headers.findIndex((header) => TARGET_HEADERS.includes(header))
  if (memberIndex < 0 || targetIndex < 0) {
    return { assignments: {}, errors: ['서식의 member_id와 변경할 순 열을 그대로 유지하세요.'] }
  }

  const memberById = Object.fromEntries(members.map((member) => [String(member.id), member]))
  const groupByValue = {}
  groups.forEach((group) => {
    groupByValue[String(group.id).trim()] = group
    groupByValue[String(group.name).trim()] = group
  })
  const assignments = {}
  const errors = []
  const seen = new Set()

  for (let index = 1; index < lines.length; index++) {
    const cells = splitLine(lines[index], delimiter)
    const memberId = String(cells[memberIndex] || '').trim()
    const target = String(cells[targetIndex] || '').trim()
    if (!memberId && !target) continue
    if (!memberId) { errors.push(`${index + 1}행: member_id가 없습니다.`); continue }
    if (seen.has(memberId)) { errors.push(`${index + 1}행: member_id ${memberId}가 중복되었습니다.`); continue }
    seen.add(memberId)
    if (!target) continue
    const member = memberById[memberId]
    const group = groupByValue[target]
    if (!member) { errors.push(`${index + 1}행: member_id ${memberId}를 찾을 수 없습니다.`); continue }
    if (!group) { errors.push(`${index + 1}행: '${target}' 순을 찾을 수 없습니다.`); continue }
    if (member.groupId !== group.id) assignments[memberId] = group.id
  }

  return { assignments, errors }
}
