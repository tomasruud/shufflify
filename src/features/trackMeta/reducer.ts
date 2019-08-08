import { combineReducers } from 'redux'
import { ByIDMap } from './models'
import { Action } from './actions'

const byID = (state: ByIDMap = {}, action: Action): ByIDMap => {
  if (action.type === 'trackMeta/LOAD_SUCCESS') {
    const toAdd = action.meta.reduce((acc: ByIDMap, m) => {
      acc[m.id] = m
      return acc
    }, {})

    return {
      ...state,
      ...toAdd
    }
  }

  return state
}

const loading = (state: boolean = false, action: Action): boolean => {
  if (action.type === 'trackMeta/LOAD_REQUEST') {
    return true
  }

  if (action.type === 'trackMeta/LOAD_SUCCESS') {
    return false
  }

  return state
}

export type State = {
  readonly loading: boolean,
  readonly byID: ByIDMap
}

export default combineReducers<State, Action>({
  loading,
  byID
})
