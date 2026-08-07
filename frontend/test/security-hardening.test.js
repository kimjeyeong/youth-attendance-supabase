import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const root = new URL('../../', import.meta.url)

const readMigration = (name) => readFile(new URL(`supabase/migrations/${name}`, root), 'utf8')

test('security migration exposes only authenticated application RPCs', async () => {
  const sql = await readMigration('202608070007_security_hardening.sql')

  assert.match(sql, /revoke execute on all functions in schema public from public, anon, authenticated/i)
  assert.match(sql, /grant execute on function public\.attendance_claim_account\(text\) to authenticated/i)
  assert.match(sql, /grant execute on function public\.attendance_api\(jsonb\) to authenticated/i)
  assert.match(sql, /alter default privileges[\s\S]*revoke execute on functions from anon, authenticated/i)
})

test('the latest migration re-closes every newly created function', async () => {
  const sql = await readMigration('202608070008_security_fixes.sql')

  // 새 함수(attendance_audit, 트리거 함수)가 Data API RPC 로 새어나가면 안 된다.
  const revokeAt = sql.search(/revoke execute on all functions in schema public/i)
  const grantAt = sql.search(/grant execute on function public\.attendance_api\(jsonb\) to authenticated/i)
  assert.ok(revokeAt > 0, '전체 회수 구문이 있어야 한다')
  assert.ok(grantAt > revokeAt, '회수한 뒤에 진입점만 다시 부여해야 한다')
  assert.match(sql, /revoke all on function public\.attendance_api_permission_legacy\(jsonb\) from public, anon, authenticated/i)
})

test('forced password change cannot be cleared without changing the password', async () => {
  const sql = await readMigration('202608070008_security_fixes.sql')

  assert.match(sql, /add column if not exists password_baseline text/i)
  // 플래그를 내리기 전에 현재 해시가 기준값과 달라졌는지 확인해야 한다.
  assert.match(sql, /v_current_hash is null or v_current_hash = v_user\.password_baseline/i)
  assert.match(sql, /PASSWORD_UNCHANGED/)
})

test('one-time claim codes expire and are checked fail-closed', async () => {
  const sql = await readMigration('202608070008_security_fixes.sql')

  assert.match(sql, /add column if not exists .*code_expires_at timestamptz/is)
  assert.match(sql, /create trigger app_users_code_expiry/i)
  // null 은 "무기한"이 아니라 "무효"로 취급해야 한다.
  assert.match(sql, /code_expires_at is not null[\s\S]{0,80}code_expires_at > now\(\)/i)
})

test('internal database errors are not returned to the browser', async () => {
  const sql = await readMigration('202608070008_security_fixes.sql')

  assert.match(sql, /raise log 'attendance_api internal error/i)
  assert.match(sql, /요청을 처리하지 못했습니다/)
})

test('permission and roster changes are audited', async () => {
  const sql = await readMigration('202608070008_security_fixes.sql')

  assert.match(sql, /create table if not exists public\.admin_audit/i)
  assert.match(sql, /alter table public\.admin_audit enable row level security/i)
  assert.match(sql, /revoke all on public\.admin_audit from anon, authenticated/i)
  for (const action of ['setLeader', 'renewMembers', 'createAdminInvitation', 'deactivateAdmin']) {
    assert.match(sql, new RegExp(`'${action}'`), `${action} 는 감사 대상이어야 한다`)
  }
})

test('static deployments include a restrictive browser policy', async () => {
  const html = await readFile(new URL('frontend/index.html', root), 'utf8')
  // Cloudflare Pages 는 배포 결과물 루트의 _headers 를 읽는다.
  const headers = await readFile(new URL('frontend/public/_headers', root), 'utf8')

  assert.match(html, /http-equiv="Content-Security-Policy"/i)
  assert.match(html, /script-src 'self'/i)
  assert.match(html, /connect-src 'self' https:\/\/\*\.supabase\.co/i)

  assert.match(headers, /^\/\*$/m, '모든 경로에 적용돼야 한다')
  assert.match(headers, /Content-Security-Policy:/i)
  // <meta> CSP 로는 불가능한 지시어라 응답 헤더에 반드시 있어야 한다.
  assert.match(headers, /frame-ancestors 'none'/i)
  assert.match(headers, /connect-src 'self' https:\/\/\*\.supabase\.co wss:\/\/\*\.supabase\.co/i)
  assert.match(headers, /X-Frame-Options: DENY/i)
  assert.match(headers, /X-Content-Type-Options: nosniff/i)
  assert.match(headers, /Strict-Transport-Security: max-age=\d+/i)
  assert.match(headers, /Referrer-Policy: no-referrer/i)
  assert.match(headers, /Permissions-Policy:/i)
})

test('the SPA fallback survives the move off Netlify', async () => {
  const redirects = await readFile(new URL('frontend/public/_redirects', root), 'utf8')

  assert.match(redirects, /\/\*\s+\/index\.html\s+200/)
})

test('no second, header-less copy of the app is published', async () => {
  const { readdir } = await import('node:fs/promises')
  const workflows = await readdir(new URL('.github/workflows/', root))

  for (const file of workflows) {
    const yaml = await readFile(new URL(`.github/workflows/${file}`, root), 'utf8')
    assert.doesNotMatch(
      yaml,
      /actions\/deploy-pages/,
      `${file}: GitHub Pages 배포는 보안 헤더를 붙일 수 없으므로 쓰지 않는다`
    )
  }
})

test('the app refuses to render inside a third-party frame', async () => {
  const main = await readFile(new URL('frontend/src/main.jsx', root), 'utf8')

  // 헤더를 붙일 수 없는 정적 호스팅에서도 클릭재킹을 막아야 한다.
  assert.match(main, /window\.self !== window\.top/)
})

test('the discontinued Apps Script backend cannot be reached', async () => {
  const config = await readFile(new URL('frontend/src/config.js', root), 'utf8')
  const api = await readFile(new URL('frontend/src/api.js', root), 'utf8')
  const manifest = await readFile(new URL('apps-script/appsscript.json', root), 'utf8')
  const script = await readFile(new URL('apps-script/Code.gs', root), 'utf8')

  assert.doesNotMatch(config, /VITE_API_URL/, '프론트엔드는 Apps Script URL 을 읽지 않아야 한다')
  assert.doesNotMatch(api, /API_URL/, 'Apps Script 호출 경로가 남아 있으면 안 된다')
  assert.doesNotMatch(manifest, /ANYONE/, '웹앱이 익명 공개로 되돌아가면 안 된다')
  assert.match(script, /var DISABLED = true/, '재배포되더라도 진입점이 막혀 있어야 한다')
})
