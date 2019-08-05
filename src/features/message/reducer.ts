import { combineReducers } from 'redux'
import { Action } from './actions'

const message = (state: string | null = null, action: Action) => {
  if (action.type === 'message/SET') {
    return action.message || null
  }

  return state
}

export type State = {
  readonly message: string | null
}

export default combineReducers<State, Action>({
  message
})
