import { createAction } from 'redux-actions'
import Spotify, { NoAccessTokenAvailableError } from '../services/spotify'
import * as message from './message'

export const success = createAction('LOAD_TOKEN_SUCCESS', (token, user) => ({
  token,
  user
}))

export const authenticate = () => async () => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  window.location = Spotify.getAuthenticationURL(client, redirect)
}

export const init = () => async dispatch => {
  try {
    const { location, history, title } = window

    const token = await Spotify.getAccessToken(location)
    const client = new Spotify(token)
    const user = await client.getUser()

    history.replaceState({}, title, location.pathname)

    return dispatch(success(token, user))
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      return dispatch(success(null, {}))
    } else {
      console.error(e)
      return dispatch(message.set('Unable to initialize authentication'))
    }
  }
}
