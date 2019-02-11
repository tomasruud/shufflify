const REQUEST_PLAYLISTS = 'playlist/REQUEST_PLAYLISTS'
const RECEIVE_PLAYLISTS = 'playlist/RECEIVE_PLAYLISTS'
const RECEIVE_PLAYLISTS_FAILED = 'playlist/RECEIVE_PLAYLISTS_FAILED'

const init = {
  items: [],
  isLoading: false,
  failed: false,
  fetched: false
}

const reducer = (state = init, action = {}) => {
  switch (action.type) {
    case REQUEST_PLAYLISTS:
      return {
        ...state,
        isLoading: true,
        failed: false,
        fetched: false
      }

    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        items: action.playlists,
        isLoading: false,
        failed: false,
        fetched: true
      }

    case RECEIVE_PLAYLISTS_FAILED:
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

export const requestPlaylists = () => ({
  type: REQUEST_PLAYLISTS
})

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

export const receivePlaylistsFailed = () => ({
  type: RECEIVE_PLAYLISTS_FAILED
})

export const findPlaylists = () => async (dispatch, getState) => {
  dispatch(requestPlaylists())

  try {
    const adapter = await import('../spotify/remote.adapter')
    const service = await import('../spotify/service')

    const { token, user } = getState().auth

    const client = await adapter.client(token)
    const items = await service.playlists(
      adapter.getPlaylists(client),
      adapter.getGeneric(client),
      user.id
    )

    return dispatch(receivePlaylists(items))
  } catch (e) {
    console.log(e)
    return dispatch(receivePlaylistsFailed())
  }
}
