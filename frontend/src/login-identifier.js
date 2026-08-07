export const ADMIN_LOGIN_EMAIL = 'superadmin@youth-attendance.example.com'

export function loginEmail(identifier) {
  const value = identifier.trim()
  return value.toLowerCase() === 'admin' ? ADMIN_LOGIN_EMAIL : value
}
