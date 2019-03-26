import { createAction, handleActions } from 'redux-actions'

export const loadTokenSuccess = createAction(
  'LOAD_TOKEN_SUCCESS',
  (token, user) => ({
    token,
    user
  })
)

export const loadTokenError = createAction('LOAD_TOKEN_ERROR')

const defaultState =  {
  token: null,
  user: {},
  error: false,
  loading: true
}

export default handleActions(
  {
    [loadTokenSuccess]: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      loading: false
    }),

    [loadTokenError]: state => ({
      ...state,
      error: true
    })
  },
  defaultState
)

export const token = state => state.auth.token

export const user = state => state.auth.user

export const userID = state => user(state).id

export const loading = state => state.auth.loading

export const hasToken = state => !!token(state)

export const error = state => state.auth.error

export const loadToken = () => async dispatch => {
  try {
    const service = await import('../spotify/service')

    const { location, history, title } = window
    const { search, hash } = location

    if (await service.hasAuthError(search)) {
      return dispatch(loadTokenError())
    }

    const token = await service.findToken(hash)

    if (!token) {
      return dispatch(loadTokenSuccess(token, {}))
    }

    const adapter = await import('../spotify/remote.adapter')
    const client = await adapter.client(token)
    const user = await service.user(adapter.getMe(client))

    history.replaceState({}, title, location.pathname)

    return dispatch(loadTokenSuccess(token, user))
  } catch (e) {
    console.error(e)
    return dispatch(loadTokenError())
  }
}
