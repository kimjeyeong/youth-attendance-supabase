import React, { useState } from 'react'
import { call, saveCode } from '../api.js'
import { MOCK, SUPABASE } from '../config.js'
import { sendPasswordReset, signIn, signUp } from '../supabase-client.js'

export default function Login({ onLogin, onNeedsClaim }) {
  if (!SUPABASE) return <LegacyLogin onLogin={onLogin} />
  return <EmailLogin onLogin={onLogin} onNeedsClaim={onNeedsClaim} />
}

function EmailLogin({ onLogin, onNeedsClaim }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function switchMode(next) {
    setMode(next)
    setPassword('')
    setConfirm('')
    setError('')
    setMessage('')
  }

  async function submit(event) {
    event.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')
    setMessage('')

    if (mode === 'reset') {
      const { error: resetError } = await sendPasswordReset(email)
      setLoading(false)
      if (resetError) setError(resetError.message)
      else setMessage('비밀번호 변경 링크를 이메일로 보냈습니다. 메일함을 확인하세요.')
      return
    }

    if (password.length < 10) {
      setLoading(false)
      setError('비밀번호는 10자 이상으로 입력하세요.')
      return
    }
    if (mode === 'signup' && password !== confirm) {
      setLoading(false)
      setError('비밀번호가 서로 다릅니다.')
      return
    }

    if (mode === 'signup') {
      const { data, error: signupError } = await signUp(email, password)
      setLoading(false)
      if (signupError) setError(signupError.message)
      else if (data.session) onNeedsClaim()
      else setMessage('인증 메일을 보냈습니다. 이메일의 인증 링크를 누른 뒤 로그인하세요.')
      return
    }

    const { error: loginError } = await signIn(email, password)
    if (loginError) {
      setLoading(false)
      setError('이메일 또는 비밀번호를 확인하세요.')
      return
    }
    const login = await call('login')
    setLoading(false)
    if (login.ok) onLogin(login)
    else if (login.code === 'ACCOUNT_NOT_LINKED') onNeedsClaim()
    else setError(login.error || '로그인에 실패했습니다.')
  }

  return (
    <div className="center">
      <form className="card login" onSubmit={submit}>
        <h1>출석체크</h1>
        <p className="muted">
          {mode === 'signin' && '순장·관리자 이메일로 로그인하세요.'}
          {mode === 'signup' && '본인 이메일을 인증한 뒤 운영자 권한을 연결합니다.'}
          {mode === 'reset' && '가입한 이메일로 비밀번호 변경 링크를 보냅니다.'}
        </p>
        <input className="input" type="email" autoComplete="email" placeholder="이메일" aria-label="이메일" value={email} onChange={(event) => setEmail(event.target.value)} autoFocus />
        {mode !== 'reset' && (
          <input className="input" type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} placeholder="비밀번호 (10자 이상)" aria-label="비밀번호" value={password} onChange={(event) => setPassword(event.target.value)} />
        )}
        {mode === 'signup' && (
          <input className="input" type="password" autoComplete="new-password" placeholder="비밀번호 확인" aria-label="비밀번호 확인" value={confirm} onChange={(event) => setConfirm(event.target.value)} />
        )}
        {error && <div className="error" role="alert">{error}</div>}
        {message && <div className="savemsg authmsg" role="status">{message}</div>}
        <button className="btn primary" disabled={loading}>
          {loading ? '처리 중…' : mode === 'signin' ? '로그인' : mode === 'signup' ? '이메일 인증 후 가입' : '변경 링크 보내기'}
        </button>
        <div className="authlinks">
          {mode !== 'signin' && <button className="textbtn" type="button" onClick={() => switchMode('signin')}>로그인</button>}
          {mode !== 'signup' && <button className="textbtn" type="button" onClick={() => switchMode('signup')}>처음 가입</button>}
          {mode !== 'reset' && <button className="textbtn" type="button" onClick={() => switchMode('reset')}>비밀번호 찾기</button>}
        </div>
      </form>
    </div>
  )
}

function LegacyLogin({ onLogin }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    if (!code.trim()) return
    setLoading(true)
    setError('')
    const accessCode = code.trim()
    const result = await call('login', {}, accessCode)
    setLoading(false)
    if (result.ok) {
      saveCode(accessCode)
      onLogin(result)
    } else setError(result.error || '로그인 실패')
  }

  return (
    <div className="center">
      <form className="card login" onSubmit={submit}>
        <h1>출석체크</h1>
        <p className="muted">순장 · 관리자 액세스 코드를 입력하세요.</p>
        <input className="input" placeholder="액세스 코드" type="password" autoComplete="current-password" aria-label="액세스 코드" value={code} onChange={(event) => setCode(event.target.value)} autoFocus />
        {error && <div className="error">{error}</div>}
        <button className="btn primary" disabled={loading}>{loading ? '확인 중…' : '로그인'}</button>
        {MOCK && <div className="hint">예시 코드: <code>g2-5012</code> (순장) / <code>admin-1488</code> (최고권한)</div>}
      </form>
    </div>
  )
}
