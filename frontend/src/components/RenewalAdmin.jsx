import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { call } from '../api.js'
import { buildRenewalCsv, parseRenewalPaste } from '../renewalTemplate.js'
import LeaderAdmin from './LeaderAdmin.jsx'

export default function RenewalAdmin({ groups, onDirtyChange }) {
  const [step, setStep] = useState('members')
  const [dirty, setDirty] = useState(false)
  const handleDirty = useCallback((value) => {
    setDirty(value)
    onDirtyChange?.(value)
  }, [onDirtyChange])

  function changeStep(nextStep) {
    if (nextStep === step) return
    if (dirty && !window.confirm('저장하지 않은 순원 재배정이 있습니다. 순장 단계로 이동할까요?')) return
    setDirty(false)
    onDirtyChange?.(false)
    setStep(nextStep)
  }

  return (
    <div>
      <div className="viewtabs renewal-tabs" role="tablist" aria-label="리뉴얼 관리 단계">
        <button type="button" role="tab" aria-selected={step === 'members'} className={step === 'members' ? 'viewtab on' : 'viewtab'} onClick={() => changeStep('members')}>
          1. 순원 재배정
        </button>
        <button type="button" role="tab" aria-selected={step === 'leaders'} className={step === 'leaders' ? 'viewtab on' : 'viewtab'} onClick={() => changeStep('leaders')}>
          2. 순장 재지정
        </button>
      </div>
      {step === 'members' ? <MemberRenewal groups={groups} onDirtyChange={handleDirty} /> : <LeaderAdmin groups={groups} />}
    </div>
  )
}

