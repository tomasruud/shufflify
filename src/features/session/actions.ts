import { ThunkAction } from 'redux-thunk'
import { NoAccessTokenAvailableError, Spotify } from '../../services'
import { User } from '../../models'

interface BootstrapComplete {
  type: 'session/BOOTSTRAP_COMPLETE'
  token: string | null
  user: User | null
}

export type Action = BootstrapComplete

export const authenticate = (): void => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  if (!client || !redirect) {
    throw Error('Missing client or redirect')
  }

  window.location.href = Spotify.getAuthenticationURL(client, redirect)
}

export const bootstrap = (): ThunkAction<
  Promise<void>,
  {},
  {},
  Action
> => async dispatch => {
  try {
    const { location } = window

    const token = await Spotify.getAccessToken(location)
    const client = new Spotify(token)
    const user = await client.getUser()

    const whitelist = ['myspotfiy']

    if (!whitelist.includes(user.id)) {
      throw Error('You are not whitelisted')
    }

    dispatch({
      type: 'session/BOOTSTRAP_COMPLETE',
      token,
      user
    })
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      dispatch({
        type: 'session/BOOTSTRAP_COMPLETE',
        token: null,
        user: null
      })
    } else {
      throw e
    }
  }
}
