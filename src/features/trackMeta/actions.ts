import { ThunkAction } from 'redux-thunk'
import { TrackMeta } from './models'
import { TrackMetaService } from './services'

interface LoadRequest {
  type: 'trackMeta/LOAD_REQUEST'
}

interface LoadSuccess {
  type: 'trackMeta/LOAD_SUCCESS'
  meta: Array<TrackMeta>
}

export type Action = LoadRequest | LoadSuccess

export const loadFeatures = (
  trackIDs: Array<string>
): ThunkAction<Promise<void>, null, TrackMetaService, Action> => async (
  dispatch,
  _getState,
  service
) => {
  dispatch({
    type: 'trackMeta/LOAD_REQUEST'
  })

  const meta = await service.getMetaForTracks(trackIDs)

  dispatch({
    type: 'trackMeta/LOAD_SUCCESS',
    meta
  })
}
