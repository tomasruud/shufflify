import { handleActions } from 'redux-actions'
import { loadTokenError, loadTokenSuccess } from '../actions/session'

const defaultState = {
  token: null,
  user: {},
  error: false,
  loading: true
}

const reduce = handleActions(
  {
    [loadTokenSuccess]: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      loading: false
    }),

    [loadTokenError]: state => ({
      ...state,
      error: true
    })
  },
  defaultState
)

export default reduce
