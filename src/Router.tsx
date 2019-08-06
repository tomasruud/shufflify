import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import LoginView from './Login'
import { View as Playlists } from './playlists'
import { View as Shuffler } from './shuffler'
import { State } from './store'
import { router, session } from './features'

type Props = {
  path: string
  isAuthenticated: boolean
  bootstrap: () => void
}

const Router = ({ path, isAuthenticated, bootstrap }: Props) => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      bootstrap()
    }
  }, [bootstrap, isAuthenticated])
  if (path === '/authenticate') {
    session.actions.authenticate()
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

  return <LoginView />
}

const select = (state: State) => ({
  path: router.selectors.path(state.router),
  isAuthenticated: session.selectors.authenticated(state.session)
})

const actions = {
  bootstrap: session.actions.bootstrap
}

export default connect(
  select,
  actions
)(Router)
