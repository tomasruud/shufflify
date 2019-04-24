import React from 'react'
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'
import Privacy from './Privacy'
import Theme from './Theme'
import Layout from '../components/Layout'
import AuthRoute from '../containers/AuthRoute'
import Tracks from '../containers/Tracks'
import Playlists from '../containers/Playlists'
import Login from '../containers/Login'

const App = () => (
  <Router>
    <Theme>
      <Layout>
        <Switch>
          <AuthRoute path='/playlists/:id' component={Tracks} />
          <AuthRoute path='/playlists' component={Playlists}/>
          <Route path='/login' component={Login} />
          <Route path='/privacy' component={Privacy} />
          <AuthRoute exact path='/' component={Playlists} />
        </Switch>
      </Layout>
    </Theme>
  </Router>
)

export default App
