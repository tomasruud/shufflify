import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { loadToken, hasToken, loading } from './state'
import { redirectToLogin } from './business'

import Button from '../ui/Button'
import { Heading1 } from '../ui/Heading'
import Paragraph from '../ui/Paragraph'

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
      <Heading1>Make your playlists more interesting!</Heading1>
      <Paragraph>
        Shufflify allows you to shuffle and order your Spotify playlists in new
        and exciting ways.{' '}
      </Paragraph>
      <Paragraph>
        Continue by clicking the button below, and allow access to your
        playlists to start shuffling!
      </Paragraph>

      <Button onClick={() => onLoginClick()}>Authenticate and continue</Button>
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
