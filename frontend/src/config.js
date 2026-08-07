import { normalizeSupabaseUrl } from './supabase-url.js'

// 운영 백엔드는 Supabase 하나뿐이다.
// 기존 Apps Script 웹앱은 액세스 코드만으로 시트 전체를 열어주는 구조여서
// 실수로라도 다시 붙지 않도록 프론트엔드에서 호출 경로 자체를 제거했다.
export const SUPABASE_URL = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL)
export const SUPABASE_PUBLISHABLE_KEY = String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim()
export const SUPABASE = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY)

// Supabase 설정이 없으면 실제 데이터에 붙지 않고 예시 데이터로만 동작한다.
export const MOCK = !SUPABASE

// 출석 상태 선택지
export const WORSHIP_OPTIONS = ['출석', '결석', '온라인']
export const CELL_OPTIONS = ['참석', '불참']
