import { createAction, handleActions } from 'redux-actions'
import Spotify, { NoAccessTokenAvailableError } from '../../shuffle/spotify'

export const loadTokenSuccess = createAction(
  'LOAD_TOKEN_SUCCESS',
  (token, user) => ({
    token,
    user
  })
)

export const loadTokenError = createAction('LOAD_TOKEN_ERROR')

const defaultState = {
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
    const { location, history, title } = window

    const token = await Spotify.getAccessToken(location)
    const client = new Spotify(token)
    const user = await client.getUser()

    history.replaceState({}, title, location.pathname)

    return dispatch(loadTokenSuccess(token, user))
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      return dispatch(loadTokenSuccess(null, {}))
    } else {
      console.error(e)
      return dispatch(loadTokenError())
    }
  }
}
