import React, { useState, useEffect, useMemo } from 'react'
import { call } from '../api.js'

function pct(n, d) { return d > 0 ? Math.round((n / d) * 100) : 0 }

export default function Dashboard({ user, groups, isAdmin }) {
  const [groupId, setGroupId] = useState(isAdmin ? '' : user.groupId) // '' = 전체
  const [members, setMembers] = useState([])
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)

  async function load() {
    setLoading(true)
    const [m, r] = await Promise.all([
      call('getMembers', { groupId }),
      call('getAttendanceRange', { groupId }),
    ])
    setMembers(m.ok ? m.members : [])
    setRecords(r.ok ? r.records : [])
    setLoading(false)
  }
  useEffect(() => { load() /* eslint-disable-next-line */ }, [groupId])

  const stats = useMemo(() => computeStats(members, records, groups), [members, records, groups])
  const showGroupCompare = isAdmin && !groupId

  return (
    <div className="board">
      {isAdmin && (
        <div className="card controls">
          <label className="field">
            <span>분석 범위</span>
            <select className="input" value={groupId} onChange={(e) => setGroupId(e.target.value)}>
              <option value="">전체</option>
              {groups.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </label>
        </div>
      )}

      {loading ? (
        <div className="center muted">분석 중…</div>
      ) : (
        <>
          {/* 요약 타일 */}
          <div className="tiles">
            <Tile label="인원" value={stats.total} unit="명" />
            <Tile label="최근 예배 출석률" value={stats.latestRate} unit="%" accent="ok" />
            <Tile label="순모임 참석률" value={stats.cellRate} unit="%" accent="on" />
            <Tile label="신규자" value={stats.newbies} unit="명" accent="new" />
          </div>

          {/* 주별 출석 추이 */}
          <div className="card">
            <h2>주별 예배 출석률 <span className="muted">(최근 {stats.weekly.length}주)</span></h2>
            {stats.weekly.length === 0 ? <div className="muted">데이터가 없습니다.</div> : (
              <div className="barchart">
                {stats.weekly.map((w) => (
                  <div className="barcol" key={w.date} title={`${w.date} · 출석 ${w.present}/${w.total}`}>
                    <div className="barval">{w.rate}</div>
                    <div className="bartrack">
                      <div className="bar" style={{ height: Math.max(4, w.rate) + '%' }} />
                    </div>
                    <div className="barlbl">{w.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 순별 비교 (최고권한·전체일 때만) */}
          {showGroupCompare && (
            <div className="card">
              <h2>순별 출석률 비교</h2>
              <div className="hbars">
                {stats.byGroup.map((g) => (
                  <div className="hbar" key={g.id}>
                    <div className="hbar-name">{g.name}</div>
                    <div className="hbar-track">
                      <div className="hbar-fill" style={{ width: g.rate + '%' }} />
                    </div>
                    <div className="hbar-val">{g.rate}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 심방 대상 (최근 결석 많은 사람) */}
          <div className="card">
            <h2>심방 대상 <span className="muted">(최근 {stats.recentWeeks}주 결석)</span></h2>
            {stats.absentees.length === 0 ? (
              <div className="muted">최근 결석이 눈에 띄는 사람이 없습니다. 👏</div>
            ) : (
              <div className="list">
                {stats.absentees.map((a) => (
                  <div className="absrow" key={a.id}>
                    <span className="name">{a.name}</span>
                    <span className="muted small">{a.groupName}</span>
                    <span className="chip no">결석 {a.absent}회</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function Tile({ label, value, unit, accent }) {
  return (
    <div className={'tile ' + (accent || '')}>
      <div className="tile-val">{value}<span className="tile-unit">{unit}</span></div>
      <div className="tile-lbl">{label}</div>
    </div>
  )
}

// ===== 통계 계산 =====
function computeStats(members, records, groups) {
  const groupName = {}
  groups.forEach((g) => { groupName[g.id] = g.name })

  const total = members.length
  const newbies = members.filter((m) => m.status === '신규자').length

  // 날짜별 집계
  const byDate = {}
  records.forEach((r) => {
    const d = r.date
    if (!d) return
    if (!byDate[d]) byDate[d] = { present: 0, total: 0 }
    byDate[d].total++
    if (r.worship === '출석' || r.worship === '온라인') byDate[d].present++
  })
  const allDates = Object.keys(byDate).sort()
  const weekly = allDates.slice(-12).map((d) => ({
    date: d,
    label: d.slice(5).replace('-', '/'),
    present: byDate[d].present,
    total: byDate[d].total,
    rate: pct(byDate[d].present, byDate[d].total),
  }))
  const latestRate = weekly.length ? weekly[weekly.length - 1].rate : 0

  // 순모임 참석률 (전체 기간)
  let cellY = 0, cellN = 0
  records.forEach((r) => { if (r.cell === '참석') cellY++; else if (r.cell === '불참') cellN++ })
  const cellRate = pct(cellY, cellY + cellN)

  // 순별 비교
  const gp = {}
  records.forEach((r) => {
    const g = r.groupId || '기타'
    if (!gp[g]) gp[g] = { present: 0, total: 0 }
    gp[g].total++
    if (r.worship === '출석' || r.worship === '온라인') gp[g].present++
  })
  const byGroup = Object.keys(gp)
    .map((g) => ({ id: g, name: groupName[g] || g, rate: pct(gp[g].present, gp[g].total) }))
    .sort((a, b) => b.rate - a.rate)

  // 심방 대상: 최근 8개 예배일 중 결석 횟수
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

  return { total, newbies, weekly, latestRate, cellRate, byGroup, absentees, recentWeeks }
}
