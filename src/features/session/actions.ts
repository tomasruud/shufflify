import { ThunkAction } from 'redux-thunk'
import { User } from './models'
import { NoAccessTokenAvailableError, SessionService } from './services'

interface Set {
  type: 'session/SET'
  token?: string
  user?: User
}

interface Boot {
  type: 'session/BOOT'
}

export type Action = Set | Boot

export const authenticate = (): ThunkAction<
  Promise<void>,
  null,
  SessionService,
  Action
> => async (_dispatch, _getState, service) => {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

  if (!client || !redirect) {
    throw Error('Missing client or redirect')
  }

  window.location.href = await service.getAuthURL(client, redirect)
}

export const bootstrap = (): ThunkAction<
  Promise<void>,
  null,
  SessionService,
  Action
> => async (dispatch, _getState, service) => {
  dispatch({ type: 'session/BOOT' })

  try {
    const { location } = window

    const token = await service.getAccessToken(location)

    dispatch({
      type: 'session/SET',
      token
    })

    const user = await service.getUser()

    const whitelist = ['myspotfiy']

    if (!whitelist.includes(user.id)) {
      throw Error('You are not whitelisted')
    }

    dispatch({
      type: 'session/SET',
      token,
      user
    })
  } catch (e) {
    if (e instanceof NoAccessTokenAvailableError) {
      dispatch({ type: 'session/SET' })
    } else {
      throw e
    }
  }
}
