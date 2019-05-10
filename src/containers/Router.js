import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import routes from '../constants/routes'
import { path } from '../selectors/router'
import { authenticated } from '../selectors/session'
import { authenticate, bootstrap } from '../actions/session'
import Privacy from '../components/Privacy'

import Login from './Login'
import Playlists from './Playlists'
import Shuffler from './Shuffler'

const Router = ({ path, isAuthenticated, bootstrap }) => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      bootstrap()
    }
  }, [bootstrap, isAuthenticated])

  if (path === routes.PRIVACY) {
    return <Privacy />
  }

  if (isAuthenticated) {
    switch (path) {
      case routes.SHUFFLE:
        return <Shuffler />

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
  bootstrap: () => dispatch(bootstrap()),
  authenticate: () => dispatch(authenticate())
})

export default connect(
  mapState,
  mapDispatch
)(Router)
