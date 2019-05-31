// @flow
import { combineReducers } from 'redux'
import type { Action } from '../actions'
import type { ID, Track, URI } from '../common'

type URIbyIDMap = {
  [ID]: URI
}

type ByURIMap = {
  [URI]: Track
}

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
  loading: boolean,
  byURI: ByURIMap,
  URIbyID: URIbyIDMap
}

export default combineReducers({
  loading,
  byURI,
  URIbyID
})
