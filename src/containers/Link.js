import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link as Base } from '../components'
import { router } from '../actions'

const Link = ({ as: Component, to, params, navigateTo, ...rest }) => (
  <Component
    as='button'
    onClick={e => {
      e.preventDefault()
      navigateTo(to, params)
    }}
    {...rest}
  />
)

Link.propTypes = {
  as: PropTypes.object,
  to: PropTypes.string.isRequired,
  params: PropTypes.object,
  navigateTo: PropTypes.func.isRequired
}

Link.defaultProps = {
  as: Base
}

const mapDispatch = dispatch => ({
  navigateTo: (path, params) => dispatch(router.navigate(path, params))
})

export default connect(
  null,
  mapDispatch
)(Link)
