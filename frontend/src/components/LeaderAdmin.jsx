import React, { useState, useEffect } from 'react'
import { call } from '../api.js'

// 최고권한 전용: 순장을 지정하면 로그인 계정(액세스 코드)까지 자동으로 만들어진다.
export default function LeaderAdmin({ groups }) {
  const [leaders, setLeaders] = useState([])
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState(null)
  const [msg, setMsg] = useState('')
  const [msgOk, setMsgOk] = useState(true)
  const [revealed, setRevealed] = useState(() => new Set())

  async function load() {
    setLoading(true)
    const [l, m] = await Promise.all([
      call('getLeaders'),
      call('getMembers', { groupId: '' }),
    ])
    if (l.ok) setLeaders(l.leaders || [])
    else { setMsgOk(false); setMsg('순장 목록을 불러오지 못했습니다: ' + (l.error || '')) }
    if (m.ok) setMembers(m.members || [])
    setLoading(false)
  }
  useEffect(() => { load() /* eslint-disable-next-line */ }, [])

  function notify(ok, text) { setMsgOk(ok); setMsg(text) }

  async function setLeader(groupId, memberId) {
    if (!memberId) return
    const member = members.find((x) => String(x.id) === String(memberId))
    const group = leaders.find((x) => x.groupId === groupId)
    if (!window.confirm(`${member?.name}님을 ${group?.groupName} 순장으로 지정할까요?\n로그인 코드가 자동 발급됩니다.`)) return
    setBusyId(groupId); setMsg('')
    const res = await call('setLeader', { groupId, memberId })
    setBusyId(null)
    if (res.ok) {
      notify(true, `${res.leaderName} 순장 지정 완료${res.isNew ? ` · 코드 ${res.code}` : ' (기존 코드 유지)'}`)
      setRevealed((prev) => new Set(prev).add(groupId))
      load()
    } else notify(false, '지정 실패: ' + (res.error || ''))
  }

  async function clearLeader(groupId, name) {
    if (!window.confirm(`${name} 순장을 해제할까요?\n해당 계정은 로그인할 수 없게 됩니다.`)) return
    setBusyId(groupId); setMsg('')
    const res = await call('clearLeader', { groupId })
    setBusyId(null)
    if (res.ok) { notify(true, '순장 해제 완료'); load() }
    else notify(false, '해제 실패: ' + (res.error || ''))
  }

  async function regenerate(groupId) {
    if (!window.confirm('코드를 새로 발급할까요?\n기존 코드는 즉시 사용할 수 없게 됩니다.')) return
    setBusyId(groupId); setMsg('')
    const res = await call('regenerateCode', { groupId })
    setBusyId(null)
    if (res.ok) {
      notify(true, `새 코드: ${res.code}`)
      setRevealed((prev) => new Set(prev).add(groupId))
      load()
    } else notify(false, '재발급 실패: ' + (res.error || ''))
  }

  async function copy(code) {
    try {
      await navigator.clipboard.writeText(code)
      notify(true, `코드 복사됨: ${code}`)
    } catch {
      notify(false, '복사 실패 — 코드를 직접 선택해 복사하세요.')
    }
  }

  function toggleReveal(groupId) {
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(groupId)) next.delete(groupId); else next.add(groupId)
      return next
    })
  }

  // 순별로 묶어서 고르기 쉽게
  const grouped = groups.map((g) => ({
    group: g,
    members: members.filter((m) => m.groupId === g.id),
  })).filter((x) => x.members.length > 0)

  if (loading) return <div className="center muted">불러오는 중…</div>

  return (
    <div className="board">
      <div className="card">
        <h2>순장 지정 <span className="muted">(최고권한)</span></h2>
        <p className="muted small">
          순장을 지정하면 그 사람의 <b>로그인 코드가 자동 발급</b>되고, 시트의 순장 정보도 함께 갱신됩니다.
          발급된 코드는 본인에게 개별로 전달하세요.
        </p>
        {msg && <div className={msgOk ? 'savemsg formmsg' : 'savemsg formmsg error'} role="status">{msg}</div>}
      </div>

      {leaders.map((l) => {
        const busy = busyId === l.groupId
        const show = revealed.has(l.groupId)
        return (
          <div className="card leadercard" key={l.groupId}>
            <div className="leadertop">
              <div>
                <span className="name">{l.groupName}</span>
                {l.type !== '일반' && <span className="tag new">{l.type}</span>}
              </div>
              <div className={l.leaderName ? 'leadernow' : 'leadernow none'}>
                {l.leaderName ? `순장: ${l.leaderName}` : '순장 없음'}
              </div>
            </div>

            {l.code && l.active && (
              <div className="codebox">
                <code className="codeval">{show ? l.code : '••••••••'}</code>
                <button type="button" className="minibtn" onClick={() => toggleReveal(l.groupId)}>
                  {show ? '숨기기' : '보기'}
                </button>
                <button type="button" className="minibtn" onClick={() => copy(l.code)}>복사</button>
                <button type="button" className="minibtn" disabled={busy} onClick={() => regenerate(l.groupId)}>재발급</button>
              </div>
            )}

            <div className="leaderactions">
              <select
                className="input"
                value=""
                disabled={busy}
                aria-label={`${l.groupName} 순장 지정`}
                onChange={(e) => { const v = e.target.value; e.target.value = ''; setLeader(l.groupId, v) }}
              >
                <option value="">{l.leaderName ? '순장 변경…' : '순장 지정…'}</option>
                {grouped.map((g) => (
                  <optgroup key={g.group.id} label={g.group.name}>
                    {g.members.map((m) => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {l.leaderName && (
                <button type="button" className="minibtn danger" disabled={busy}
                  onClick={() => clearLeader(l.groupId, l.leaderName)}>해제</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
