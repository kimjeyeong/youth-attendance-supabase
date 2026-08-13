import test from 'node:test'
import assert from 'node:assert/strict'
import { validateBuildEnvironment } from '../build-environment.js'

const valid = {
  VITE_SUPABASE_URL: 'https://project-ref.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_example',
}

test('운영 빌드는 올바른 Supabase 공개 설정을 요구한다', () => {
  assert.doesNotThrow(() => validateBuildEnvironment(valid))
  assert.throws(() => validateBuildEnvironment({}), /필요합니다/)
  assert.throws(
    () => validateBuildEnvironment({ VITE_SUPABASE_URL: valid.VITE_SUPABASE_URL }),
    /두 값을 모두/,
  )
})

test('운영 빌드는 비밀 키와 임의의 백엔드 주소를 거부한다', () => {
  assert.throws(
    () => validateBuildEnvironment({ ...valid, VITE_SUPABASE_URL: 'http://project-ref.supabase.co' }),
    /형식이어야/,
  )
  assert.throws(
    () => validateBuildEnvironment({ ...valid, VITE_SUPABASE_URL: 'https://attacker.example' }),
    /형식이어야/,
  )
  assert.throws(
    () => validateBuildEnvironment({ ...valid, VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_secret_example' }),
    /Publishable key/,
  )
})

test('CI는 명시적으로 요청한 경우에만 예시모드 빌드를 허용한다', () => {
  assert.doesNotThrow(() => validateBuildEnvironment({ VITE_ALLOW_MOCK_BUILD: 'true' }))
  assert.throws(
    () => validateBuildEnvironment({
      VITE_ALLOW_MOCK_BUILD: 'true',
      VITE_SUPABASE_URL: valid.VITE_SUPABASE_URL,
    }),
    /두 값을 모두/,
  )
})

test('Cloudflare는 미리보기 브랜치만 예시모드 빌드를 허용한다', () => {
  assert.doesNotThrow(() => validateBuildEnvironment({
    CF_PAGES: '1',
    CF_PAGES_BRANCH: 'feature/security-check',
  }))
  assert.throws(
    () => validateBuildEnvironment({ CF_PAGES: '1', CF_PAGES_BRANCH: 'main' }),
    /필요합니다/,
  )
})
