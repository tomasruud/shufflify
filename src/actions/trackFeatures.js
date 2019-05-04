import { token } from '../selectors/session'
import Spotify from '../services/spotify'
import {
  TRACKFEATURES_LOAD_REQUEST,
  TRACKFEATURES_LOAD_SUCCESS
} from '../constants/actions'

export const loadFeatures = tracks => async (dispatch, getState) => {
  dispatch({
    type: TRACKFEATURES_LOAD_REQUEST
  })

  const t = token(getState())
  const client = new Spotify(t)
  const features = await client.getFeaturesForTracks(tracks)

  return dispatch({
    type: TRACKFEATURES_LOAD_SUCCESS,
    payload: features
  })
}
