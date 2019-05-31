// @flow
import { combineReducers } from 'redux'
import type { Action } from '../actions'

const message = (state: ?string = null, action: Action): ?string => {
  if (action.type === 'MESSAGE_SET') {
    return action.message
  }

  if (action.type === 'MESSAGE_CLEAR') {
    return null
  }

  return state
}

export type State = {
  message: ?string
}

export default combineReducers({
  message
})
