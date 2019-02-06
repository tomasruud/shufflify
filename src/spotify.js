export const authURI = async (client, redirect, scopes) => {
  const {stringify} = await import('query-string')

  const q = stringify({
    redirect_uri: redirect,
    client_id: client,
    scope: scopes.join(' '),
    response_type: 'token',
    show_dialog: true
  })

  return `https://accounts.spotify.com/authorize?${q}`
}

export const callback = async (v) => {
  if (!v) {
    return null
  }

  const {parse} = await import('query-string')

  const p = parse(v)

  if (p.error) {
    throw new Error('Authentication failed')
  }

  if (!p.access_token) {
    throw new Error('No access token provided')
  }

  return p.access_token
}

export const user = async (token) => {
  const client = await import('spotify-web-api-js')
  
  const s = new client()
  s.setAccessToken(token)
  const user = await s.getMe()

  if (!user) {
    return null
  }

  return {
    id: user.id || null,
    images: user.images || []
  }
}

export const playlists = async () => {
}

export const playlistTracks = async () => {
  //fields=items(track(name,artists(name)))
}

export const reorderTrack = async () => {
}
