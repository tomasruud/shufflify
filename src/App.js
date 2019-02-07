import React from 'react'
import { MemoryRouter as Router, Redirect, Route } from 'react-router-dom'
import { List, Login } from './views'

const TokenRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? <Component {...props} /> : <Redirect to='/sign-in'/>
    }
  />
)

const App = () => (
  <Router>
    <div>
      <TokenRoute exact path='/' component={List}/>
      <Route path='/sign-in' component={Login}/>
    </div>
  </Router>
)

export default App
