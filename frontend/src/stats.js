function pct(n, d) { return d > 0 ? Math.round((n / d) * 100) : 0 }

export function computeStats(members, records, groups) {
  const groupName = {}
  groups.forEach((g) => { groupName[g.id] = g.name })

  const total = members.length
  const newbies = members.filter((m) => m.status === '신규자').length
  const validWorship = new Set(['출석', '온라인', '결석'])

  // 예배 상태를 실제로 체크한 기록만 출석률의 분모에 포함한다.
  const byDate = {}
  records.forEach((r) => {
    if (!r.date || !validWorship.has(r.worship)) return
    if (!byDate[r.date]) byDate[r.date] = { present: 0, total: 0 }
    byDate[r.date].total++
    if (r.worship === '출석' || r.worship === '온라인') byDate[r.date].present++
  })
  const allDates = Object.keys(byDate).sort()
  const weekly = allDates.slice(-12).map((date) => ({
    date,
    label: date.slice(5).replace('-', '/'),
    present: byDate[date].present,
    total: byDate[date].total,
    rate: pct(byDate[date].present, byDate[date].total),
  }))
  const latest = weekly.length ? weekly[weekly.length - 1] : null
  const latestRate = latest ? latest.rate : 0
  const latestPresent = latest ? latest.present : 0
  const latestTotal = latest ? latest.total : 0

  let cellY = 0, cellN = 0
  records.forEach((r) => { if (r.cell === '참석') cellY++; else if (r.cell === '불참') cellN++ })
  const cellRate = pct(cellY, cellY + cellN)
  const cellPresent = cellY
  const cellTotal = cellY + cellN

  const gp = {}
  records.forEach((r) => {
    if (!validWorship.has(r.worship)) return
    const groupId = r.groupId || '기타'
    if (!gp[groupId]) gp[groupId] = { present: 0, total: 0 }
    gp[groupId].total++
    if (r.worship === '출석' || r.worship === '온라인') gp[groupId].present++
  })
  const byGroup = Object.keys(gp)
    .map((groupId) => ({
      id: groupId,
      name: groupName[groupId] || groupId,
      rate: pct(gp[groupId].present, gp[groupId].total),
      present: gp[groupId].present,
      total: gp[groupId].total,
    }))
    .sort((a, b) => b.rate - a.rate)

  const recentDates = new Set(allDates.slice(-8))
  const recentWeeks = recentDates.size
  const absentCount = {}
  records.forEach((r) => {
    if (recentDates.has(r.date) && r.worship === '결석') {
      absentCount[r.memberId] = (absentCount[r.memberId] || 0) + 1
    }
  })
  const mById = {}
  members.forEach((m) => { mById[m.id] = m })
  const absentees = Object.keys(absentCount)
    .map((id) => ({
      id,
      absent: absentCount[id],
      name: mById[id]?.name || ('#' + id),
      groupName: groupName[mById[id]?.groupId] || '',
    }))
    .filter((a) => a.absent >= 2 && mById[a.id])
    .sort((a, b) => b.absent - a.absent)
    .slice(0, 12)

  const analysisDates = new Set(allDates.slice(-12))
  const peopleById = {}
  members.forEach((m) => {
    peopleById[String(m.id)] = {
      id: m.id,
      name: m.name,
      groupName: groupName[m.groupId] || m.groupId || '',
      attended: 0,
      inPerson: 0,
      online: 0,
      absent: 0,
      checked: 0,
      latestDate: '',
      latestStatus: '',
    }
  })
  records.forEach((r) => {
    if (!analysisDates.has(r.date) || !validWorship.has(r.worship)) return
    const person = peopleById[String(r.memberId)]
    if (!person) return
    person.checked++
    if (r.worship === '출석') {
      person.attended++
      person.inPerson++
    } else if (r.worship === '온라인') {
      person.attended++
      person.online++
    } else {
      person.absent++
    }
    if (!person.latestDate || r.date > person.latestDate) {
      person.latestDate = r.date
      person.latestStatus = r.worship
    }
  })
  const people = Object.values(peopleById)
    .map((person) => ({ ...person, rate: pct(person.attended, person.checked) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'))

  return {
    total, newbies, weekly, byGroup, absentees, recentWeeks,
    people, analysisWeeks: analysisDates.size,
    latestRate, latestPresent, latestTotal,
    cellRate, cellPresent, cellTotal,
  }
}
