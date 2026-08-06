import React, { useState } from 'react'
import { updatePassword } from '../supabase-client.js'

export default function PasswordRecovery({ onComplete }) {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setError('')
    if (password.length < 10) return setError('비밀번호는 10자 이상으로 입력하세요.')
    if (password !== confirm) return setError('비밀번호가 서로 다릅니다.')
    setLoading(true)
    const { error: updateError } = await updatePassword(password)
    setLoading(false)
    if (updateError) setError(updateError.message)
    else onComplete()
  }

  return (
    <div className="center">
      <form className="card login" onSubmit={submit}>
        <h1>새 비밀번호 설정</h1>
        <p className="muted">다른 곳에서 사용하지 않는 10자 이상의 비밀번호를 설정하세요.</p>
        <input className="input" type="password" autoComplete="new-password" placeholder="새 비밀번호" aria-label="새 비밀번호" value={password} onChange={(event) => setPassword(event.target.value)} autoFocus />
        <input className="input" type="password" autoComplete="new-password" placeholder="새 비밀번호 확인" aria-label="새 비밀번호 확인" value={confirm} onChange={(event) => setConfirm(event.target.value)} />
        {error && <div className="error" role="alert">{error}</div>}
        <button className="btn primary" disabled={loading}>{loading ? '변경 중…' : '비밀번호 변경'}</button>
      </form>
    </div>
  )
}
