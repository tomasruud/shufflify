// @flow
import { session, playlists } from '../selectors'
import { Spotify } from '../services'
import {
  PLAYLISTS_LOAD_REQUEST,
  PLAYLISTS_LOAD_SUCCESS,
  PLAYLISTS_SEARCH_SET
} from '../constants'

type SetSearchAction = {
  +type: string,
  +search: string
}

export const setSearch = (search: string): SetSearchAction => ({
  type: PLAYLISTS_SEARCH_SET,
  search
})

export const load = () => async (dispatch, getState) => {
  if (playlists.loaded(getState())) {
    return null
  }

  dispatch({
    type: PLAYLISTS_LOAD_REQUEST
  })

  const t = session.token(getState())

  const client = new Spotify(t)
  const items = await client.getPlaylists()

  return dispatch({
    type: PLAYLISTS_LOAD_SUCCESS,
    payload: items
  })
}
