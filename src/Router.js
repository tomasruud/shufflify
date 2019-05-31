// @flow
import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import { session, router } from './selectors'
import { session as sessionActions } from './actions'
import { View as Login } from './login'
import { View as Playlists } from './playlists'
import { View as Shuffler } from './shuffler'

type Props = {
  path: string,
  isAuthenticated: boolean,
  bootstrap: () => void
}

const Router = ({ path, isAuthenticated, bootstrap }: Props) => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      bootstrap()
    }
  }, [bootstrap, isAuthenticated])
  if (path === '/authenticate') {
    sessionActions.authenticate()
    return null
  }

  if (isAuthenticated) {
    switch (path) {
      case '/shuffle':
        return <Shuffler />

      case '/playlists':
      default:
        return <Playlists />
    }
  }

  return <Login />
}

const select = state => ({
  path: router.path(state),
  isAuthenticated: session.authenticated(state)
})

const actions = dispatch => ({
  bootstrap: () => dispatch(sessionActions.bootstrap())
})

export default connect(
  select,
  actions
)(Router)
