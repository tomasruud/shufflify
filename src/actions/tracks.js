import { TRACKS_LOAD_REQUEST, TRACKS_LOAD_SUCCESS } from '../constants'
import { session, playlists } from '../selectors'
import { Spotify } from '../services'

export const load = playlistURI => async (dispatch, getState) => {
  dispatch({
    type: TRACKS_LOAD_REQUEST
  })

  const id = playlists.byURI(getState(), playlistURI).id
  const t = session.token(getState())

  const client = new Spotify(t)
  const tracks = await client.getTracks(id)

  return dispatch({
    type: TRACKS_LOAD_SUCCESS,
    payload: {
      playlistURI,
      tracks
    }
  })
}
