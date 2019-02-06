import React from 'react'
import { url, hook } from './spotify'

const c = 'd889de9a8c554ddebea3a0b88fdf5874'
const r = 'http://localhost:3000'
const s = ['playlist-read-private', 'playlist-modify-private']

//   window.history.replaceState({}, document.title, window.location.pathname);

const App = () => (
  <div>
    <a href={url}>{url}</a>
    {hook()}
  </div>
)

export default App
