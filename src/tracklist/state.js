const REQUEST_TRACKS = 'tracklist/REQUEST_TRACKS'
const RECEIVE_TRACKS = 'tracklist/RECEIVE_TRACKS'
const RECEIVE_TRACKS_FAILED = 'tracklist/RECEIVE_TRACKS_FAILED'

const init = {
  items: [],
  playlistId: null,
  isLoading: false,
  failed: false
}

const reducer = (state = init, action = {}) => {
  switch (action.type) {
    case REQUEST_TRACKS:
      return {
        ...state,
        isLoading: true,
        failed: false
      }

    case RECEIVE_TRACKS:
      return {
        ...state,
        items: action.tracks,
        playlistId: action.playlistId,
        isLoading: false,
        failed: false
      }

    case RECEIVE_TRACKS_FAILED:
      return {
        ...state,
        failed: true,
        isLoading: false
      }

    default:
      return state
  }
}

export default reducer

export const requestTracks = () => ({
  type: REQUEST_TRACKS
})

export const receiveTracks = (playlistId, tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
  playlistId
})

export const receiveTracksFailed = () => ({
  type: RECEIVE_TRACKS_FAILED
})