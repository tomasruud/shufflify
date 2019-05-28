import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import { routes } from '../constants'
import { router, session } from '../selectors'
import { session as sessionActions } from '../actions'

import { Privacy } from '../components'
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
  path: router.path(state),
  isAuthenticated: session.authenticated(state)
})

const mapDispatch = dispatch => ({
  bootstrap: () => dispatch(sessionActions.bootstrap()),
  authenticate: () => dispatch(sessionActions.authenticate())
})

export default connect(
  mapState,
  mapDispatch
)(Router)
