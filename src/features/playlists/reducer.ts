import { combineReducers } from 'redux'
import { Playlist } from './models'
import { URI } from '../../models'

interface LoadSuccess {
  type: 'playlists/LOAD_SUCCESS',
  items: Array<Playlist>
}

export type Action = LoadSuccess

type ByURIMap = {
  [URI]: Playlist
}

const byURI = (state: ?ByURIMap = null, action: Action): ?ByURIMap => {
  if (action.type === 'PLAYLISTS_LOAD_SUCCESS') {
    const toAdd = action.items.reduce((acc, playlist) => {
      acc[playlist.uri] = playlist
      return acc
    }, {})

    if (state == null) {
      return toAdd
    }

    return {
      ...state,
      ...toAdd
    }
  }

  if (action.type === 'TRACKS_LOAD_SUCCESS') {
    if (state == null) {
      state = {}
    }

    const playlist = { ...state[action.playlistURI] }
    playlist.tracks = action.tracks.map(t => t.uri)

    return {
      ...state,
      [action.playlistURI]: playlist
    }
  }

  return state
}

const search = (state: string = '', action: Action): string => {
  if (action.type === 'PLAYLISTS_SEARCH_SET') {
    return action.search
  }

  return state
}

const loading = (state: boolean = false, action: Action): boolean => {
  if (action.type === 'PLAYLISTS_LOAD_REQUEST') {
    return true
  }

  if (action.type === 'PLAYLISTS_LOAD_SUCCESS') {
    return false
  }

  return state
}

export interface State {
  loading: boolean,
  byURI: ByURIMap | null,
  search: string
}

export default combineReducers<State, Action>({
  loading,
  byURI,
  search
})
