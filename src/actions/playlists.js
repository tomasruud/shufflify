import { token } from '../selectors/session'
import Spotify from '../services/spotify'
import {
  PLAYLISTS_LOAD_REQUEST,
  PLAYLISTS_LOAD_SUCCESS,
  PLAYLISTS_SEARCH_SET
} from '../constants/actions'
import { loaded } from '../selectors/playlists'

export const setSearch = search => ({
  type: PLAYLISTS_SEARCH_SET,
  payload: search
})

export const load = () => async (dispatch, getState) => {
  if (loaded(getState())) {
    return null
  }

  dispatch({
    type: PLAYLISTS_LOAD_REQUEST
  })

  const t = token(getState())

  const client = new Spotify(t)
  const items = await client.getPlaylists()

  return dispatch({
    type: PLAYLISTS_LOAD_SUCCESS,
    payload: items
  })
}
