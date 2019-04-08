import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import { hasToken, loading, loadToken } from './state'
import { redirectToLogin } from './business'

import { Button, ContentLimiter, Heading1, Paragraph } from '../../components'

const Index = ({ hasToken, loading, loadToken, onLoginClick }) => {
  useLayoutEffect(() => {
    if (!hasToken) {
      loadToken()
    }
  }, [])

  if (hasToken) {
    return <Redirect to='/' />
  }

  if (loading) {
    return (
      <ContentLimiter>
        <Heading1>
          <Skeleton />
        </Heading1>
        <Paragraph>
          <Skeleton count={6} />
        </Paragraph>
      </ContentLimiter>
    )
  }

  return (
    <ContentLimiter>
      <Heading1>Make your playlists more interesting</Heading1>

      <Paragraph>
        Shufflify allows you to shuffle and order your Spotify playlists in new
        and exciting ways.{' '}
      </Paragraph>
      <Paragraph>
        Continue by clicking the button below, and allow access to your
        playlists to start shuffling!
      </Paragraph>

      <Button onClick={() => onLoginClick()}>Sign in with Spotify</Button>
    </ContentLimiter>
  )
}

Index.propTypes = {
  hasToken: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadToken: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
}

const mapState = state => ({
  hasToken: hasToken(state),
  loading: loading(state)
})

const mapDispatch = dispatch => ({
  loadToken: () => dispatch(loadToken()),
  onLoginClick: () => redirectToLogin()
})

export default connect(
  mapState,
  mapDispatch
)(Index)
