import { handleActions } from 'redux-actions'
import { success } from '../actions/session'

const defaultState = {
  token: null,
  user: {},
  loading: true
}

const reduce = handleActions(
  {
    [success]: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      loading: false
    })
  },
  defaultState
)

export default reduce
