import test from 'node:test'
import assert from 'node:assert/strict'
import { ADMIN_LOGIN_EMAIL, loginEmail } from '../src/login-identifier.js'

test('admin 아이디를 비상용 관리자 이메일로 변환한다', () => {
  assert.equal(loginEmail('admin'), ADMIN_LOGIN_EMAIL)
  assert.equal(loginEmail(' ADMIN '), ADMIN_LOGIN_EMAIL)
})

test('일반 이메일은 공백만 제거해 그대로 사용한다', () => {
  assert.equal(loginEmail(' leader@example.com '), 'leader@example.com')
})