function MemberRenewal({ groups, onDirtyChange }) {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [sourceGroupId, setSourceGroupId] = useState(groups[0]?.id || '')
  const [query, setQuery] = useState('')
  const [pendingOnly, setPendingOnly] = useState(false)
  const [assignments, setAssignments] = useState({})
  const [pasted, setPasted] = useState('')
  const [msg, setMsg] = useState('')
  const [msgOk, setMsgOk] = useState(true)

  async function load(syncNames = false) {
    setLoading(true)
    const sync = syncNames ? await call('syncMemberGroupNames') : { ok: true, updated: 0 }
    const res = await call('getMembers', { groupId: '' })
    if (res.ok) {
      setMembers(res.members || [])
      if (!sync.ok) {
        setMsgOk(false)
        setMsg('Members 순이름 동기화 실패: ' + (sync.error || 'Apps Script 재배포가 필요합니다.'))
      } else if (sync.updated > 0) {
        setMsgOk(true)
        setMsg(`Members 시트의 순이름 ${sync.updated}건을 동기화했습니다.`)
      }
    } else {
      setMembers([])
      setMsgOk(false)
      setMsg('순원 명단을 불러오지 못했습니다: ' + (res.error || '알 수 없는 오류'))
    }
    setLoading(false)
  }
  useEffect(() => { load(true) /* eslint-disable-next-line */ }, [])

  const groupName = useMemo(() => Object.fromEntries(groups.map((group) => [group.id, group.name])), [groups])
  const visibleMembers = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('ko')
    return members.filter((member) => {
      if (sourceGroupId && member.groupId !== sourceGroupId) return false
      if (pendingOnly && !assignments[String(member.id)]) return false
      return !normalized || `${member.name} ${member.groupName || groupName[member.groupId] || ''}`.toLocaleLowerCase('ko').includes(normalized)
    })
  }, [assignments, groupName, members, pendingOnly, query, sourceGroupId])
  const pendingCount = Object.keys(assignments).length
  useEffect(() => { onDirtyChange?.(pendingCount > 0) }, [onDirtyChange, pendingCount])

  function stage(member, nextGroupId) {
    setAssignments((current) => {
      const next = { ...current }
      if (!nextGroupId || nextGroupId === member.groupId) delete next[String(member.id)]
      else next[String(member.id)] = nextGroupId
      return next
    })
    setMsg('')
  }

  function downloadTemplate() {
    const blob = new Blob([buildRenewalCsv(members, groups)], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `순원_리뉴얼_서식_${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  function applyPasted() {
    const parsed = parseRenewalPaste(pasted, members, groups)
    if (parsed.errors.length) {
      setMsgOk(false)
      setMsg(`붙여넣기 확인 필요: ${parsed.errors.slice(0, 3).join(' / ')}${parsed.errors.length > 3 ? ` 외 ${parsed.errors.length - 3}건` : ''}`)
      return
    }
    const count = Object.keys(parsed.assignments).length
    if (count === 0) {
      setMsgOk(false)
      setMsg('변경할 순이 입력된 실제 변경 대상이 없습니다.')
      return
    }
    if (pendingCount > 0 && !window.confirm('현재 화면에서 선택한 변경사항을 붙여넣은 서식으로 바꿀까요?')) return
    setAssignments(parsed.assignments)
    setSourceGroupId('')
    setQuery('')
    setPendingOnly(true)
    setMsgOk(true)
    setMsg(`서식에서 ${count}명의 변경을 불러왔습니다. 아래 변경 대상을 확인한 뒤 저장하세요.`)
  }

  async function saveRenewal() {
    if (pendingCount === 0) return
    if (!window.confirm(`${pendingCount}명의 순을 변경할까요?\n과거 출석 기록은 그대로 보존되며, 저장 후 2단계에서 순장을 재지정하세요.`)) return
    setSaving(true); setMsg('')
    const payload = Object.entries(assignments).map(([memberId, groupId]) => ({ memberId, groupId }))
    const res = await call('renewMembers', { assignments: payload })
    setSaving(false)
    setMsgOk(res.ok)
    if (res.ok) {
      setAssignments({})
      setPendingOnly(false)
      setMsg(`순원 ${res.moved}명 재배정 완료${res.settled ? ` · 신규자 ${res.settled}명 정착 처리` : ''}. 이제 순장을 확인하세요.`)
      load(false)
    } else {
      setMsg('재배정 실패: ' + (res.error || '알 수 없는 오류'))
    }
  }

  return (
    <div className="board renewal-board">
      <div className="card">
        <h2>순원 리뉴얼 <span className="muted">(최고권한)</span></h2>
        <p className="muted small">
          기존 순을 골라 순원들의 새 소속을 미리 지정한 뒤 한 번에 저장합니다.
          Members의 <b>순ID·순이름·순배정일</b>만 갱신되고, 과거 출석 기록은 바뀌지 않습니다.
        </p>
        {msg && <div className={msgOk ? 'savemsg formmsg' : 'savemsg formmsg error'} role="status">{msg}</div>}
      </div>

      <div className="card renewal-filters">
        <label className="field">
          <span>현재 순</span>
          <select className="input" value={sourceGroupId} onChange={(e) => setSourceGroupId(e.target.value)}>
            <option value="">전체 순</option>
            {groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
          </select>
        </label>
        <label className="field">
          <span>순원 검색</span>
          <input type="search" className="input" placeholder="이름 검색" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>

      <div className="card renewal-template">
        <div className="sectionhead">
          <div>
            <h2>리뉴얼 서식으로 일괄 입력</h2>
            <div className="muted small">전체 활성 순원 서식에서 변경할 순만 채운 뒤, 표 전체를 복사해 아래에 붙여넣으세요. 순이름 또는 순ID를 사용할 수 있습니다.</div>
          </div>
          <button type="button" className="minibtn template-download" disabled={loading || members.length === 0} onClick={downloadTemplate}>CSV 서식 다운로드</button>
        </div>
        <textarea
          className="input renewpaste"
          rows="5"
          value={pasted}
          onChange={(e) => setPasted(e.target.value)}
          placeholder={'member_id\t이름\t현재순\t변경할 순\n1\t홍길동\t기쁨순\t소망순'}
          aria-label="작성한 리뉴얼 서식 붙여넣기"
        />
        <button type="button" className="btn primary template-apply" disabled={loading || !pasted.trim()} onClick={applyPasted}>붙여넣은 서식 적용</button>
      </div>

      <div className="summary renewal-summary">
        <span className="chip">표시 {visibleMembers.length}명</span>
        <span className={pendingCount ? 'chip on' : 'chip'}>변경 대기 {pendingCount}명</span>
        <button type="button" className={pendingOnly ? 'chipfilter on' : 'chipfilter'} disabled={pendingCount === 0} onClick={() => setPendingOnly((value) => !value)}>변경 대기만 보기</button>
      </div>

      {loading ? (
        <div className="center muted">순원 명단을 불러오는 중…</div>
      ) : visibleMembers.length === 0 ? (
        <div className="card emptysearch muted">해당하는 순원이 없습니다.</div>
      ) : (
        <div className="renewlist">
          {visibleMembers.map((member) => {
            const nextGroupId = assignments[String(member.id)] || member.groupId
            const changed = nextGroupId !== member.groupId
            return (
              <div className={changed ? 'card renewrow changed' : 'card renewrow'} key={member.id}>
                <div className="renewperson">
                  <span className="name">{member.name}</span>
                  <span className="muted small">현재 {member.groupName || groupName[member.groupId] || member.groupId}</span>
                </div>
                <div className="renewselect">
                  <span aria-hidden="true">→</span>
                  <select className="input" aria-label={`${member.name} 변경할 순`} disabled={saving} value={nextGroupId} onChange={(e) => stage(member, e.target.value)}>
                    {groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
                  </select>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="card renewactions">
        <button type="button" className="minibtn" disabled={saving || pendingCount === 0} onClick={() => { setAssignments({}); setPendingOnly(false) }}>변경 초기화</button>
        <button type="button" className="btn primary" disabled={saving || pendingCount === 0} onClick={saveRenewal}>
          {saving ? '저장 중…' : pendingCount ? `${pendingCount}명 재배정 저장` : '변경할 순을 선택하세요'}
        </button>
      </div>
    </div>
  )
}
