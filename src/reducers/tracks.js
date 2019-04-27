import { handleActions } from 'redux-actions'
import { request, success } from '../actions/tracks'

const defaultState = {
  items: [],
  loading: false
}

const reduce = handleActions(
  {
    [request]: state => ({
      ...state,
      loading: true
    }),

    [success]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false
    })
  },
  defaultState
)

export default reduce
