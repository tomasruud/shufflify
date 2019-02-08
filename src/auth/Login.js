import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { authURI } from '../spotify/spotify'
import { fetchToken } from './state'

const c = {
  redirect:
    process.env.NODE_ENV === 'production'
      ? 'https://shufflify.ruud.ninja'
      : 'http://localhost:3000',
  client: 'd889de9a8c554ddebea3a0b88fdf5874',
  scopes: ['playlist-read-private', 'playlist-modify-private']
}

const Login = ({ hasToken, isLoading, fetchToken, authURL }) => {
  useEffect(() => {
    const { location, history, title } = window

    if (!hasToken) {
      fetchToken(location.hash, location.search)
    } else {
      history.replaceState({}, title, location.pathname)
    }
  }, [hasToken])

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (hasToken) {
    return <Redirect to='/' />
  }

  return <a href={authURL}>Log me in</a>
}

const mapState = state => ({
  hasToken: state.auth.hasToken,
  isLoading: state.auth.isLoading,
  authURL: authURI(c.client, c.redirect, c.scopes)
})

const mapDispatch = dispatch => ({
  fetchToken: (hash, search) => dispatch(fetchToken(hash, search))
})

export default connect(
  mapState,
  mapDispatch
)(Login)
