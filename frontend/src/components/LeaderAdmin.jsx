import React, { useState, useEffect } from 'react'
import { call } from '../api.js'

function leaderKey(groupId, leader) {
  return `${groupId}:${leader.userId || leader.memberId}`
}

// 최고권한 전용: 순장을 지정하면 로그인 계정(액세스 코드)까지 자동으로 만들어진다.
export default function LeaderAdmin({ groups }) {
  const [leaders, setLeaders] = useState([])
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState(null)
  const [msg, setMsg] = useState('')
  const [msgOk, setMsgOk] = useState(true)
  const [revealed, setRevealed] = useState(() => new Set())
  const [query, setQuery] = useState('')

  async function load() {
    setLoading(true)
    const [l, m] = await Promise.all([
      call('getLeaders'),
      call('getMembers', { groupId: '' }),
    ])
    if (l.ok && m.ok) {
      setLeaders(l.leaders || [])
      setMembers(m.members || [])
    } else {
      setLeaders([])
      setMembers([])
      setMsgOk(false)
      setMsg('순장 관리 정보를 불러오지 못했습니다: ' + (l.error || m.error || '알 수 없는 오류'))
    }
    setLoading(false)
  }
  useEffect(() => { load() /* eslint-disable-next-line */ }, [])

  function notify(ok, text) { setMsgOk(ok); setMsg(text) }

  async function setLeader(groupId, memberId) {
    if (!memberId) return
    const member = members.find((x) => String(x.id) === String(memberId))
    const group = leaders.find((x) => x.groupId === groupId)
    const action = group?.multiple ? '추가' : '지정'
    if (!window.confirm(`${member?.name}님을 ${group?.groupName} 순장으로 ${action}할까요?\n개별 로그인 코드가 자동 발급됩니다.`)) return
    setBusyId(groupId); setMsg('')
    const res = await call('setLeader', { groupId, memberId })
    setBusyId(null)
    if (res.ok) {
      notify(true, `${res.leaderName} 순장 ${action} 완료${res.isNew || res.codeChanged ? ` · 새 코드 ${res.code}` : ' (기존 코드 유지)'}`)
      setRevealed((prev) => new Set(prev).add(leaderKey(groupId, res)))
      load()
    } else notify(false, '지정 실패: ' + (res.error || ''))
  }

  async function clearLeader(group, leader) {
    if (!window.confirm(`${leader.name} 순장을 해제할까요?\n해당 계정은 로그인할 수 없게 됩니다.`)) return
    setBusyId(group.groupId); setMsg('')
    const res = await call('clearLeader', {
      groupId: group.groupId,
      memberId: leader.memberId,
      userId: leader.userId,
    })
    setBusyId(null)
    if (res.ok) { notify(true, '순장 해제 완료'); load() }
    else notify(false, '해제 실패: ' + (res.error || ''))
  }

  async function regenerate(group, leader) {
    if (!window.confirm(`${leader.name} 순장의 코드를 새로 발급할까요?\n기존 코드는 즉시 사용할 수 없게 됩니다.`)) return
    setBusyId(group.groupId); setMsg('')
    const res = await call('regenerateCode', { groupId: group.groupId, userId: leader.userId })
    setBusyId(null)
    if (res.ok) {
      notify(true, `새 코드: ${res.code}`)
      setRevealed((prev) => new Set(prev).add(leaderKey(group.groupId, leader)))
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

  function toggleReveal(key) {
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key); else next.add(key)
      return next
    })
  }

  // 순별로 묶어서 고르기 쉽게
  const grouped = groups.map((g) => ({
    group: g,
    members: members.filter((m) => m.groupId === g.id),
  })).filter((x) => x.members.length > 0)
  const normalizedQuery = query.trim().toLocaleLowerCase('ko')
  const visibleLeaders = normalizedQuery
    ? leaders.filter((leaderGroup) => {
      const leaderNames = Array.isArray(leaderGroup.leaders)
        ? leaderGroup.leaders.map((leader) => leader.name).join(' ')
        : leaderGroup.leaderName || ''
      return `${leaderGroup.groupName} ${leaderNames}`.toLocaleLowerCase('ko').includes(normalizedQuery)
    })
    : leaders

  if (loading) return <div className="center muted">불러오는 중…</div>

  return (
    <div className="board">
      <div className="card">
        <h2>순장 지정 <span className="muted">(최고권한)</span></h2>
        <p className="muted small">
          순장을 지정하면 그 사람의 <b>로그인 코드가 자동 발급</b>되고, 시트의 순장 정보도 함께 갱신됩니다.
          새순·새내기순은 여러 명을 추가할 수 있으며, 발급된 코드는 각자에게 개별로 전달하세요.
        </p>
        {msg && <div className={msgOk ? 'savemsg formmsg' : 'savemsg formmsg error'} role="status">{msg}</div>}
      </div>

      <div className="searchcard card">
        <label className="searchbox">
          <span className="sr-only">순 또는 순장 검색</span>
          <input type="search" className="input" placeholder="순 이름 또는 순장 이름 검색" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        {query && <span className="chip">{visibleLeaders.length}개 순</span>}
      </div>

      {visibleLeaders.length === 0 && <div className="card emptysearch muted">검색 결과가 없습니다.</div>}
      {visibleLeaders.map((l) => {
        const busy = busyId === l.groupId
        const hasLeaderList = Array.isArray(l.leaders)
        const multiple = l.multiple ?? (l.type === '새순' || l.type === '새내기')
        const currentLeaders = hasLeaderList
          ? l.leaders
          : l.leaderName
            ? [{ memberId: l.leaderId, userId: '', name: l.leaderName, code: l.code, active: l.active }]
            : []
        const needsBackendUpdate = multiple && !hasLeaderList
        const activeCount = currentLeaders.filter((leader) => leader.active).length
        const selectedIds = new Set(currentLeaders.filter((leader) => leader.active).map((leader) => String(leader.memberId)))
        return (
          <div className="card leadercard" key={l.groupId}>
            <div className="leadertop">
              <div>
                <span className="name">{l.groupName}</span>
                {l.type !== '일반' && <span className="tag new">{l.type}</span>}
              </div>
              <div className={activeCount ? 'leadernow' : 'leadernow none'}>
                {activeCount ? (multiple ? `순장 ${activeCount}명` : `순장: ${currentLeaders[0]?.name}`) : '순장 없음'}
              </div>
            </div>

            {needsBackendUpdate && <div className="error small">다중 순장 사용 전 Apps Script를 먼저 재배포하세요.</div>}

            {currentLeaders.length > 0 && (
              <div className="leaderlist">
                {currentLeaders.map((leader) => {
                  const key = leaderKey(l.groupId, leader)
                  const show = revealed.has(key)
                  return (
                    <div className="leaderentry" key={key}>
                      <div className="leaderentry-top">
                        <span className="name">{leader.name || `구성원 #${leader.memberId}`}</span>
                        {!leader.active && <span className="tag new">비활성</span>}
                      </div>
                      {leader.code && (
                        <div className="codebox">
                          <code className="codeval">{show ? leader.code : '••••••••'}</code>
                          <button type="button" className="minibtn" onClick={() => toggleReveal(key)}>
                            {show ? '숨기기' : '보기'}
                          </button>
                          <button type="button" className="minibtn" onClick={() => copy(leader.code)}>복사</button>
                        </div>
                      )}
                      <div className="leaderentry-actions">
                        {leader.userId && (
                          <button type="button" className="minibtn" disabled={busy || needsBackendUpdate} onClick={() => regenerate(l, leader)}>재발급</button>
                        )}
                        <button type="button" className="minibtn danger" disabled={busy || needsBackendUpdate} onClick={() => clearLeader(l, leader)}>해제</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="leaderactions">
              <select
                className="input"
                value=""
                disabled={busy || needsBackendUpdate}
                aria-label={`${l.groupName} 순장 지정`}
                onChange={(e) => { const v = e.target.value; e.target.value = ''; setLeader(l.groupId, v) }}
              >
                <option value="">{needsBackendUpdate ? '백엔드 재배포 필요' : multiple ? '순장 추가…' : activeCount ? '순장 변경…' : '순장 지정…'}</option>
                {grouped.map((g) => {
                  const choices = g.members.filter((m) => !multiple || !selectedIds.has(String(m.id)))
                  return choices.length > 0 && (
                    <optgroup key={g.group.id} label={g.group.name}>
                      {choices.map((m) => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                      ))}
                    </optgroup>
                  )
                })}
              </select>
            </div>
          </div>
        )
      })}
    </div>
  )
}
