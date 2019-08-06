import { ThunkAction } from 'redux-thunk'
import { Track } from './models'
import { TrackService } from './services'

interface LoadRequest {
  type: 'tracks/LOAD_REQUEST'
}

interface LoadSuccess {
  type: 'tracks/LOAD_SUCCESS'
  tracks: Array<Track>
}

export type Action = LoadRequest | LoadSuccess

export const load = (
  playlistID: string
): ThunkAction<Promise<void>, null, TrackService, Action> => async (
  dispatch,
  _getState,
  service
) => {
  dispatch({
    type: 'tracks/LOAD_REQUEST'
  })

  const tracks = await service.getTracks(playlistID)

  dispatch({
    type: 'tracks/LOAD_SUCCESS',
    playlistID,
    tracks
  })
}
