import React from 'react'
import styled from 'styled-components'

import { Button, Paragraph, Title, NavLink } from './common'

const Content = styled.div`
  max-width: 600px;
`

const Login = () => (
  <Content>
    <Title>Make your playlists more interesting</Title>

    <Paragraph>
      Shufflify allows you to shuffle and order your Spotify playlists in new
      and exciting ways.
    </Paragraph>
    <Paragraph>
      Continue by clicking the button below, and allow access to your playlists
      to start shuffling!
    </Paragraph>

    <NavLink as={Button} to='/authenticate'>
      Sign in with Spotify
    </NavLink>
  </Content>
)

export default Login
