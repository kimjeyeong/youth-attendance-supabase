import React, { useState } from 'react'
import { call } from '../api.js'
import { claimAccount, signOut } from '../supabase-client.js'

export default function ClaimAccount({ onClaimed, onLogout }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    if (!code.trim()) return
    setLoading(true)
    setError('')
    const claimed = await claimAccount(code)
    if (!claimed?.ok) {
      setError(claimed?.error || '계정 연결에 실패했습니다.')
      setLoading(false)
      return
    }
    const login = await call('login')
    setLoading(false)
    if (login.ok) onClaimed(login)
    else setError(login.error || '권한 정보를 불러오지 못했습니다.')
  }

  async function logout() {
    await signOut()
    onLogout()
  }

  return (
    <div className="center">
      <form className="card login" onSubmit={submit}>
        <h1>운영자 권한 연결</h1>
        <p className="muted">이메일 인증이 완료됐습니다. 관리자에게 받은 일회용 연결 코드를 입력하세요.</p>
        <input
          className="input"
          type="password"
          autoComplete="one-time-code"
          placeholder="일회용 연결 코드"
          aria-label="일회용 연결 코드"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          autoFocus
        />
        {error && <div className="error" role="alert">{error}</div>}
        <button className="btn primary" disabled={loading}>{loading ? '연결 중…' : '권한 연결'}</button>
        <button className="textbtn" type="button" onClick={logout}>다른 이메일로 로그인</button>
      </form>
    </div>
  )
}
