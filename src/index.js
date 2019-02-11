import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import store from './store'

import AuthRoute from './auth/ProtectedRoute'

import PlaylistList from './playlist/List'
import TrackList from './tracklist/List'
import Login from './auth/Login'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <AuthRoute exact path='/' component={PlaylistList} />
        <Route path='/auth' component={Login} />
        <Route path='/shuffle/:id' component={TrackList} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('shufflify')
)
