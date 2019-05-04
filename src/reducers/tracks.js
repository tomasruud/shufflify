import { combineReducers } from 'redux'
import { TRACKS_LOAD_REQUEST, TRACKS_LOAD_SUCCESS } from '../constants/actions'

const byURI = (state = {}, { type, payload }) => {
  if (type === TRACKS_LOAD_SUCCESS) {
    return {
      ...state,
      ...payload.tracks.reduce((acc, track) => {
        acc[track.uri] = track
        return acc
      }, {})
    }
  }

  return state
}

const URIbyID = (state = {}, { type, payload }) => {
  if (type === TRACKS_LOAD_SUCCESS) {
    return {
      ...state,
      ...payload.tracks.reduce((acc, track) => {
        if (track.id) {
          acc[track.id] = track.uri
        }

        return acc
      }, {})
    }
  }

  return state
}

const loading = (state = false, { type, payload }) => {
  if (type === TRACKS_LOAD_REQUEST) {
    return true
  } else if (type === TRACKS_LOAD_SUCCESS) {
    return false
  }

  return state
}

export default combineReducers({
  loading,
  byURI,
  URIbyID
})
