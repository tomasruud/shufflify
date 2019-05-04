import { byURI as playlistByURI } from './playlists'

export const byURI = (state, URI) => state.entities.tracks.byURI[URI]

export const byPlaylistURI = (state, playlistURI) => {
  const list = playlistByURI(state, playlistURI)

  if (!list.tracks) {
    return undefined
  }

  return list.tracks.map(uri => byURI(state, uri))
}

export const loading = state => state.entities.tracks.loading
