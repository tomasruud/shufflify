import { session } from '../selectors'
import { Spotify } from '../services'
import {
  TRACKFEATURES_LOAD_REQUEST,
  TRACKFEATURES_LOAD_SUCCESS
} from '../constants'

export const loadFeatures = tracks => async (dispatch, getState) => {
  dispatch({
    type: TRACKFEATURES_LOAD_REQUEST
  })

  const t = session.token(getState())
  const client = new Spotify(t)
  const features = await client.getFeaturesForTracks(tracks)

  return dispatch({
    type: TRACKFEATURES_LOAD_SUCCESS,
    payload: features
  })
}
