import React from 'react'
import { Paragraph } from '../../components'
import Spotify from '../../shuffle/spotify'

const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const redirect = process.env.REACT_APP_SPOTIFY_REDIRECT

const Redirect = () => {
  window.location = Spotify.getAuthenticationURL(client, redirect)
  return <Paragraph>Redirecting to Spotify...</Paragraph>
}

export default Redirect
