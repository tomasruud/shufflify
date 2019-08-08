import { ThunkAction } from 'redux-thunk'
import { Track } from './models'
import { TrackService } from './services'

interface LoadRequest {
  type: 'tracks/LOAD_REQUEST'
}

interface LoadSuccess {
  type: 'tracks/LOAD_SUCCESS'
  tracks: Array<Track>
  playlistURI: string
}

export type Action = LoadRequest | LoadSuccess

export const load = (
  playlistURI: string
): ThunkAction<Promise<void>, null, TrackService, Action> => async (
  dispatch,
  _getState,
  service
) => {
  dispatch({
    type: 'tracks/LOAD_REQUEST'
  })

  const tracks = await service.getTracks(playlistURI)

  dispatch({
    type: 'tracks/LOAD_SUCCESS',
    playlistURI,
    tracks
  })
}
