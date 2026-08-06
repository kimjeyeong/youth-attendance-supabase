import { API_URL, MOCK, SUPABASE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from './config.js'
import { mockApi } from './mock.js'
import { supabaseRpcUrl } from './supabase-url.js'
import { supabase } from './supabase-client.js'

// 로그인한 사람의 액세스 코드를 브라우저에 저장/사용
const CODE_KEY = 'attendance_access_code'
export function saveCode(code) { localStorage.setItem(CODE_KEY, code) }
export function getCode() { return localStorage.getItem(CODE_KEY) || '' }
export function clearCode() { localStorage.removeItem(CODE_KEY) }

/**
 * API 호출. action + payload 를 보내고 JSON 을 받는다.
 * Apps Script 의 CORS 제약을 피하려고 Content-Type 을 text/plain 으로 보낸다
 * (그래야 브라우저가 preflight 요청을 안 함).
 */
export async function call(action, payload = {}, accessCode = getCode()) {
  const body = SUPABASE ? { ...payload, action } : { ...payload, action, code: accessCode }

  try {
    if (MOCK) {
      const fn = mockApi[action]
      if (!fn) return { ok: false, error: 'mock: 알 수 없는 action ' + action }
      return await fn(body)
    }

    let session
    if (SUPABASE) {
      const result = await supabase.auth.getSession()
      session = result.data.session
      if (!session) return { ok: false, code: 'AUTH_REQUIRED', error: '로그인이 필요합니다.' }
    }

    const res = SUPABASE
      ? await fetch(supabaseRpcUrl(SUPABASE_URL), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ p_request: body }),
        })
      : await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(body),
        })
    const data = await res.json()
    if (!res.ok) {
      return { ok: false, error: data?.error || data?.message || `서버 오류 (${res.status})` }
    }
    return data
  } catch (err) {
    return { ok: false, error: '요청 처리 오류: ' + (err?.message || String(err)) }
  }
}
