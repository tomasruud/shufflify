import { combineReducers } from 'redux'
import { TrackURIByPlaylistURIMap, ByURIMap, Track, URIbyIDMap } from './models'
import { Action } from './actions'

const byURI = (state: ByURIMap = {}, action: Action): ByURIMap => {
  if (action.type === 'tracks/LOAD_SUCCESS') {
    const tracks = action.tracks.reduce((acc: ByURIMap, track) => {
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

const byPlaylistURI = (
  state: TrackURIByPlaylistURIMap = {},
  action: Action
): TrackURIByPlaylistURIMap => {
  if (action.type === 'tracks/LOAD_SUCCESS') {
    return {
      ...state,
      ...{
        [action.playlistURI]: action.tracks.map((t: Track) => t.uri)
      }
    }
  }

  return state
}

const URIbyID = (state: URIbyIDMap = {}, action: Action): URIbyIDMap => {
  if (action.type === 'tracks/LOAD_SUCCESS') {
    const tracks = action.tracks.reduce((acc: URIbyIDMap, track) => {
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
  if (action.type === 'tracks/LOAD_REQUEST') {
    return true
  }

  if (action.type === 'tracks/LOAD_SUCCESS') {
    return false
  }

  return state
}

export type State = {
  readonly loading: boolean
  readonly byPlaylistURI: TrackURIByPlaylistURIMap
  readonly byURI: ByURIMap
  readonly URIbyID: URIbyIDMap
}

export default combineReducers<State, Action>({
  loading,
  byPlaylistURI,
  byURI,
  URIbyID
})
