import { combineReducers } from 'redux'
import { Action } from './actions'
import { User } from './models'

const token = (state: string | null = null, action: Action) => {
  if (action.type === 'session/SET') {
    return action.token || null
  }

  return state
}

const user = (state: User | null = null, action: Action) => {
  if (action.type === 'session/SET') {
    return action.user || null
  }

  return state
}

const loading = (state = false, action: Action) => {
  if (action.type === 'session/BOOT') {
    return true
  }

  if (action.type === 'session/SET' && !!action.token && !!action.user) {
    return false
  }

  return state
}

export type State = {
  readonly token: string | null
  readonly user: User | null
  readonly loading: boolean
}

export default combineReducers<State, Action>({
  token,
  user,
  loading
})
