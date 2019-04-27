import { createAction } from 'redux-actions'
import { token } from '../selectors/session'
import Spotify from '../services/spotify'
import * as message from './message'

export const filters = {
  ALL: null,
  MINE: 'MINE'
}

export const request = createAction('LOAD_PLAYLISTS_REQUEST')

export const success = createAction(
  'LOAD_PLAYLISTS_SUCCESS',
  playlists => playlists
)

export const setFilter = createAction(
  'UPDATE_PLAYLISTS_FILTER',
  filter => filter
)

export const setSearch = createAction(
  'UPDATE_PLAYLISTS_SEARCH',
  search => search
)

export const load = () => async (dispatch, getState) => {
  try {
    dispatch(request())

    const t = token(getState())

    const client = new Spotify(t)
    const items = await client.getPlaylists()

    return dispatch(success(items))
  } catch (e) {
    console.error(e)
    return dispatch(message.set('There was a problem loading your playlists'))
  }
}
