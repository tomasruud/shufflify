import { createAction } from 'redux-actions'
import { token } from '../selectors/session'
import Spotify from '../services/spotify'

export const loadPlaylistsRequest = createAction('LOAD_PLAYLISTS_REQUEST')

export const loadPlaylistsSuccess = createAction(
  'LOAD_PLAYLISTS_SUCCESS',
  playlists => playlists
)

export const loadPlaylistsError = createAction('LOAD_PLAYLISTS_ERROR')

export const updatePlaylistsFilter = createAction(
  'UPDATE_PLAYLISTS_FILTER',
  filter => filter
)

export const updatePlaylistsSearch = createAction(
  'UPDATE_PLAYLISTS_SEARCH',
  search => search
)

export const loadPlaylists = () => async (dispatch, getState) => {
  try {
    dispatch(loadPlaylistsRequest())

    const t = token(getState())

    const client = new Spotify(t)
    const items = await client.getPlaylists()

    return dispatch(loadPlaylistsSuccess(items))
  } catch (e) {
    console.error(e)
    return dispatch(loadPlaylistsError())
  }
}
