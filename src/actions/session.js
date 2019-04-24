import { createAction } from 'redux-actions'
import Spotify, { NoAccessTokenAvailableError } from '../services/spotify'

export const loadTokenSuccess = createAction(
  'LOAD_TOKEN_SUCCESS',
  (token, user) => ({
    token,
    user
  })
)

export const loadTokenError = createAction('LOAD_TOKEN_ERROR')

export const redirectToAuthentication = () => async () => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  window.location = Spotify.getAuthenticationURL(client, redirect)
}

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