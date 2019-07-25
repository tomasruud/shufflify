import { ThunkAction } from 'redux-thunk'
import { Playlist } from './models'
import { State } from '../../store'
import { session } from '../index'
import { Spotify } from '../../services'

interface SetSearch {
  type: 'playlists/SEARCH_SET'
  search: string
}

interface LoadRequest {
  type: 'playlists/LOAD_REQUEST'
}

interface LoadSuccess {
  type: 'playlists/LOAD_SUCCESS'
  items: Array<Playlist>
}

export type Action = SetSearch | LoadRequest | LoadSuccess

export const setSearch = (search: string): Action => ({
  type: 'playlists/SEARCH_SET',
  search
})

export const load = (): ThunkAction<Promise<void>,
  State,
  null,
  Action> => async (dispatch, getState) => {
  dispatch({
    type: 'playlists/LOAD_REQUEST'
  })

  const t = session.selectors.token(getState().session)

  if (t == null) {
    throw Error('No token provided')
  }

  const client = new Spotify(t)
  const items = await client.getPlaylists()

  dispatch({
    type: 'playlists/LOAD_SUCCESS',
    items
  })
}
