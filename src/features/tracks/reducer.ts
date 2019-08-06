import { combineReducers } from 'redux'
import { ByURIMap, URIbyIDMap } from './models'
import { Action } from './actions'

const byURI = (state: ?ByURIMap = null, action: Action): ?ByURIMap => {
  if (action.type === 'TRACKS_LOAD_SUCCESS') {
    const tracks = action.tracks.reduce((acc, track) => {
      acc[track.uri] = track
      return acc
    }, {})

    return {
      ...state,
      ...tracks
    }
  }

  return state
}


if (action.type === 'tracks/LOAD_SUCCESS') {
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

const URIbyID = (state: ?URIbyIDMap = null, action: Action): ?URIbyIDMap => {
  if (action.type === 'TRACKS_LOAD_SUCCESS') {
    const tracks = action.tracks.reduce((acc, track) => {
      if (track.id) {
        acc[track.id] = track.uri
      }

      return acc
    }, {})

    return {
      ...state,
      ...tracks
    }
  }

  return state
}

const loading = (state: boolean = false, action: Action): boolean => {
  if (action.type === 'TRACKS_LOAD_REQUEST') {
    return true
  }

  if (action.type === 'TRACKS_LOAD_SUCCESS') {
    return false
  }

  return state
}

export type State = {
  readonly loading: boolean,
  readonly byURI: ByURIMap,
  readonly URIbyID: URIbyIDMap
}

export default combineReducers({
  loading,
  byURI,
  URIbyID
})
