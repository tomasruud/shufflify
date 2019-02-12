import { createSelector } from 'reselect'
import { getUserID } from '../auth/state'

const REQUEST_PLAYLISTS = 'playlist/REQUEST_PLAYLISTS'
const RECEIVE_PLAYLISTS = 'playlist/RECEIVE_PLAYLISTS'
const RECEIVE_PLAYLISTS_FAILED = 'playlist/RECEIVE_PLAYLISTS_FAILED'
const SET_PLAYLIST_FILTER = 'playlist/SET_PLAYLIST_FILTER'
const SET_PLAYLIST_SEARCH = 'playlist/SET_PLAYLIST_SEARCH'

export const PlaylistFilters = {
  ALL: null,
  MINE: 'MINE'
}

const init = {
  items: [],
  isLoading: false,
  failed: false,
  fetched: false,
  filter: PlaylistFilters.MINE,
  search: ''
}

export const getPlaylists = state => state.playlists.items

export const isLoading = state => state.playlists.isLoading

export const hasFailed = state => state.playlists.failed

export const fetchComplete = state => state.playlists.fetched

export const getPlaylistById = (state, id) =>
  getPlaylists(state).find(p => p.id === id)

export const getFilter = state => state.playlists.filter

export const getSearch = state => state.playlists.search

export const getVisiblePlaylists = createSelector(
  [getFilter, getSearch, getPlaylists, getUserID],
  (filter, search, playlists, userID) => {
    search = search.toLowerCase()

    playlists = playlists.filter(
      p => !search || p.name.toLowerCase().includes(search)
    )

    switch (filter) {
      case PlaylistFilters.MINE:
        return playlists.filter(p => p.ownerId === userID)

      default:
        return playlists
    }
  }
)

export default (state = init, action = {}) => {
  switch (action.type) {
    case SET_PLAYLIST_FILTER:
      return {
        ...state,
        filter: action.filter
      }

    case SET_PLAYLIST_SEARCH:
      return {
        ...state,
        search: action.search
      }

    case REQUEST_PLAYLISTS:
      return {
        ...state,
        isLoading: true,
        failed: false,
        fetched: false
      }

    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        items: action.playlists,
        isLoading: false,
        failed: false,
        fetched: true
      }

    case RECEIVE_PLAYLISTS_FAILED:
      return {
        ...state,
        failed: true,
        isLoading: false,
        fetched: true
      }

    default:
      return state
  }
}

export const requestPlaylists = () => ({
  type: REQUEST_PLAYLISTS
})

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

export const receivePlaylistsFailed = () => ({
  type: RECEIVE_PLAYLISTS_FAILED
})

export const setFilter = filter => ({
  type: SET_PLAYLIST_FILTER,
  filter
})

export const setSearch = search => ({
  type: SET_PLAYLIST_SEARCH,
  search
})

export const findPlaylists = () => async (dispatch, getState) => {
  dispatch(requestPlaylists())

  try {
    const adapter = await import('../spotify/remote.adapter')
    const service = await import('../spotify/service')

    const auth = await import('../auth/state')
    const token = auth.getToken(getState())

    const client = await adapter.client(token)
    const items = await service.playlists(
      adapter.getPlaylists(client),
      adapter.getGeneric(client)
    )

    return dispatch(receivePlaylists(items))
  } catch (e) {
    console.log(e)
    return dispatch(receivePlaylistsFailed())
  }
}
