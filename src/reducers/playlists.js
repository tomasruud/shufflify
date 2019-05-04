import { combineReducers } from 'redux'
import {
  PLAYLISTS_LOAD_REQUEST,
  PLAYLISTS_LOAD_SUCCESS,
  PLAYLISTS_SEARCH_SET,
  TRACKS_LOAD_SUCCESS
} from '../constants/actions'

const byURI = (state = {}, { type, payload }) => {
  if (type === PLAYLISTS_LOAD_SUCCESS) {
    return {
      ...state,
      ...payload.reduce((acc, playlist) => {
        acc[playlist.uri] = playlist
        return acc
      }, {})
    }
  } else if (type === TRACKS_LOAD_SUCCESS) {
    return {
      ...state,
      [payload.playlistURI]: {
        ...state[payload.playlistURI],
        tracks: payload.tracks.map(t => t.uri)
      }
    }
  }

  return state
}

const search = (state = '', { type, payload }) => {
  if (type === PLAYLISTS_SEARCH_SET) {
    return payload
  }

  return state
}

const loading = (state = false, { type }) => {
  if (type === PLAYLISTS_LOAD_REQUEST) {
    return true
  } else if (type === PLAYLISTS_LOAD_SUCCESS) {
    return false
  }

  return state
}

export default combineReducers({
  loading,
  byURI,
  search
})
