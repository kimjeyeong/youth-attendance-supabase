import { MOCK, SUPABASE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from './config.js'
import { mockApi } from './mock.js'
import { supabaseRpcUrl } from './supabase-url.js'
import { supabase } from './supabase-client.js'

// 예시 모드에서만 쓰는 코드 보관소. 운영 모드의 신원은 Supabase 세션이 결정한다.
const CODE_KEY = 'attendance_access_code'
export function saveCode(code) { localStorage.setItem(CODE_KEY, code) }
export function getCode() { return localStorage.getItem(CODE_KEY) || '' }
export function clearCode() { localStorage.removeItem(CODE_KEY) }

/**
 * API 호출. action + payload 를 Supabase RPC 로 보내고 JSON 을 받는다.
 * 신원은 Authorization 헤더의 세션 토큰으로만 결정되며,
 * 본문에 코드를 실어도 서버가 무시하고 덮어쓴다.
 */
export async function call(action, payload = {}, accessCode = getCode()) {
  try {
    if (MOCK) {
      const fn = mockApi[action]
      if (!fn) return { ok: false, error: 'mock: 알 수 없는 action ' + action }
      return await fn({ ...payload, action, code: accessCode })
    }

    const { data } = await supabase.auth.getSession()
    const session = data.session
    if (!session) return { ok: false, code: 'AUTH_REQUIRED', error: '로그인이 필요합니다.' }

    const res = await fetch(supabaseRpcUrl(SUPABASE_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ p_request: { ...payload, action } }),
    })
    const body = await res.json()
    if (!res.ok) {
      return { ok: false, error: body?.error || body?.message || `서버 오류 (${res.status})` }
    }
    return body
  } catch (err) {
    return { ok: false, error: '요청 처리 오류: ' + (err?.message || String(err)) }
  }
}
