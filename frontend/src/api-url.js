const APPS_SCRIPT_URL_PATTERN = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec/

export function normalizeApiUrl(value) {
  const url = String(value || '').trim()
  const appsScriptUrl = url.match(APPS_SCRIPT_URL_PATTERN)?.[0]

  return appsScriptUrl && url === appsScriptUrl + appsScriptUrl
    ? appsScriptUrl
    : url
}
