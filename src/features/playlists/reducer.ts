import { combineReducers } from 'redux'
import { ByURIMap } from './models'
import { Action } from './actions'

const byURI = (
  state: ByURIMap | null = null,
  action: Action
): ByURIMap | null => {
  if (action.type === 'playlists/LOAD_SUCCESS') {
    const toAdd = action.items.reduce((acc: ByURIMap, playlist) => {
      acc[playlist.uri] = playlist
      return acc
    }, {})

    if (state === null) {
      return toAdd
    }

    return {
      ...state,
      ...toAdd
    }
  }

  return state
}

const ownerID = (
  state: string | null = null,
  action: Action
): string | null => {
  if (action.type === 'playlists/OWNER_SET') {
    return action.ownerID
  }

  return state
}

const search = (state: string = '', action: Action): string => {
  if (action.type === 'playlists/SEARCH_SET') {
    return action.search
  }

  return state
}

const loading = (state: boolean = false, action: Action): boolean => {
  if (action.type === 'playlists/LOAD_REQUEST') {
    return true
  }

  if (action.type === 'playlists/LOAD_SUCCESS') {
    return false
  }

  return state
}

export type State = {
  readonly loading: boolean
  readonly byURI: ByURIMap | null
  readonly search: string
  readonly ownerID: string | null
}

export default combineReducers<State, Action>({
  loading,
  byURI,
  search,
  ownerID
})
