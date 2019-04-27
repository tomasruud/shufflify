import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLink from '../containers/Link'
import Link from './Link'
import UserBadge from '../containers/UserBadge'

const Wrapper = styled.header`
  color: ${p => p.theme.gray};

  margin-bottom: 2rem;

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

    {isLoading ? (
      null
    ) : isAuthenticated ? (
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
