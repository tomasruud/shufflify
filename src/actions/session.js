import { Spotify, NoAccessTokenAvailableError } from '../services'
import { SESSION_BOOTSTRAP_COMPLETE, whitelist } from '../constants'

export const success = (token, user) => ({
  type: SESSION_BOOTSTRAP_COMPLETE,
  payload: {
    token,
    user
  }
})

export const authenticate = () => async () => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  window.location = Spotify.getAuthenticationURL(client, redirect)
}

export const bootstrap = () => async dispatch => {
  try {
    const { location, history, title } = window

    const token = await Spotify.getAccessToken(location)
    const client = new Spotify(token)
    const user = await client.getUser()

    history.replaceState({}, title, location.pathname)

    if (whitelist.enabled && !whitelist.includes(user.id)) {
      throw Error('You are not whitelisted')
    }

    return dispatch(success(token, user))
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      return dispatch(success(null, {}))
    } else {
      throw e
    }
  }
}
