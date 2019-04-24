import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({
  component: Component,
  isAuthenticated,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirect} />
    }
  />
)

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool,
  redirect: PropTypes.string.isRequired
}

export default AuthRoute
