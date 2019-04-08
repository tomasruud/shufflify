import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import store from './store'

import AuthRoute from './views/Auth/ProtectedRoute'

import PlaylistList from './views/Playlists'
import TrackList from './views/Tracks'
import Login from './views/Auth'
import Privacy from './views/Privacy'

import Theme from './Theme'
import Layout from './Layout'

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Router>
        <Layout>
          <AuthRoute exact path='/' component={PlaylistList} />
          <Route path='/auth' component={Login} />
          <AuthRoute path='/playlists' component={PlaylistList} />
          <AuthRoute path='/playlists/:id' component={TrackList} />
          <Route path='/privacy' component={Privacy} />
        </Layout>
      </Router>
    </Theme>
  </Provider>,
  document.getElementById('shufflify')
)
