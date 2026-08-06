import React, { useState, useEffect, useMemo } from 'react'
import { call } from '../api.js'
import MemberRow from './MemberRow.jsx'

function fmt(d) {
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}
function todayStr() { return fmt(new Date()) }
// 'YYYY-MM-DD' 에 n일 더하기 (로컬 기준, 시간대 문제 없음)
function addDays(dateStr, n) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  dt.setDate(dt.getDate() + n)
  return fmt(dt)
}

export default function AttendanceBoard({ user, groups, isAdmin }) {
  const [date, setDate] = useState(todayStr())
  const [groupId, setGroupId] = useState(isAdmin ? (groups[0]?.id || '') : user.groupId)
  const [members, setMembers] = useState([])
  const [records, setRecords] = useState({}) // memberId -> {worship, cell, note}
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  async function load() {
    setLoading(true); setMsg('')
    const [mRes, aRes] = await Promise.all([
      call('getMembers', { groupId }),
      call('getAttendance', { date, groupId }),
    ])
    if (mRes.ok) setMembers(mRes.members)
    setRecords(aRes.ok ? aRes.attendance : {})
    setLoading(false)
  }

  useEffect(() => { load() /* eslint-disable-next-line */ }, [date, groupId])

  function setRec(memberId, patch) {
    setRecords((prev) => ({
      ...prev,
      [memberId]: { ...(prev[memberId] || {}), ...patch },
    }))
  }

  async function save() {
    setSaving(true); setMsg('')
    const payload = members.map((m) => {
      const r = records[m.id] || {}
      return { memberId: m.id, worship: r.worship || '', cell: r.cell || '', note: r.note || '' }
    }).filter((r) => r.worship || r.cell || r.note)
    const res = await call('saveAttendance', { date, records: payload })
    setSaving(false)
    setMsg(res.ok ? `저장 완료 (${res.saved}명)` : '저장 실패: ' + (res.error || ''))
  }

  const summary = useMemo(() => {
    let 출석 = 0, 결석 = 0, 온라인 = 0, 미체크 = 0
    members.forEach((m) => {
      const w = records[m.id]?.worship
      if (w === '출석') 출석++
      else if (w === '결석') 결석++
      else if (w === '온라인') 온라인++
      else 미체크++
    })
    return { 출석, 결석, 온라인, 미체크, 전체: members.length }
  }, [members, records])

  const groupName = groups.find((g) => g.id === groupId)?.name || ''

  return (
    <div className="board">
      <div className="controls card">
        <label className="field">
          <span>날짜</span>
          <input type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
          <div className="datenav">
            <button type="button" onClick={() => setDate(addDays(date, -7))}>◀ 지난주</button>
            <button type="button" className={date === todayStr() ? 'today on' : 'today'} onClick={() => setDate(todayStr())}>오늘</button>
            <button type="button" onClick={() => setDate(addDays(date, 7))}>다음주 ▶</button>
          </div>
        </label>
        {isAdmin && (
          <label className="field">
            <span>순</span>
            <select className="input" value={groupId} onChange={(e) => setGroupId(e.target.value)}>
              <option value="">전체</option>
              {groups.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </label>
        )}
      </div>

      <div className="summary">
        <span className="chip">{groupName || '전체'} · {summary.전체}명</span>
        <span className="chip ok">출석 {summary.출석}</span>
        <span className="chip on">온라인 {summary.온라인}</span>
        <span className="chip no">결석 {summary.결석}</span>
        {summary.미체크 > 0 && <span className="chip muted">미체크 {summary.미체크}</span>}
      </div>

      {loading ? (
        <div className="center muted">불러오는 중…</div>
      ) : members.length === 0 ? (
        <div className="center muted">명단이 없습니다.</div>
      ) : (
        <div className="list">
          {members.map((m) => (
            <MemberRow key={m.id} member={m} rec={records[m.id] || {}} onChange={(p) => setRec(m.id, p)} />
          ))}
        </div>
      )}

      <div className="savebar">
        {msg && <span className="savemsg">{msg}</span>}
        <button className="btn primary" onClick={save} disabled={saving || loading}>
          {saving ? '저장 중…' : '저장'}
        </button>
      </div>
    </div>
  )
}
