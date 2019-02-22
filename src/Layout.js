import React from 'react'
import styled from 'styled-components'
import { Link as NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import info from '../package.json'
import { hasToken, loading } from './auth/state'
import { clearState } from './store'
import { redirectToLogin } from './auth/business'

import Logo from './ui/Logo'
import Paragraph from './ui/Paragraph'
import Link from './ui/Link'

const Wrap = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Inner = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 2rem;
`

const Content = styled.main`
  margin: 4rem 0;

  color: ${p => p.theme.gray};
`

const Header = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

const Navbar = styled.ul`
  color: ${p => p.theme.gray};
`

const NavItem = styled.li`
  display: inline-block;

  :not(:last-child) {
    margin-right: 1.5rem;
  }
`

const Footer = styled(Inner).attrs({ as: 'footer' })`
  color: ${p => p.theme.grayLight};
  font-size: ${p => p.theme.font.small};

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: flex-start;
`

const Layout = ({ children, hasToken, onLogOutClick, onLoginClick, loading }) => (
  <React.Fragment>
    <Wrap>
      <Inner>
        <Header>
          <NavLink to='/' style={{ textDecoration: 'none' }}>
            <Logo />
          </NavLink>

          <Navbar>
            <NavItem>
              <Link as={NavLink} to='/privacy'>
                Privacy
              </Link>
            </NavItem>

            <NavItem>
              <Link as={NavLink} to='/faq'>
                FAQ
              </Link>
            </NavItem>

            <NavItem>
              {loading ? (
                <Skeleton width={80} />
              ) : hasToken ? (
                <Link onClick={onLogOutClick}>Sign out</Link>
              ) : (
                <Link onClick={onLoginClick}>Sign in</Link>
              )}
            </NavItem>
          </Navbar>
        </Header>

        <Content>{children}</Content>
      </Inner>
    </Wrap>

    <Footer>
      <div>
        <Paragraph>Shufflify by Tomas ❤</Paragraph>

        <Paragraph>
          <Link href='https://open.spotify.com/user/myspotfiy' external>
            @myspotfiy
          </Link>{' '}
          on Spotify
          <br />
          <Link href='https://github.com/tomasruud' external>
            @tomasruud
          </Link>{' '}
          on GitHub
        </Paragraph>
      </div>

      <div>
        <Paragraph>
          <Link href='https://github.com/tomasruud/shufflify/issues' external>
            Report issues
          </Link>
          <br />
          Version {info.version}
        </Paragraph>
      </div>
    </Footer>
  </React.Fragment>
)

const mapState = state => ({
  hasToken: hasToken(state),
  loading: loading(state)
})

const mapDispatch = dispatch => ({
  onLogOutClick: () => dispatch(clearState),
  onLoginClick: () => redirectToLogin()
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Layout)
)
