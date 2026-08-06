import React, { useState, useEffect, useMemo, useRef } from 'react'
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

export default function AttendanceBoard({ user, groups, isAdmin, onDirtyChange }) {
  const [date, setDate] = useState(todayStr())
  const [groupId, setGroupId] = useState(isAdmin ? (groups[0]?.id || '') : user.groupId)
  const [members, setMembers] = useState([])
  const [records, setRecords] = useState({}) // memberId -> {worship, cell, note}
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [saveOk, setSaveOk] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [dirtyIds, setDirtyIds] = useState(() => new Set())
  const requestId = useRef(0)

  useEffect(() => {
    const currentRequest = ++requestId.current
    setLoading(true); setMsg(''); setError('')
    Promise.all([
      call('getMembers', { groupId }),
      call('getAttendance', { date, groupId }),
    ]).then(([mRes, aRes]) => {
      if (currentRequest !== requestId.current) return
      if (mRes.ok && aRes.ok) {
        setMembers(mRes.members || [])
        setRecords(aRes.attendance || {})
        setDirtyIds(new Set())
      } else {
        setMembers([])
        setRecords({})
        setError(mRes.error || aRes.error || '출석 정보를 불러오지 못했습니다.')
      }
      setLoading(false)
    })
  }, [date, groupId])

  useEffect(() => {
    function warnBeforeUnload(e) {
      if (dirtyIds.size === 0) return
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', warnBeforeUnload)
    return () => window.removeEventListener('beforeunload', warnBeforeUnload)
  }, [dirtyIds])

  useEffect(() => {
    onDirtyChange?.(dirtyIds.size > 0)
  }, [dirtyIds, onDirtyChange])

  function setRec(memberId, patch) {
    setRecords((prev) => ({
      ...prev,
      [memberId]: { ...(prev[memberId] || {}), ...patch },
    }))
    setDirtyIds((prev) => new Set(prev).add(String(memberId)))
    setMsg('')
  }

  function changeContext(setter, value, allowEmpty = false) {
    if (saving || (!allowEmpty && !value)) return
    if (dirtyIds.size > 0 && !window.confirm('저장하지 않은 변경사항이 있습니다. 이동할까요?')) return
    setter(value)
  }

  async function save() {
    setSaving(true); setMsg('')
    const payload = members.filter((m) => dirtyIds.has(String(m.id))).map((m) => {
      const r = records[m.id] || {}
      return { memberId: m.id, worship: r.worship || '', cell: r.cell || '', note: r.note || '' }
    })
    const res = await call('saveAttendance', { date, groupId, records: payload })
    setSaving(false)
    setSaveOk(res.ok)
    setMsg(res.ok ? `저장 완료 (${res.saved}명)` : '저장 실패: ' + (res.error || '알 수 없는 오류'))
    if (res.ok) setDirtyIds(new Set())
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
  const visibleMembers = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('ko')
    if (!normalized) return members
    return members.filter((member) => member.name.toLocaleLowerCase('ko').includes(normalized))
  }, [members, query])

  return (
    <div className="board">
      <div className="controls card">
        <label className="field">
          <span>날짜</span>
          <input type="date" className="input" value={date} disabled={saving} onChange={(e) => changeContext(setDate, e.target.value)} />
          <div className="datenav">
            <button type="button" disabled={saving} onClick={() => changeContext(setDate, addDays(date, -7))}>◀ 지난주</button>
            <button type="button" disabled={saving} className={date === todayStr() ? 'today on' : 'today'} onClick={() => changeContext(setDate, todayStr())}>오늘</button>
            <button type="button" disabled={saving} onClick={() => changeContext(setDate, addDays(date, 7))}>다음주 ▶</button>
          </div>
        </label>
        {isAdmin && (
          <label className="field">
            <span>순</span>
            <select className="input" value={groupId} disabled={saving} onChange={(e) => changeContext(setGroupId, e.target.value, true)}>
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

      <div className="searchcard card">
        <label className="searchbox">
          <span className="sr-only">출석 명단 검색</span>
          <input type="search" className="input" placeholder="이름으로 명단 검색" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        {query && <span className="chip">{visibleMembers.length}명</span>}
      </div>

      {error ? (
        <div className="card error" role="alert">{error}</div>
      ) : loading ? (
        <div className="center muted">불러오는 중…</div>
      ) : members.length === 0 ? (
        <div className="center muted">명단이 없습니다.</div>
      ) : visibleMembers.length === 0 ? (
        <div className="card emptysearch muted">검색 결과가 없습니다.</div>
      ) : (
        <div className="list">
          {visibleMembers.map((m) => (
            <MemberRow
              key={m.id}
              member={m}
              rec={records[m.id] || {}}
              disabled={saving}
              onChange={(p) => setRec(m.id, p)}
            />
          ))}
        </div>
      )}

      <div className="savebar">
        {msg && <span className={saveOk ? 'savemsg' : 'savemsg error'} role="status">{msg}</span>}
        <button className="btn primary" onClick={save} disabled={saving || loading || dirtyIds.size === 0}>
          {saving ? '저장 중…' : dirtyIds.size > 0 ? `저장 (${dirtyIds.size}명)` : '저장됨'}
        </button>
      </div>
    </div>
  )
}
