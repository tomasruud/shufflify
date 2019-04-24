import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import Logo from './Logo'
import Link from './Link'

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
    <NavLink to='/' style={{ textDecoration: 'none' }}>
      <Logo />
    </NavLink>

    {isLoading ? (
      <Skeleton width={80} />
    ) : isAuthenticated ? null : (
      <Link as='button' onClick={() => authenticate()}>
        Sign in
      </Link>
    )}
  </Wrapper>
)

Nav.propTypes = {}

export default Nav
