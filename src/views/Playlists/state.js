import { createSelector } from 'reselect'
import { createAction, handleActions } from 'redux-actions'
import { token, userID } from '../Login/state'
import Spotify from '../../shuffle/spotify'

export const PlaylistFilters = {
  ALL: null,
  MINE: 'MINE'
}

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

const defaultState = {
  items: [],
  loading: false,
  error: false,
  loaded: false,
  filter: PlaylistFilters.MINE,
  search: ''
}

export default handleActions(
  {
    [loadPlaylistsRequest]: state => ({
      ...state,
      loading: true,
      error: false,
      loaded: false
    }),

    [loadPlaylistsSuccess]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
      error: false,
      loaded: true
    }),

    [loadPlaylistsError]: state => ({
      ...state,
      error: true,
      loading: false,
      loaded: true
    }),

    [updatePlaylistsFilter]: (state, action) => ({
      ...state,
      filter: action.payload
    }),

    [updatePlaylistsSearch]: (state, action) => ({
      ...state,
      search: action.payload
    })
  },
  defaultState
)

export const playlists = state => state.playlists.items

export const loading = state => state.playlists.loading

export const error = state => state.playlists.error

export const loaded = state => state.playlists.loaded

export const playlistById = (state, id) =>
  playlists(state).find(p => p.id === id)

export const filter = state => state.playlists.filter

export const search = state => state.playlists.search

export const visiblePlaylists = createSelector(
  [filter, search, playlists, userID],
  (filter, search, playlists, userID) => {
    search = search.toLowerCase()

    playlists = playlists.filter(
      p => !search || (p.name && p.name.toLowerCase().includes(search))
    )

    switch (filter) {
      case PlaylistFilters.MINE:
        return playlists.filter(p => p.ownerId === userID)

      default:
        return playlists
    }
  }
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
