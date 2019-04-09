import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { hasToken } from './state'

const ProtectedRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  hasToken: PropTypes.bool
}

const state = state => ({
  hasToken: hasToken(state)
})

export default withRouter(connect(state)(ProtectedRoute))
