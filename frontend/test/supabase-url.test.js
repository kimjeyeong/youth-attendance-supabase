import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeSupabaseUrl, supabaseRpcUrl } from '../src/supabase-url.js'

test('normalizes a Supabase project URL', () => {
  assert.equal(normalizeSupabaseUrl(' https://example.supabase.co/// '), 'https://example.supabase.co')
})

test('builds the attendance RPC URL', () => {
  assert.equal(
    supabaseRpcUrl('https://example.supabase.co/'),
    'https://example.supabase.co/rest/v1/rpc/attendance_api',
  )
})

test('keeps the RPC URL empty when Supabase is not configured', () => {
  assert.equal(supabaseRpcUrl(''), '')
})
