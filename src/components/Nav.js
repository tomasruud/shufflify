import React from 'react'
import styled from 'styled-components'

import { Link as NavLink, UserBadge } from '../containers'

import Logo from './Logo'
import Link from './Link'

const Wrapper = styled.header`
  color: ${p => p.theme.gray};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

const Nav = ({ isLoading, isAuthenticated, authenticate }) => (
  <Wrapper>
    <NavLink to='' style={{ background: 'transparent' }}>
      <Logo />
    </NavLink>

    {isLoading ? null : isAuthenticated ? (
      <UserBadge />
    ) : (
      <Link as='button' onClick={() => authenticate()}>
        Sign in
      </Link>
    )}
  </Wrapper>
)

Nav.propTypes = {}

export default Nav
