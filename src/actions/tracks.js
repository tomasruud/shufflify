import { createAction } from 'redux-actions'
import { token } from '../selectors/session'
import Spotify from '../services/spotify'
import * as message from './message'

export const request = createAction('LOAD_TRACKS_REQUEST')

export const success = createAction('LOAD_TRACKS_SUCCESS', tracks => tracks)

export const load = playlistID => async (dispatch, getState) => {
  try {
    dispatch(request())

    const t = token(getState())

    const client = new Spotify(t)
    const items = await client.getTracks(playlistID)

    const features = await client.getFeaturesForTracks(items)

    return dispatch(success(features))
  } catch (e) {
    console.error(e)
    return dispatch(
      message.set('There was a problem loading tracks for your playlist')
    )
  }
}

export const featuresRequest = createAction('LOAD_TRACKS_FEATURES_REQUEST')

export const featuresSuccess = createAction(
  'LOAD_TRACKS_FEATURES_SUCCESS',
  tracks => tracks
)

export const loadFeatures = tracks => async (dispatch, getState) => {
  try {
    dispatch(featuresRequest())

    const t = token(getState())
    const client = new Spotify(t)
    const features = await client.getFeaturesForTracks(tracks)

    return dispatch(featuresSuccess(features))
  } catch (e) {
    console.error(e)
    return dispatch(
      message.set('There was a problem loading metadata for your tracks')
    )
  }
}
