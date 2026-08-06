import test from 'node:test'
import assert from 'node:assert/strict'
import { authRedirectUrl } from '../src/auth-url.js'

test('builds the GitHub Pages auth redirect URL', () => {
  assert.equal(
    authRedirectUrl('https://kimjeyeong.github.io', '/youth-attendance-supabase/'),
    'https://kimjeyeong.github.io/youth-attendance-supabase/',
  )
})

test('keeps a root deployment URL', () => {
  assert.equal(authRedirectUrl('http://localhost:5173', '/'), 'http://localhost:5173/')
})
