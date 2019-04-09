import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store'

import AuthRoute from './views/Login/ProtectedRoute'

import PlaylistList from './views/Playlists'
import TrackList from './views/Tracks'
import Login from './views/Login'
import Privacy from './views/Privacy'
import AuthRedirect from './views/Login/Redirect'

import Theme from './Theme'
import Layout from './Layout'

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Router>
        <Layout>
          <Switch>
            <AuthRoute path='/playlists/:id' component={TrackList}/>
            <AuthRoute path='/playlists' component={PlaylistList}/>
            <Route path='/login' component={Login}/>
            <Route path='/auth' component={AuthRedirect} />
            <Route path='/privacy' component={Privacy}/>
            <AuthRoute exact path='/' component={PlaylistList}/>
          </Switch>
        </Layout>
      </Router>
    </Theme>
  </Provider>,
  document.getElementById('shufflify')
)
