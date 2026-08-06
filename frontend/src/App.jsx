import React, { useState, useEffect } from 'react'
import { call, getCode, clearCode } from './api.js'
import { MOCK } from './config.js'
import Login from './components/Login.jsx'
import AttendanceBoard from './components/AttendanceBoard.jsx'
import NewMember from './components/NewMember.jsx'
import Dashboard from './components/Dashboard.jsx'
import LeaderAdmin from './components/LeaderAdmin.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [groups, setGroups] = useState([])
  const [tab, setTab] = useState('attendance') // attendance | new
  const [booting, setBooting] = useState(true)
  const [attendanceDirty, setAttendanceDirty] = useState(false)

  // 저장된 코드로 자동 로그인 시도
  useEffect(() => {
    const code = getCode()
    if (!code) { setBooting(false); return }
    call('login', {}).then((res) => {
      if (res.ok) { setUser(res.user); setGroups(res.groups || []) }
      else clearCode()
      setBooting(false)
    })
  }, [])

  function onLogin(res) {
    setUser(res.user)
    setGroups(res.groups || [])
  }
  function logout() {
    if (attendanceDirty && !window.confirm('저장하지 않은 출석 변경사항이 있습니다. 로그아웃할까요?')) return
    clearCode()
    setUser(null)
    setTab('attendance')
    setAttendanceDirty(false)
  }
  function changeTab(nextTab) {
    if (tab === 'attendance' && nextTab !== 'attendance' && attendanceDirty
        && !window.confirm('저장하지 않은 출석 변경사항이 있습니다. 다른 화면으로 이동할까요?')) return
    setAttendanceDirty(false)
    setTab(nextTab)
  }

  if (booting) return <div className="center muted">불러오는 중…</div>
  if (!user) return <Login onLogin={onLogin} />

  const isAdmin = user.role === '최고권한'

  // 신규자 등록 화면은 최고권한 + 새순/새내기순 순장만
  const newbieGid = groups.find((g) => g.type === '새순')?.id
  const rookieGid = groups.find((g) => g.type === '새내기')?.id
  const canSeeNew = isAdmin || user.groupId === newbieGid || user.groupId === rookieGid
  const allowed = { attendance: true, dashboard: true, new: canSeeNew, leaders: isAdmin }
  const activeTab = allowed[tab] ? tab : 'attendance'

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
        <button className={activeTab === 'attendance' ? 'tab on' : 'tab'} onClick={() => changeTab('attendance')}>
          출석체크
        </button>
        <button className={activeTab === 'dashboard' ? 'tab on' : 'tab'} onClick={() => changeTab('dashboard')}>
          분석
        </button>
        {canSeeNew && (
          <button className={activeTab === 'new' ? 'tab on' : 'tab'} onClick={() => changeTab('new')}>
            신규자
          </button>
        )}
        {isAdmin && (
          <button className={activeTab === 'leaders' ? 'tab on' : 'tab'} onClick={() => changeTab('leaders')}>
            순장
          </button>
        )}
      </nav>

      <main>
        {activeTab === 'attendance' && <AttendanceBoard user={user} groups={groups} isAdmin={isAdmin} onDirtyChange={setAttendanceDirty} />}
        {activeTab === 'dashboard' && <Dashboard user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'new' && <NewMember user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'leaders' && <LeaderAdmin groups={groups} />}
      </main>
    </div>
  )
}
