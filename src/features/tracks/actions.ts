import { Spotify } from '../../services'

export const load = (playlistURI: URI): ThunkAction => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TRACKS_LOAD_REQUEST'
  })

  const playlist = playlists.byURI(getState(), playlistURI)

  if (playlist == null) {
    throw Error('Could not find playlist ' + playlistURI)
  }

  const t = session.token(getState())

  if (t == null) {
    throw Error('No token provided')
  }

  const client = new Spotify(t)
  const tracks = await client.getTracks(playlist.id)

  dispatch({
    type: 'TRACKS_LOAD_SUCCESS',
    playlistURI,
    tracks
  })
}

export const loadIfNeeded = (playlistURI: URI): ThunkAction => async (
  dispatch,
  getState
) => {
  const p = playlists.byURI(getState(), playlistURI)

  if (p == null) {
    throw Error('Could not find playlist ' + playlistURI)
  }

  if (p.tracks != null) {
    return
  }

  dispatch(load(playlistURI))
}
