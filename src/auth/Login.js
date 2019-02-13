import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { loadToken, hasToken, loading } from './state'
import { redirectToLogin } from './business'

const Login = ({ hasToken, loading, loadToken, onLoginClick }) => {
  useLayoutEffect(() => {
    if (!hasToken) {
      loadToken()
    }
  }, [])

  if (hasToken) {
    return <Redirect to='/' />
  }

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <React.Fragment>
      <h1>Shufflify</h1>
      <button onClick={() => onLoginClick()}>Authenticate and continue</button>
    </React.Fragment>
  )
}

Login.propTypes = {
  hasToken: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadToken: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
}

const mapState = state => ({
  hasToken: hasToken(state),
  loading: loading(state),
  onLoginClick: () => redirectToLogin()
})

const mapDispatch = dispatch => ({
  loadToken: () => dispatch(loadToken())
})

export default connect(
  mapState,
  mapDispatch
)(Login)
