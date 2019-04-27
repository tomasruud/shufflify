import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import Paragraph from './Paragraph'
import Button from './Button'
import Title from './Title'

const Login = ({ authenticate }) => (
  <Content>
    <Title>Make your playlists more interesting</Title>

    <Paragraph>
      Shufflify allows you to shuffle and order your Spotify playlists in new
      and exciting ways.{' '}
    </Paragraph>
    <Paragraph>
      Continue by clicking the button below, and allow access to your playlists
      to start shuffling!
    </Paragraph>

    <Button onClick={() => authenticate()}>Sign in with Spotify</Button>
  </Content>
)

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  authenticate: PropTypes.func.isRequired
}

export default Login
