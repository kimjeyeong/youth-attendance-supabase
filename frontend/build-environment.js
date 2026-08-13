export function validateBuildEnvironment(env) {
  const url = String(env.VITE_SUPABASE_URL || '').trim()
  const key = String(env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim()
  const allowMock = env.VITE_ALLOW_MOCK_BUILD === 'true'

  if (!url && !key) {
    if (allowMock) return
    throw new Error('운영 빌드에는 VITE_SUPABASE_URL과 VITE_SUPABASE_PUBLISHABLE_KEY가 필요합니다.')
  }
  if (!url || !key) {
    throw new Error('Supabase 환경변수 두 값을 모두 설정해야 합니다.')
  }

  let parsed
  try {
    parsed = new URL(url)
  } catch {
    throw new Error('VITE_SUPABASE_URL 형식이 올바르지 않습니다.')
  }
  if (
    parsed.protocol !== 'https:'
    || !/^[a-z0-9-]+\.supabase\.co$/.test(parsed.hostname)
    || parsed.username
    || parsed.password
    || (parsed.pathname !== '/' && parsed.pathname !== '')
    || parsed.search
    || parsed.hash
  ) {
    throw new Error('VITE_SUPABASE_URL은 https://<project-ref>.supabase.co 형식이어야 합니다.')
  }
  if (!/^sb_publishable_[A-Za-z0-9_-]+$/.test(key)) {
    throw new Error('브라우저에는 sb_publishable_ 형식의 Supabase Publishable key만 사용할 수 있습니다.')
  }
}
