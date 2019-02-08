import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import store from './store'

import AuthRoute from './auth/ProtectedRoute'

import List from './playlist/List'
import Login from './auth/Login'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <AuthRoute exact path='/' component={List} />
        <Route path='/sign-in' component={Login} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('shufflify')
)
