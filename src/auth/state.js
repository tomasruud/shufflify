const RECEIVE_TOKEN = 'auth/RECEIVE_TOKEN'
const RECEIVE_TOKEN_FAILED = 'auth/RECEIVE_TOKEN_FAILED'

const initial = {
  token: null,
  user: {},
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
        user: action.user,
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

export const receiveToken = (token, user) => ({
  type: RECEIVE_TOKEN,
  token,
  user
})

export const receiveTokenFailed = () => ({
  type: RECEIVE_TOKEN_FAILED
})

export const fetchToken = () => async dispatch => {
  try {
    const service = await import('../spotify/service')

    const { location, history, title } = window
    const { search, hash } = location

    if (await service.hasAuthError(search)) {
      return dispatch(receiveTokenFailed())
    }

    const token = await service.findToken(hash)

    if (!token) {
      return dispatch(receiveToken(token, {}))
    }

    const adapter = await import('../spotify/remote.adapter')
    const client = await adapter.client(token)
    const user = await service.user(adapter.getMe(client))

    history.replaceState({}, title, location.pathname)

    return dispatch(receiveToken(token, user))
  } catch (e) {
    console.log(e)
    return dispatch(receiveTokenFailed())
  }
}

export const getAuthUri = () => {
  return (async () => {
    const service = await import('../spotify/service')

    const scopes = ['playlist-read-private', 'playlist-modify-private']
    const client = 'd889de9a8c554ddebea3a0b88fdf5874'
    const redirect =
      process.env.NODE_ENV === 'production'
        ? 'https://shufflify.ruud.ninja'
        : 'http://localhost:3000'

    return service.authURI(client, redirect, scopes)
  })()
}
