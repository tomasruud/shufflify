export const client = async token => {
  const Spotify = await import('spotify-web-api-js')
  const c = new Spotify.default()
  c.setAccessToken(token)

  return c
}

export const getMe = c => c.getMe

export const getGeneric = c => c.getGeneric

export const getPlaylists = c => () => c.getUserPlaylists({ limit: 50 })

export const getTracks = c => c.getPlaylistTracks

export const reorder = c => c.reorderTracksInPlaylist
