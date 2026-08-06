import test from 'node:test'
import assert from 'node:assert/strict'

import { normalizeApiUrl } from '../src/api-url.js'

const appsScriptUrl = 'https://script.google.com/macros/s/example-deployment_id/exec'

test('keeps a valid Apps Script URL unchanged', () => {
  assert.equal(normalizeApiUrl(`  ${appsScriptUrl}  `), appsScriptUrl)
})

test('repairs a duplicated Apps Script URL from a deployment variable', () => {
  assert.equal(normalizeApiUrl(appsScriptUrl + appsScriptUrl), appsScriptUrl)
})

test('does not alter unrelated URLs', () => {
  assert.equal(normalizeApiUrl('https://example.com/api'), 'https://example.com/api')
})
