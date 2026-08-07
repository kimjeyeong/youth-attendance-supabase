import React, { useEffect, useState } from 'react'
import { call } from '../api.js'

const POSITION_SUGGESTIONS = ['양육팀장', '담당 목사', '회장', '부회장', '총무', '서기', '회계', '임원']
const PERMISSION_OPTIONS = [
  { value: 'owner', label: '진짜 최고권한' },
  { value: 'executive', label: '운영진·목사' },
  { value: 'discipleship', label: '양육팀' },
]

export default function AdminManagement() {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState('')
  const [message, setMessage] = useState('')
  const [messageOk, setMessageOk] = useState(true)
  const [revealed, setRevealed] = useState(() => new Set())
  const [form, setForm] = useState({ name: '', positionTitle: '', permissionLevel: 'executive', expiresOn: '' })
  const [editing, setEditing] = useState(null)

  async function load() {
    setLoading(true)
    const result = await call('getAdmins')
    if (result.ok) setAdmins(result.admins || [])
    else notify(false, result.error || '최고권한 목록을 불러오지 못했습니다.')
    setLoading(false)
  }

  useEffect(() => { load() /* eslint-disable-next-line */ }, [])

  function notify(ok, text) {
    setMessageOk(ok)
    setMessage(text)
  }

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function createInvitation(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.positionTitle.trim()) return
    setBusyId('create'); setMessage('')
    const result = await call('createAdminInvitation', form)
    setBusyId('')
    if (!result.ok) return notify(false, result.error || '초대 코드를 발급하지 못했습니다.')
    setForm({ name: '', positionTitle: '', permissionLevel: 'executive', expiresOn: '' })
    setRevealed((current) => new Set(current).add(result.userId))
    notify(true, '관리 계정 초대 코드를 발급했습니다. 본인에게만 전달하세요.')
    await load()
  }

  async function saveEdit(event) {
    event.preventDefault()
    if (!editing) return
    setBusyId(editing.userId); setMessage('')
    const result = await call('updateAdmin', editing)
    setBusyId('')
    if (!result.ok) return notify(false, result.error || '정보를 수정하지 못했습니다.')
    setEditing(null)
    notify(true, '관리 계정 정보를 수정했습니다.')
    await load()
  }

  async function regenerate(admin) {
    if (!window.confirm(`${admin.name}님의 연결 코드를 새로 발급할까요?\n기존 코드는 즉시 사용할 수 없게 됩니다.`)) return
    setBusyId(admin.userId); setMessage('')
    const result = await call('regenerateAdminCode', { userId: admin.userId })
    setBusyId('')
    if (!result.ok) return notify(false, result.error || '코드를 재발급하지 못했습니다.')
    setRevealed((current) => new Set(current).add(admin.userId))
    notify(true, '새 연결 코드를 발급했습니다.')
    await load()
  }

  async function changeActive(admin) {
    const action = admin.active ? 'deactivateAdmin' : 'reactivateAdmin'
    if (admin.active && !window.confirm(`${admin.name}님의 최고권한을 비활성화할까요?`)) return
    setBusyId(admin.userId); setMessage('')
    const result = await call(action, { userId: admin.userId })
    setBusyId('')
    if (!result.ok) return notify(false, result.error || '계정 상태를 변경하지 못했습니다.')
    notify(true, admin.active ? '최고권한 계정을 비활성화했습니다.' : '최고권한 계정을 다시 활성화했습니다.')
    await load()
  }

  async function copy(code) {
    try {
      await navigator.clipboard.writeText(code)
      notify(true, '연결 코드를 복사했습니다.')
    } catch {
      notify(false, '복사하지 못했습니다. 코드를 직접 선택해 복사하세요.')
    }
  }

  function toggleCode(userId) {
    setRevealed((current) => {
      const next = new Set(current)
      if (next.has(userId)) next.delete(userId); else next.add(userId)
      return next
    })
  }

  if (loading && admins.length === 0) return <div className="center muted">불러오는 중…</div>

  return (
    <div className="board admin-management">
      <div className="card">
        <h2>권한 관리</h2>
        <p className="muted small">
          각 담당자가 본인 이메일로 가입한 뒤 아래에서 발급한 일회용 코드를 입력합니다.
          진짜 최고권한만 이 화면을 볼 수 있으며, 직책과 실제 권한 등급은 별도로 지정됩니다.
        </p>
        {message && <div className={messageOk ? 'savemsg formmsg' : 'savemsg formmsg error'} role="status">{message}</div>}
      </div>

      <form className="card admin-invite" onSubmit={createInvitation}>
        <h3>새 관리 계정 초대</h3>
        <div className="admin-form-grid">
          <label>
            <span>이름</span>
            <input className="input" value={form.name} onChange={(event) => updateForm('name', event.target.value)} placeholder="홍길동" maxLength={50} required />
          </label>
          <label>
            <span>직책</span>
            <input className="input" list="admin-position-options" value={form.positionTitle} onChange={(event) => updateForm('positionTitle', event.target.value)} placeholder="양육팀장, 담당 목사, 회장…" maxLength={50} required />
          </label>
          <label>
            <span>권한 등급</span>
            <select className="input" value={form.permissionLevel} onChange={(event) => updateForm('permissionLevel', event.target.value)}>
              {PERMISSION_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label>
            <span>임기 종료일 <small className="muted">(선택)</small></span>
            <input className="input" type="date" value={form.expiresOn} onChange={(event) => updateForm('expiresOn', event.target.value)} />
          </label>
        </div>
        <datalist id="admin-position-options">
          {POSITION_SUGGESTIONS.map((position) => <option key={position} value={position} />)}
        </datalist>
        <button className="btn primary" disabled={busyId === 'create'}>{busyId === 'create' ? '발급 중…' : '초대 코드 발급'}</button>
      </form>

      <div className="admin-list">
        {admins.map((admin) => {
          const busy = busyId === admin.userId
          const showCode = revealed.has(admin.userId)
          const canDeactivate = !admin.protected && !admin.isSelf
          return (
            <div className={admin.active && !admin.expired ? 'card admin-card' : 'card admin-card inactive'} key={admin.userId}>
              <div className="admin-card-top">
                <div>
                  <div className="admin-name-line">
                    <span className="name">{admin.name}</span>
                    <span className="tag linked">{admin.positionTitle || '직책 미지정'}</span>
                    <span className="tag">{admin.permissionLabel || '운영진·목사'}</span>
                    {admin.protected && <span className="tag">비상용</span>}
                    {admin.isSelf && <span className="tag">내 계정</span>}
                    {admin.expired && <span className="tag new">임기 종료</span>}
                    {!admin.active && <span className="tag new">비활성</span>}
                  </div>
                  <div className="muted small">{admin.email || (admin.accountLinked ? '연결된 이메일' : '이메일 연결 대기')}</div>
                  <div className="muted small">임기: {admin.expiresOn || '종료일 없음'}</div>
                </div>
              </div>

              {admin.code && (
                <div className="codebox">
                  <code className="codeval">{showCode ? admin.code : '••••••••'}</code>
                  <button type="button" className="minibtn" onClick={() => toggleCode(admin.userId)}>{showCode ? '숨기기' : '보기'}</button>
                  <button type="button" className="minibtn" onClick={() => copy(admin.code)}>복사</button>
                  <button type="button" className="minibtn" disabled={busy} onClick={() => regenerate(admin)}>재발급</button>
                </div>
              )}

              {editing?.userId === admin.userId ? (
                <form className="admin-edit" onSubmit={saveEdit}>
                  <input className="input" aria-label="최고권한 이름 수정" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} maxLength={50} required />
                  <input className="input" aria-label="최고권한 직책 수정" list="admin-position-options" value={editing.positionTitle} onChange={(event) => setEditing({ ...editing, positionTitle: event.target.value })} maxLength={50} required />
                  <select className="input" aria-label="권한 등급 수정" value={editing.permissionLevel} onChange={(event) => setEditing({ ...editing, permissionLevel: event.target.value })}>
                    {PERMISSION_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  <input className="input" aria-label="최고권한 임기 종료일 수정" type="date" value={editing.expiresOn || ''} onChange={(event) => setEditing({ ...editing, expiresOn: event.target.value })} />
                  <div className="admin-actions">
                    <button className="minibtn" disabled={busy}>저장</button>
                    <button type="button" className="minibtn" onClick={() => setEditing(null)}>취소</button>
                  </div>
                </form>
              ) : (
                <div className="admin-actions">
                  {!admin.protected && <button type="button" className="minibtn" disabled={busy} onClick={() => setEditing({ userId: admin.userId, name: admin.name, positionTitle: admin.positionTitle, permissionLevel: admin.permissionLevel || 'executive', expiresOn: admin.expiresOn || '' })}>정보 수정</button>}
                  {!admin.protected && (
                    <button type="button" className={admin.active ? 'minibtn danger' : 'minibtn'} disabled={busy || (admin.active && !canDeactivate)} onClick={() => changeActive(admin)}>
                      {admin.active ? '비활성화' : '다시 활성화'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
