import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? <Component {...props} /> : <Redirect to='/sign-in' />
    }
  />
)

const state = state => ({
  hasToken: state.auth.hasToken
})

export default withRouter(connect(state)(ProtectedRoute))
