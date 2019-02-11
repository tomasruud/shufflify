import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchToken, redirectToLogin } from './state'

const Login = ({ hasToken, isLoading, fetchToken, onLoginClick }) => {
  useEffect(() => {
    if (!hasToken) {
      fetchToken()
    }
  }, [hasToken])

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (hasToken) {
    return <Redirect to='/' />
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <button onClick={onLoginClick}>Log me in</button>
    </React.Fragment>
  )
}

const mapState = state => ({
  hasToken: state.auth.hasToken,
  isLoading: state.auth.isLoading,
  onLoginClick: redirectToLogin
})

const mapDispatch = dispatch => ({
  fetchToken: () => dispatch(fetchToken())
})

export default connect(
  mapState,
  mapDispatch
)(Login)
