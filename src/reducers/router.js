import { handleActions } from 'redux-actions'
import { navigate } from '../actions/router'

const defaultState = {
  path: '/',
  params: {}
}

const reducer = handleActions(
  {
    [navigate]: (state, action) => ({
      ...state,
      path: action.payload.path,
      params: action.payload.params
    })
  },
  defaultState
)

export default reducer
