import React, { useState, useEffect } from 'react'
import { call, getCode, clearCode } from './api.js'
import { MOCK } from './config.js'
import Login from './components/Login.jsx'
import AttendanceBoard from './components/AttendanceBoard.jsx'
import NewMember from './components/NewMember.jsx'
import Dashboard from './components/Dashboard.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [groups, setGroups] = useState([])
  const [tab, setTab] = useState('attendance') // attendance | new
  const [booting, setBooting] = useState(true)

  // 저장된 코드로 자동 로그인 시도
  useEffect(() => {
    const code = getCode()
    if (!code) { setBooting(false); return }
    call('login', {}).then((res) => {
      if (res.ok) { setUser(res.user); setGroups(res.groups || []) }
      setBooting(false)
    })
  }, [])

  function onLogin(res) {
    setUser(res.user)
    setGroups(res.groups || [])
  }
  function logout() {
    clearCode()
    setUser(null)
    setTab('attendance')
  }

  if (booting) return <div className="center muted">불러오는 중…</div>
  if (!user) return <Login onLogin={onLogin} />

  const isAdmin = user.role === '최고권한'

  // 신규자 등록 화면은 최고권한 + 새순/새내기순 순장만
  const newbieGid = groups.find((g) => g.type === '새순')?.id
  const rookieGid = groups.find((g) => g.type === '새내기')?.id
  const canSeeNew = isAdmin || user.groupId === newbieGid || user.groupId === rookieGid
  const activeTab = tab === 'new' && !canSeeNew ? 'attendance' : tab

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="title">젊은이사역부 출석</div>
          <div className="subtitle">
            {user.name} · {user.role}
            {MOCK && <span className="badge">예시모드</span>}
          </div>
        </div>
        <button className="link" onClick={logout}>로그아웃</button>
      </header>

      <nav className="tabs">
        <button className={tab === 'attendance' ? 'tab on' : 'tab'} onClick={() => setTab('attendance')}>
          출석체크
        </button>
        <button className={activeTab === 'dashboard' ? 'tab on' : 'tab'} onClick={() => setTab('dashboard')}>
          분석
        </button>
        {canSeeNew && (
          <button className={activeTab === 'new' ? 'tab on' : 'tab'} onClick={() => setTab('new')}>
            신규자
          </button>
        )}
      </nav>

      <main>
        {activeTab === 'attendance' && <AttendanceBoard user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'dashboard' && <Dashboard user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'new' && <NewMember user={user} groups={groups} isAdmin={isAdmin} />}
      </main>
    </div>
  )
}
