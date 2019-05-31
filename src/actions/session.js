// @flow
import type { ThunkAction } from './types'
import { NoAccessTokenAvailableError, Spotify } from '../services'

const whitelist = ['myspotfiy']

export const authenticate = (): void => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  if (client == null || redirect == null) {
    throw Error('Missing client or redirect')
  }

  window.location = Spotify.getAuthenticationURL(client, redirect)
}

export const bootstrap = (): ThunkAction => async dispatch => {
  try {
    const { location, history, title } = window

    const token = await Spotify.getAccessToken(location)
    const client = new Spotify(token)
    const user = await client.getUser()

    history.replaceState({}, title, location.pathname)

    if (!whitelist.includes(user.id)) {
      throw Error('You are not whitelisted')
    }

    dispatch({
      type: 'SESSION_BOOTSTRAP_COMPLETE',
      token,
      user
    })
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      dispatch({
        type: 'SESSION_BOOTSTRAP_COMPLETE',
        token: null,
        user: null
      })
    } else {
      throw e
    }
  }
}
