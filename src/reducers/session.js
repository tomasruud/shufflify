// @flow
import { combineReducers } from 'redux'
import type { Action } from '../actions'
import type { User } from '../common'

const token = (state: ?string = null, action: Action): ?string => {
  if (action.type === 'SESSION_BOOTSTRAP_COMPLETE') {
    return action.token
  }

  return state
}

const user = (state: ?User = null, action: Action): ?User => {
  if (action.type === 'SESSION_BOOTSTRAP_COMPLETE') {
    return action.user
  }

  return state
}

const loading = (state: boolean = true, action: Action): boolean => {
  if (action.type === 'SESSION_BOOTSTRAP_COMPLETE') {
    return false
  }

  return state
}

export type State = {
  token: ?string,
  user: ?User,
  loading: boolean
}

export default combineReducers({
  token,
  user,
  loading
})
