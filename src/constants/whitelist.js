export const enabled = true

const whitelist = [
  'myspotfiy'
]

export const has = username => whitelist.includes(username)