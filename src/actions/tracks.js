import { token } from '../selectors/session'
import Spotify from '../services/spotify'
import { TRACKS_LOAD_REQUEST, TRACKS_LOAD_SUCCESS } from '../constants/actions'
import { byURI } from '../selectors/playlists'

export const load = playlistURI => async (dispatch, getState) => {
  dispatch({
    type: TRACKS_LOAD_REQUEST
  })

  const id = byURI(getState(), playlistURI).id
  const t = token(getState())

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
