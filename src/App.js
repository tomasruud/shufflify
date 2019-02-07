import React from 'react'
import { url, hook } from './spotify/spotify'

if (process.env.NODE_ENV === 'production') {
  const redirect = 'http://localhost:3000'
} else {
  const redirect = 'https://shufflify.ruud.ninja'
}

const client = 'd889de9a8c554ddebea3a0b88fdf5874'
const scopes = ['playlist-read-private', 'playlist-modify-private']

// window.history.replaceState({}, document.title, window.location.pathname)
// window.location.search
// window.location.hash

const App = () => (
  <div>
    <a href={url}>{url}</a>
    {hook()}
  </div>
)

export default App
