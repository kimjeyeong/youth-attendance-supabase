export function normalizeSupabaseUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '')
}

export function supabaseRpcUrl(value) {
  const base = normalizeSupabaseUrl(value)
  return base ? `${base}/rest/v1/rpc/attendance_api` : ''
}
