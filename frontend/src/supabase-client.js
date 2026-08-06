import { createClient } from '@supabase/supabase-js'
import { SUPABASE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from './config.js'
import { authRedirectUrl } from './auth-url.js'

export const supabase = SUPABASE
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null

export function redirectUrl() {
  return authRedirectUrl(window.location.origin, import.meta.env.BASE_URL)
}

export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email: email.trim(), password })
}

export async function signUp(email, password) {
  return supabase.auth.signUp({
    email: email.trim(),
    password,
    options: { emailRedirectTo: redirectUrl() },
  })
}

export async function sendPasswordReset(email) {
  return supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: redirectUrl() })
}

export async function updatePassword(password) {
  return supabase.auth.updateUser({ password })
}

export async function claimAccount(code) {
  const { data, error } = await supabase.rpc('attendance_claim_account', { p_code: code.trim() })
  if (error) return { ok: false, error: error.message }
  return data
}

export async function signOut() {
  return supabase?.auth.signOut()
}
