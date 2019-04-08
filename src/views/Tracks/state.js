import { createAction, handleActions } from 'redux-actions'

export const loadTracksRequest = createAction('LOAD_TRACKS_REQUEST')

export const loadTracksSuccess = createAction(
  'LOAD_TRACKS_SUCCESS',
  tracks => tracks
)

export const loadTracksError = createAction('LOAD_TRACKS_ERROR')

const defaultState = {
  items: [],
  loading: false,
  error: false
}

export default handleActions(
  {
    [loadTracksRequest]: state => ({
      ...state,
      loading: true,
      error: false
    }),

    [loadTracksSuccess]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
      error: false
    }),

    [loadTracksError]: state => ({
      ...state,
      error: true,
      loading: false
    })
  },
  defaultState
)

export const tracks = state => state.tracks.items

export const loading = state => state.tracks.loading

export const error = state => state.tracks.error

export const loadTracks = playlistID => async (dispatch, getState) => {
  try {
    dispatch(loadTracksRequest())

    const adapter = await import('../../spotify/remote.adapter')
    const service = await import('../../spotify/service')

    const auth = await import('../Auth/state')
    const token = auth.token(getState())

    const client = await adapter.client(token)
    const items = await service.tracks(
      adapter.getTracks(client),
      adapter.getGeneric(client),
      playlistID
    )

    return dispatch(loadTracksSuccess(items))
  } catch (e) {
    console.error(e)
    return dispatch(loadTracksError())
  }
}
