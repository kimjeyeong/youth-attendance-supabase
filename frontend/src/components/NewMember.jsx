import React, { useState, useEffect } from 'react'
import { call } from '../api.js'

export default function NewMember({ user, groups, isAdmin, canEditNames = false }) {
  const newbieGid = groups.find((g) => g.type === '새순')?.id
  const rookieGid = groups.find((g) => g.type === '새내기')?.id

  // 등록 가능한 유형: 최고권한=둘 다 / 새순 순장=초신자만 / 새내기순 순장=진급자만
  const canNewbie = isAdmin || user.groupId === newbieGid   // 초신자 → 새 순
  const canRookie = isAdmin || user.groupId === rookieGid   // 진급자 → 새내기순
  const allowed = []
  if (canNewbie) allowed.push('초신자')
  if (canRookie) allowed.push('진급자')

  const [name, setName] = useState('')
  const [type, setType] = useState(allowed[0] || '초신자')
  const [msg, setMsg] = useState('')
  const [msgOk, setMsgOk] = useState(true)
  const [saving, setSaving] = useState(false)

  const [newbies, setNewbies] = useState([])
  const [loadingNewbies, setLoadingNewbies] = useState(false)
  const [assigningId, setAssigningId] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [renamingId, setRenamingId] = useState(null)
  const 일반순 = groups.filter((g) => g.type === '일반')

  async function loadNewbies() {
    if (!isAdmin) return
    setLoadingNewbies(true)
    const res = await call('getMembers', { groupId: '' })
    if (res.ok) setNewbies(res.members.filter((m) => m.status === '신규자'))
    else { setMsgOk(false); setMsg('신규자 명단을 불러오지 못했습니다: ' + (res.error || '알 수 없는 오류')) }
    setLoadingNewbies(false)
  }
  useEffect(() => { loadNewbies() /* eslint-disable-next-line */ }, [])

  async function register(e) {
    e.preventDefault()
    const submittedName = name.trim()
    const submittedType = type
    if (!submittedName) return
    setSaving(true); setMsg('')
    const res = await call('addMember', { name: submittedName, type: submittedType })
    setSaving(false)
    if (res.ok) {
      setMsgOk(true)
      setMsg(`${submittedName} 등록 완료 (${submittedType === '진급자' ? '새내기순' : '새 순'})`)
      setName('')
      loadNewbies()
    } else { setMsgOk(false); setMsg('등록 실패: ' + (res.error || '알 수 없는 오류')) }
  }

  async function assign(memberId, groupId) {
    if (!groupId) return
    const member = newbies.find((item) => String(item.id) === String(memberId))
    const group = 일반순.find((item) => item.id === groupId)
    if (!window.confirm(`${member?.name || '신규자'}님을 ${group?.name || groupId}에 배정할까요?`)) return
    setAssigningId(memberId); setMsg('')
    const res = await call('assignGroup', { memberId, groupId })
    setAssigningId(null)
    if (res.ok) {
      setMsgOk(true); setMsg(`${member?.name || '신규자'} 순 배정 완료`)
      loadNewbies()
    } else { setMsgOk(false); setMsg('배정 실패: ' + (res.error || '알 수 없는 오류')) }
  }

  async function rename(memberId) {
    const nextName = editingName.trim()
    if (!nextName) return
    setRenamingId(memberId); setMsg('')
    const res = await call('updateMemberName', { memberId, name: nextName })
    setRenamingId(null)
    if (res.ok) {
      setMsgOk(true); setMsg(`${nextName} 이름 수정 완료`)
      setEditingId(null); setEditingName('')
      loadNewbies()
    } else { setMsgOk(false); setMsg('이름 수정 실패: ' + (res.error || '알 수 없는 오류')) }
  }

  return (
    <div className="board">
      <form className="card" onSubmit={register}>
        <h2>신규자 등록</h2>
        <div className="seg2">
          {canNewbie && (
            <button type="button" disabled={saving} className={'seg ' + (type === '초신자' ? 'active ok' : '')} onClick={() => setType('초신자')}>
              초신자 → 새 순
            </button>
          )}
          {canRookie && (
            <button type="button" disabled={saving} className={'seg ' + (type === '진급자' ? 'active ok' : '')} onClick={() => setType('진급자')}>
              고등부 진급 → 새내기순
            </button>
          )}
        </div>
        <input className="input" placeholder="이름" maxLength={50} disabled={saving} value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn primary" disabled={saving}>{saving ? '등록 중…' : '등록'}</button>
        {msg && <div className={msgOk ? 'savemsg formmsg' : 'savemsg formmsg error'} role="status">{msg}</div>}
      </form>

      {isAdmin && (
        <div className="card">
          <h2>신규자 순 배정 <span className="muted">(최고권한)</span></h2>
          {loadingNewbies ? (
            <div className="muted">신규자 명단을 불러오는 중…</div>
          ) : newbies.length === 0 ? (
            <div className="muted">배정 대기 중인 신규자가 없습니다.</div>
          ) : (
            <div className="list">
              {newbies.map((m) => (
                <div key={m.id} className="row card assignrow">
                  <div className="newbie-name-actions">
                    {editingId === m.id ? (
                      <>
                        <input className="input" aria-label={`${m.name} 이름 수정`} maxLength={50} disabled={renamingId !== null} value={editingName} onChange={(e) => setEditingName(e.target.value)} />
                        <button type="button" className="minibtn" disabled={renamingId !== null || !editingName.trim()} onClick={() => rename(m.id)}>{renamingId === m.id ? '저장 중…' : '저장'}</button>
                        <button type="button" className="minibtn" disabled={renamingId !== null} onClick={() => { setEditingId(null); setEditingName('') }}>취소</button>
                      </>
                    ) : (
                      <>
                        <div className="name">{m.name} <span className="tag new">{m.groupId}</span></div>
                        {canEditNames && <button type="button" className="minibtn" disabled={assigningId !== null || renamingId !== null} onClick={() => { setEditingId(m.id); setEditingName(m.name) }}>이름 수정</button>}
                      </>
                    )}
                  </div>
                  <select className="input" value="" disabled={assigningId !== null || renamingId !== null || editingId !== null} aria-label={`${m.name} 순 배정`} onChange={(e) => {
                    const selectedGroup = e.target.value
                    e.target.value = ''
                    assign(m.id, selectedGroup)
                  }}>
                    <option value="">일반 순으로 배정…</option>
                    {일반순.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
