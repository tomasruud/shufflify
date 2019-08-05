import { ID } from '../../common'
import { Spotify } from '../../services'

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