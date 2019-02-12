const REQUEST_TRACKS = 'tracklist/REQUEST_TRACKS'
const RECEIVE_TRACKS = 'tracklist/RECEIVE_TRACKS'
const RECEIVE_TRACKS_FAILED = 'tracklist/RECEIVE_TRACKS_FAILED'

const init = {
  items: [],
  isLoading: false,
  failed: false,
  fetched: false
}

export const getTracks = state => state.tracks.items
export const isLoading = state => state.tracks.isLoading
export const hasFailed = state => state.tracks.failed
export const fetchComplete = state => state.tracks.fetched

const reducer = (state = init, action = {}) => {
  switch (action.type) {
    case REQUEST_TRACKS:
      return {
        ...state,
        isLoading: true,
        failed: false,
        fetched: false
      }

    case RECEIVE_TRACKS:
      return {
        ...state,
        items: action.tracks,
        isLoading: false,
        failed: false,
        fetched: true
      }

    case RECEIVE_TRACKS_FAILED:
      return {
        ...state,
        failed: true,
        isLoading: false,
        fetched: true
      }

    default:
      return state
  }
}

export default reducer

export const requestTracks = () => ({
  type: REQUEST_TRACKS
})

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
})

export const receiveTracksFailed = () => ({
  type: RECEIVE_TRACKS_FAILED
})

export const findTracks = playlistID => async (dispatch, getState) => {
  try {
    dispatch(requestTracks())

    const adapter = await import('../spotify/remote.adapter')
    const service = await import('../spotify/service')

    const auth = await import('../auth/state')
    const token = auth.getToken(getState())

    const client = await adapter.client(token)
    const items = await service.tracks(
      adapter.getTracks(client),
      adapter.getGeneric(client),
      playlistID
    )

    return dispatch(receiveTracks(items))
  } catch (e) {
    console.log(e)
    return dispatch(receiveTracksFailed())
  }
}
