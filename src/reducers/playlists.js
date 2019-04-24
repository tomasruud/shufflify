import { handleActions } from 'redux-actions'
import { PlaylistFilters } from '../selectors/playlists'
import {
  loadPlaylistsError,
  loadPlaylistsRequest,
  loadPlaylistsSuccess,
  updatePlaylistsFilter,
  updatePlaylistsSearch
} from '../actions/playlists'

const defaultState = {
  items: [],
  loading: false,
  error: false,
  loaded: false,
  filter: PlaylistFilters.MINE,
  search: ''
}

const reducer = handleActions(
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

export default reducer
