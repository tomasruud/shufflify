export const client = async token => {
  const Spotify = await import('spotify-web-api-js')
  const c = new Spotify()

  c.setAccessToken(token)

  return c
}

export const getMe = async c => c.getMe

export const getGeneric = async c => c.getGeneric

export const getPlaylists = async c => () =>
  c.getUserPlaylists(null, { limit: 50 })

export const getTracks = async c => c.getPlaylistTracks

export const reorder = async c => c.reorderTracksInPlaylist
