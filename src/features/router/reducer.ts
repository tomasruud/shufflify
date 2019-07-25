import { combineReducers } from 'redux'
import { Params } from './models'
import { Action } from './actions'

const path = (state = '', action: Action) => {
  if (action.type === 'router/NAVIGATE') {
    return action.path
  }

  return state
}

const params = (state = {}, action: Action) => {
  if (action.type === 'router/NAVIGATE') {
    return action.params
  }

  return state
}

export type State = {
  readonly path: string
  readonly params: Params
}

export default combineReducers<State, Action>({
  path,
  params
})
