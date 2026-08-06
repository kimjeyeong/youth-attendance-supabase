import React, { useState, useEffect, useMemo, useRef } from 'react'
import { call } from '../api.js'
import { computeStats } from '../stats.js'

export default function Dashboard({ user, groups, isAdmin }) {
  const [groupId, setGroupId] = useState(isAdmin ? '' : user.groupId) // '' = 전체
  const [members, setMembers] = useState([])
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const requestId = useRef(0)

  useEffect(() => {
    const currentRequest = ++requestId.current
    setLoading(true); setError('')
    Promise.all([
      call('getMembers', { groupId }),
      call('getAttendanceRange', { groupId }),
    ]).then(([m, r]) => {
      if (currentRequest !== requestId.current) return
      if (m.ok && r.ok) {
        setMembers(m.members || [])
        setRecords(r.records || [])
      } else {
        setMembers([])
        setRecords([])
        setError(m.error || r.error || '분석 정보를 불러오지 못했습니다.')
      }
      setLoading(false)
    })
  }, [groupId])

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

      {error ? (
        <div className="card error" role="alert">{error}</div>
      ) : loading ? (
        <div className="center muted">분석 중…</div>
      ) : (
        <>
          {/* 요약 타일 */}
          <div className="tiles">
            <Tile label="인원" value={stats.total} unit="명" />
            <Tile label="최근 예배 출석률" value={stats.latestRate} unit="%" accent="ok"
              sub={`${stats.latestPresent} / ${stats.latestTotal}명`} />
            <Tile label="순모임 참석률" value={stats.cellRate} unit="%" accent="on"
              sub={`${stats.cellPresent} / ${stats.cellTotal}명`} />
            <Tile label="신규자" value={stats.newbies} unit="명" accent="new" />
          </div>

          {/* 주별 출석 추이 */}
          <div className="card">
            <h2>주별 예배 출석률 <span className="muted">(최근 {stats.weekly.length}주)</span></h2>
            {stats.weekly.length === 0 ? <div className="muted">데이터가 없습니다.</div> : (
              <div className="barchart">
                {stats.weekly.map((w) => (
                  <div className="barcol" key={w.date} title={`${w.date} · 출석 ${w.present}/${w.total}명 (${w.rate}%)`}>
                    <div className="barval">{w.rate}%</div>
                    <div className="bartrack">
                      <div className="bar" style={{ height: Math.max(4, w.rate) + '%' }} />
                    </div>
                    <div className="barcnt">{w.present}/{w.total}</div>
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
                  <div className="hbar" key={g.id} title={`${g.name} · 출석 ${g.present}/${g.total}명`}>
                    <div className="hbar-name">{g.name}</div>
                    <div className="hbar-track">
                      <div className="hbar-fill" style={{ width: g.rate + '%' }} />
                    </div>
                    <div className="hbar-val">{g.rate}%<span className="hbar-cnt">{g.present}/{g.total}</span></div>
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

function Tile({ label, value, unit, accent, sub }) {
  return (
    <div className={'tile ' + (accent || '')}>
      <div className="tile-val">{value}<span className="tile-unit">{unit}</span></div>
      <div className="tile-lbl">{label}</div>
      {sub && <div className="tile-sub">{sub}</div>}
    </div>
  )
}
