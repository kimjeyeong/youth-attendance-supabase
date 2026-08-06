export function authRedirectUrl(origin, basePath = '/') {
  return new URL(basePath, origin).toString()
}
