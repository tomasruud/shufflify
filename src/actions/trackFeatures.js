// @flow
import type { ThunkAction } from './types'
import type { ID } from '../common'
import { session } from '../selectors'
import { Spotify } from '../services'

export const loadFeatures = (tracks: Array<ID>): ThunkAction => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TRACKFEATURES_LOAD_REQUEST'
  })

  const t = session.token(getState())

  if (t == null) {
    throw Error('No token provided')
  }

  const client = new Spotify(t)
  const features = await client.getFeaturesForTracks(tracks)

  dispatch({
    type: 'TRACKFEATURES_LOAD_SUCCESS',
    features
  })
}
