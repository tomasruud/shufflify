import React from 'react'
import { connect } from 'react-redux'

import Base from './Link'
import { router } from '../features'

type Props = {
  as: React.ElementType
  to: string
  params?: object
  navigateTo: (to: string, params?: object) => any
}

const NavLink: React.FC<React.ComponentProps<React.ElementType> & Props> = ({
  as: Comp,
  to,
  params,
  navigateTo,
  ...props
}) => (
  <Comp
    as='button'
    onClick={(e: React.MouseEvent) => {
      e.preventDefault()
      navigateTo(to, params)
    }}
    {...props}
  />
)

NavLink.defaultProps = {
  as: Base
}

export default connect(
  null,
  { navigateTo: router.actions.navigate }
)(NavLink)
