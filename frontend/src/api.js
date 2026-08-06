import { API_URL, MOCK } from './config.js'
import { mockApi } from './mock.js'

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
export async function call(action, payload = {}) {
  const body = { action, code: getCode(), ...payload }

  if (MOCK) {
    const fn = mockApi[action]
    if (!fn) return { ok: false, error: 'mock: 알 수 없는 action ' + action }
    return fn(body)
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
    })
    return await res.json()
  } catch (err) {
    return { ok: false, error: '네트워크 오류: ' + err.message }
  }
}
