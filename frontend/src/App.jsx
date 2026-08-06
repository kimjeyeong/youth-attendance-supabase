import React, { useState, useEffect } from 'react'
import { call, getCode, clearCode } from './api.js'
import { MOCK, SUPABASE } from './config.js'
import { signOut, supabase } from './supabase-client.js'
import Login from './components/Login.jsx'
import ClaimAccount from './components/ClaimAccount.jsx'
import PasswordRecovery from './components/PasswordRecovery.jsx'
import AttendanceBoard from './components/AttendanceBoard.jsx'
import NewMember from './components/NewMember.jsx'
import Dashboard from './components/Dashboard.jsx'
import RenewalAdmin from './components/RenewalAdmin.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [groups, setGroups] = useState([])
  const [tab, setTab] = useState('attendance') // attendance | new
  const [booting, setBooting] = useState(true)
  const [attendanceDirty, setAttendanceDirty] = useState(false)
  const [renewalDirty, setRenewalDirty] = useState(false)
  const [needsClaim, setNeedsClaim] = useState(false)
  const [recovering, setRecovering] = useState(false)

  useEffect(() => {
    let active = true

    async function loadSupabaseUser(session) {
      if (!active) return
      if (!session) {
        setUser(null)
        setGroups([])
        setNeedsClaim(false)
        setBooting(false)
        return
      }
      const res = await call('login')
      if (!active) return
      if (res.ok) {
        setUser(res.user)
        setGroups(res.groups || [])
        setNeedsClaim(false)
      } else if (res.code === 'ACCOUNT_NOT_LINKED') {
        setUser(null)
        setNeedsClaim(true)
      }
      setBooting(false)
    }

    if (SUPABASE) {
      supabase.auth.getSession().then(({ data }) => loadSupabaseUser(data.session))
      const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          setRecovering(true)
          setBooting(false)
          return
        }
        window.setTimeout(() => loadSupabaseUser(session), 0)
      })
      return () => {
        active = false
        listener.subscription.unsubscribe()
      }
    }

    // 예시 모드와 기존 Apps Script는 저장된 코드로 자동 로그인한다.
    const code = getCode()
    if (!code) { setBooting(false); return }
    call('login', {}).then((res) => {
      if (res.ok) { setUser(res.user); setGroups(res.groups || []) }
      else clearCode()
      setBooting(false)
    })
    return () => { active = false }
  }, [])

  function onLogin(res) {
    setUser(res.user)
    setGroups(res.groups || [])
  }
  async function logout() {
    if ((attendanceDirty || renewalDirty) && !window.confirm('저장하지 않은 변경사항이 있습니다. 로그아웃할까요?')) return
    if (SUPABASE) await signOut()
    else clearCode()
    setUser(null)
    setGroups([])
    setNeedsClaim(false)
    setTab('attendance')
    setAttendanceDirty(false)
    setRenewalDirty(false)
  }

  function onClaimed(res) {
    setNeedsClaim(false)
    onLogin(res)
  }
  function changeTab(nextTab) {
    if (tab === 'attendance' && nextTab !== 'attendance' && attendanceDirty
        && !window.confirm('저장하지 않은 출석 변경사항이 있습니다. 다른 화면으로 이동할까요?')) return
    if (tab === 'renewal' && nextTab !== 'renewal' && renewalDirty
        && !window.confirm('저장하지 않은 순원 재배정이 있습니다. 다른 화면으로 이동할까요?')) return
    setAttendanceDirty(false)
    setRenewalDirty(false)
    setTab(nextTab)
  }

  if (booting) return <div className="center muted">불러오는 중…</div>
  if (recovering) return <PasswordRecovery onComplete={() => setRecovering(false)} />
  if (needsClaim) return <ClaimAccount onClaimed={onClaimed} onLogout={() => setNeedsClaim(false)} />
  if (!user) return <Login onLogin={onLogin} onNeedsClaim={() => setNeedsClaim(true)} />

  const isAdmin = user.role === '최고권한'

  // 신규자 등록 화면은 최고권한 + 새순/새내기순 순장만
  const newbieGid = groups.find((g) => g.type === '새순')?.id
  const rookieGid = groups.find((g) => g.type === '새내기')?.id
  const canSeeNew = isAdmin || user.groupId === newbieGid || user.groupId === rookieGid
  const allowed = { attendance: true, dashboard: true, new: canSeeNew, renewal: isAdmin }
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
          <button className={activeTab === 'renewal' ? 'tab on' : 'tab'} onClick={() => changeTab('renewal')}>
            리뉴얼
          </button>
        )}
      </nav>

      <main>
        {activeTab === 'attendance' && <AttendanceBoard user={user} groups={groups} isAdmin={isAdmin} onDirtyChange={setAttendanceDirty} />}
        {activeTab === 'dashboard' && <Dashboard user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'new' && <NewMember user={user} groups={groups} isAdmin={isAdmin} />}
        {activeTab === 'renewal' && <RenewalAdmin groups={groups} onDirtyChange={setRenewalDirty} />}
      </main>
    </div>
  )
}
