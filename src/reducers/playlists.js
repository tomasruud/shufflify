import { handleActions } from 'redux-actions'
import { filters } from '../actions/playlists'
import { request, success, setFilter, setSearch } from '../actions/playlists'

const defaultState = {
  items: [],
  loading: false,
  loaded: false,
  filter: filters.MINE,
  search: ''
}

const reducer = handleActions(
  {
    [request]: state => ({
      ...state,
      loading: true,
      loaded: false
    }),

    [success]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
      loaded: true
    }),

    [setFilter]: (state, action) => ({
      ...state,
      filter: action.payload
    }),

    [setSearch]: (state, action) => ({
      ...state,
      search: action.payload
    })
  },
  defaultState
)

export default reducer
