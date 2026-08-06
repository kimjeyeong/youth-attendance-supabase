import React, { useState } from 'react'
import { call, saveCode } from '../api.js'
import { MOCK } from '../config.js'

export default function Login({ onLogin }) {
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (!code.trim()) return
    setLoading(true); setErr('')
    const accessCode = code.trim()
    const res = await call('login', {}, accessCode)
    setLoading(false)
    if (res.ok) {
      saveCode(accessCode)
      onLogin(res)
    } else {
      setErr(res.error || '로그인 실패')
    }
  }

  return (
    <div className="center">
      <form className="card login" onSubmit={submit}>
        <h1>출석체크</h1>
        <p className="muted">순장 · 관리자 액세스 코드를 입력하세요.</p>
        <input
          className="input"
          placeholder="액세스 코드"
          type="password"
          autoComplete="current-password"
          aria-label="액세스 코드"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoFocus
        />
        {err && <div className="error">{err}</div>}
        <button className="btn primary" disabled={loading}>
          {loading ? '확인 중…' : '로그인'}
        </button>
        {MOCK && (
          <div className="hint">
            예시 코드: <code>g2-5012</code> (순장) / <code>admin-1488</code> (최고권한)
          </div>
        )}
      </form>
    </div>
  )
}
