import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import store from './store'

import AuthRoute from './auth/ProtectedRoute'

import PlaylistList from './playlist/List'
import TrackList from './tracklist/List'
import Login from './auth/Login'
import Theme from './Theme'
import Layout from './Layout'

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Router>
        <Layout>
          <AuthRoute exact path='/' component={PlaylistList} />
          <Route path='/auth' component={Login} />
          <Route path='/shuffle/:id' component={TrackList} />
        </Layout>
      </Router>
    </Theme>
  </Provider>,
  document.getElementById('shufflify')
)
