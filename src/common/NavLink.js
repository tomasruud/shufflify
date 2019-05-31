// @flow
import React from 'react'
import { connect } from 'react-redux'

import Base from './Link'
import { router } from '../actions'

type Props = {
  as: React$ElementType,
  to: string,
  params: ?{},
  navigateTo: Function
}

const NavLink = ({ as: Component, to, params, navigateTo, ...rest }: Props) => (
  <Component
    as='button'
    onClick={e => {
      e.preventDefault()
      navigateTo(to, params)
    }}
    {...rest}
  />
)

NavLink.defaultProps = {
  as: Base
}

const actions = dispatch => ({
  navigateTo: (path, params) => dispatch(router.navigate(path, params))
})

export default connect(
  null,
  actions
)(NavLink)
