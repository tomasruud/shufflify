import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import Content from './Content'
import Paragraph from './Paragraph'
import Button from './Button'
import Title from './Title'

const Login = ({
  isAuthenticated,
  isLoading,
  authenticate,
  checkAuthentication
}) => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      checkAuthentication()
    }
  }, [])

  if (isAuthenticated) {
    return <Redirect to='/playlists' />
  }

  if (isLoading) {
    return (
      <Content>
        <Title>
          <Skeleton />
        </Title>
        <Paragraph>
          <Skeleton count={6} />
        </Paragraph>
      </Content>
    )
  }

  return (
    <Content>
      <Title>Make your playlists more interesting</Title>

      <Paragraph>
        Shufflify allows you to shuffle and order your Spotify playlists in new
        and exciting ways.{' '}
      </Paragraph>
      <Paragraph>
        Continue by clicking the button below, and allow access to your
        playlists to start shuffling!
      </Paragraph>

      <Button onClick={() => authenticate()}>Sign in with Spotify</Button>
    </Content>
  )
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  authenticate: PropTypes.func.isRequired,
  checkAuthentication: PropTypes.func.isRequired
}

export default Login
