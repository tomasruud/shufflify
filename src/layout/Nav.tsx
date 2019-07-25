import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { session } from '../selectors'
import { NavLink } from '../common'
import Logo from './Logo'
import Badge from './Badge'

const Wrapper = styled.header`
  color: ${p => p.theme.grays.gray30};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

type Props = {
  isLoading: boolean,
  isAuthenticated: boolean
}

const Nav = ({ isLoading, isAuthenticated }: Props) => (
  <Wrapper>
    <NavLink to='/' style={{ background: 'transparent' }}>
      <Logo />
    </NavLink>

    {isLoading ? null : isAuthenticated ? (
      <Badge />
    ) : (
      <NavLink to='/authenticate'>
        Sign in
      </NavLink>
    )}
  </Wrapper>
)

const select = state => ({
  isAuthenticated: session.authenticated(state),
  isLoading: session.loading(state)
})

export default connect(select)(Nav)
