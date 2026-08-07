import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const root = new URL('../../', import.meta.url)

test('security migration exposes only authenticated application RPCs', async () => {
  const sql = await readFile(new URL('supabase/migrations/202608070007_security_hardening.sql', root), 'utf8')

  assert.match(sql, /revoke execute on all functions in schema public from public, anon, authenticated/i)
  assert.match(sql, /grant execute on function public\.attendance_claim_account\(text\) to authenticated/i)
  assert.match(sql, /grant execute on function public\.attendance_api\(jsonb\) to authenticated/i)
  assert.match(sql, /alter default privileges[\s\S]*revoke execute on functions from anon, authenticated/i)
})

test('static deployments include a restrictive browser policy', async () => {
  const html = await readFile(new URL('frontend/index.html', root), 'utf8')
  const netlify = await readFile(new URL('netlify.toml', root), 'utf8')

  assert.match(html, /http-equiv="Content-Security-Policy"/i)
  assert.match(html, /script-src 'self'/i)
  assert.match(html, /connect-src 'self' https:\/\/\*\.supabase\.co/i)
  assert.match(netlify, /Content-Security-Policy\s*=/i)
  assert.match(netlify, /X-Frame-Options\s*=\s*"DENY"/i)
  assert.match(netlify, /X-Content-Type-Options\s*=\s*"nosniff"/i)
})
