import { handleActions } from 'redux-actions'
import {
  loadTracksError,
  loadTracksRequest,
  loadTracksSuccess
} from '../actions/tracks'

const defaultState = {
  items: [],
  loading: false,
  error: false
}

const reduce = handleActions(
  {
    [loadTracksRequest]: state => ({
      ...state,
      loading: true,
      error: false
    }),

    [loadTracksSuccess]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
      error: false
    }),

    [loadTracksError]: state => ({
      ...state,
      error: true,
      loading: false
    })
  },
  defaultState
)

export default reduce
