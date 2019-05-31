// @flow
import type { Action, ThunkAction } from './types'
import { playlists, session } from '../selectors'
import { Spotify } from '../services'

export const setSearch = (search: string): Action => ({
  type: 'PLAYLISTS_SEARCH_SET',
  search
})

export const load = (): ThunkAction => async (dispatch, getState) => {
  dispatch({
    type: 'PLAYLISTS_LOAD_REQUEST'
  })

  const t = session.token(getState())

  if (t == null) {
    throw Error('No token provided')
  }

  const client = new Spotify(t)
  const items = await client.getPlaylists()

  dispatch({
    type: 'PLAYLISTS_LOAD_SUCCESS',
    items
  })
}

export const loadIfNeeded = (): ThunkAction => async (dispatch, getState) => {
  if (playlists.loaded(getState())) {
    return
  }

  dispatch(load())
}
