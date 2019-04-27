import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { routes } from '../actions/router'
import { authenticate, init } from '../actions/session'
import { path } from '../selectors/router'
import { authenticated } from '../selectors/session'
import Privacy from '../components/Privacy'
import Login from './Login'
import Playlists from './Playlists'
import Tracks from './Tracks'

const Router = ({ path, isAuthenticated, checkAuthentication }) => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      checkAuthentication()
    }
  }, [checkAuthentication, isAuthenticated])

  if (path === routes.PRIVACY) {
    return <Privacy />
  }

  if (isAuthenticated) {
    switch (path) {
      case routes.SHUFFLE:
        return <Tracks />

      case routes.PLAYLISTS:
      default:
        return <Playlists />
    }
  }

  return <Login />
}

const mapState = state => ({
  path: path(state),
  isAuthenticated: authenticated(state)
})

const mapDispatch = dispatch => ({
  checkAuthentication: () => dispatch(init()),
  authenticate: () => dispatch(authenticate())
})

export default connect(
  mapState,
  mapDispatch
)(Router)
