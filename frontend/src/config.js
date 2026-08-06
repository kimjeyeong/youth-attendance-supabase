import { normalizeApiUrl } from './api-url.js'
import { normalizeSupabaseUrl } from './supabase-url.js'

// Apps Script 웹 앱 URL. .env 의 VITE_API_URL 에서 읽어옴.
// 비어 있으면 MOCK(예시 데이터) 모드로 동작.
export const API_URL = normalizeApiUrl(import.meta.env.VITE_API_URL)
export const SUPABASE_URL = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL)
export const SUPABASE_PUBLISHABLE_KEY = String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim()
export const SUPABASE = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY)
export const MOCK = !SUPABASE && !API_URL

// 출석 상태 선택지
export const WORSHIP_OPTIONS = ['출석', '결석', '온라인']
export const CELL_OPTIONS = ['참석', '불참']
