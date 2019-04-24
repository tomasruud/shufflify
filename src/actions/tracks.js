import { createAction } from 'redux-actions'
import { token } from '../selectors/session'
import Spotify from '../services/spotify'

export const loadTracksRequest = createAction('LOAD_TRACKS_REQUEST')

export const loadTracksSuccess = createAction(
  'LOAD_TRACKS_SUCCESS',
  tracks => tracks
)

export const loadTracksError = createAction('LOAD_TRACKS_ERROR')

export const loadTracks = playlistID => async (dispatch, getState) => {
  try {
    dispatch(loadTracksRequest())

    const t = token(getState())

    const client = new Spotify(t)
    const items = await client.getTracks(playlistID)

    return dispatch(loadTracksSuccess(items))
  } catch (e) {
    console.error(e)
    return dispatch(loadTracksError())
  }
}

export const loadTracksFeaturesRequest = createAction(
  'LOAD_TRACKS_FEATURES_REQUEST'
)

export const loadTracksFeaturesSuccess = createAction(
  'LOAD_TRACKS_FEATURES_SUCCESS',
  tracks => tracks
)

export const loadTracksFeaturesError = createAction(
  'LOAD_TRACKS_FEATURES_ERROR'
)

export const loadTracksFeatures = tracks => async (dispatch, getState) => {
  try {
    dispatch(loadTracksFeaturesRequest())

    const t = token(getState())
    const client = new Spotify(t)
    const features = await client.getFeaturesForTracks(tracks)

    return dispatch(loadTracksFeaturesSuccess(features))
  } catch (e) {
    console.error(e)
    return dispatch(loadTracksFeaturesError())
  }
}
