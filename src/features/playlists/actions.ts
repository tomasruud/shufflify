import { ThunkAction } from 'redux-thunk'
import { Playlist } from './models'
import { PlaylistService } from './services'

interface SetSearch {
  type: 'playlists/SEARCH_SET'
  search: string
}

interface SetOwner {
  type: 'playlists/OWNER_SET'
  ownerID: string
}

interface LoadRequest {
  type: 'playlists/LOAD_REQUEST'
}

interface LoadSuccess {
  type: 'playlists/LOAD_SUCCESS'
  items: Array<Playlist>
}

export type Action = SetSearch | LoadRequest | LoadSuccess | SetOwner

export const setSearch = (search: string): Action => ({
  type: 'playlists/SEARCH_SET',
  search
})

export const setOwnerID = (ownerID: string): Action => ({
  type: 'playlists/OWNER_SET',
  ownerID
})

export const load = (): ThunkAction<
  Promise<void>,
  null,
  PlaylistService,
  Action
> => async (dispatch, _, service) => {
  dispatch({
    type: 'playlists/LOAD_REQUEST'
  })

  const items = await service.getPlaylists()

  dispatch({
    type: 'playlists/LOAD_SUCCESS',
    items
  })
}
