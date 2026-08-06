import React, { useState, useEffect } from 'react'
import { call } from '../api.js'

export default function NewMember({ user, groups, isAdmin }) {
  const newbieGid = groups.find((g) => g.type === '새순')?.id
  const rookieGid = groups.find((g) => g.type === '새내기')?.id

  // 등록 가능한 유형: 최고권한=둘 다 / 새순 순장=초신자만 / 새내기순 순장=진급자만
  const canNewbie = isAdmin || user.groupId === newbieGid   // 초신자 → 새 순
  const canRookie = isAdmin || user.groupId === rookieGid   // 진급자 → 새내기순
  const allowed = []
  if (canNewbie) allowed.push('초신자')
  if (canRookie) allowed.push('진급자')

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [type, setType] = useState(allowed[0] || '초신자')
  const [msg, setMsg] = useState('')
  const [saving, setSaving] = useState(false)

  const [newbies, setNewbies] = useState([])
  const 일반순 = groups.filter((g) => g.type === '일반')

  async function loadNewbies() {
    if (!isAdmin) return
    const res = await call('getMembers', { groupId: '' })
    if (res.ok) setNewbies(res.members.filter((m) => m.status === '신규자'))
  }
  useEffect(() => { loadNewbies() /* eslint-disable-next-line */ }, [])

  async function register(e) {
    e.preventDefault()
    if (!name.trim()) return
    setSaving(true); setMsg('')
    const res = await call('addMember', { name: name.trim(), contact, type })
    setSaving(false)
    if (res.ok) {
      setMsg(`${name} 등록 완료 (${type === '진급자' ? '새내기순' : '새 순'})`)
      setName(''); setContact('')
      loadNewbies()
    } else setMsg('실패: ' + (res.error || ''))
  }

  async function assign(memberId, groupId) {
    if (!groupId) return
    const res = await call('assignGroup', { memberId, groupId })
    if (res.ok) loadNewbies()
    else alert(res.error || '배정 실패')
  }

  return (
    <div className="board">
      <form className="card" onSubmit={register}>
        <h2>신규자 등록</h2>
        <div className="seg2">
          {canNewbie && (
            <button type="button" className={'seg ' + (type === '초신자' ? 'active ok' : '')} onClick={() => setType('초신자')}>
              초신자 → 새 순
            </button>
          )}
          {canRookie && (
            <button type="button" className={'seg ' + (type === '진급자' ? 'active ok' : '')} onClick={() => setType('진급자')}>
              고등부 진급 → 새내기순
            </button>
          )}
        </div>
        <input className="input" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input" placeholder="연락처 (선택)" value={contact} onChange={(e) => setContact(e.target.value)} />
        <button className="btn primary" disabled={saving}>{saving ? '등록 중…' : '등록'}</button>
        {msg && <div className="savemsg">{msg}</div>}
      </form>

      {isAdmin && (
        <div className="card">
          <h2>신규자 순 배정 <span className="muted">(최고권한)</span></h2>
          {newbies.length === 0 ? (
            <div className="muted">배정 대기 중인 신규자가 없습니다.</div>
          ) : (
            <div className="list">
              {newbies.map((m) => (
                <div key={m.id} className="row card assignrow">
                  <div className="name">{m.name} <span className="tag new">{m.groupId}</span></div>
                  <select className="input" defaultValue="" onChange={(e) => assign(m.id, e.target.value)}>
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
