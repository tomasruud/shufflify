const RECEIVE_TOKEN = 'auth/RECEIVE_TOKEN'
const RECEIVE_TOKEN_FAILED = 'auth/RECEIVE_TOKEN_FAILED'

const initial = {
  token: null,
  hasToken: false,
  error: false,
  isLoading: true
}

const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return {
        ...state,
        token: action.token,
        hasToken: !!action.token,
        isLoading: false
      }

    case RECEIVE_TOKEN_FAILED:
      return {
        ...state,
        error: true
      }

    default:
      return state
  }
}

export default reducer

export const receiveToken = token => ({
  type: RECEIVE_TOKEN,
  token
})

export const receiveTokenFailed = () => ({
  type: RECEIVE_TOKEN_FAILED
})

export const fetchToken = (hash, search) => async dispatch => {
  const Spotify = await import('../spotify/spotify')

  if (await Spotify.hasAuthError(search)) {
    return dispatch(receiveTokenFailed())
  }

  const token = await Spotify.findToken(hash)
  return dispatch(receiveToken(token))
}
