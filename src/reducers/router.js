// @flow
import { combineReducers } from 'redux'
import type { Action } from '../actions'

const path = (state: string = '', action: Action): string => {
  if (action.type === 'ROUTER_NAVIGATE') {
    return action.path
  }

  return state
}

const params = (state: {} = {}, action: Action): {} => {
  if (action.type === 'ROUTER_NAVIGATE') {
    return action.params
  }

  return state
}

export type State = {
  path: string,
  params: {}
}

export default combineReducers({
  path,
  params
})
