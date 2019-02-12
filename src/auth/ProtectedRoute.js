import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {getToken} from './state'

const ProtectedRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? <Component {...props} /> : <Redirect to='/auth' />
    }
  />
)

const state = state => ({
  hasToken: getToken(state)
})

export default withRouter(connect(state)(ProtectedRoute))
