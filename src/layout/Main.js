import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import info from '../../package.json'
import { hasToken, loading } from '../auth/state'
import { clearState } from '../store'
import { redirectToLogin } from '../auth/business'

import { Logo, Paragraph, Link } from '../ui'
import Header from './Header'
import Footer from './Footer'
import Inner from './Inner'
import NavBar from './NavBar'
import NavItem from './NavItem'
import Toggler from './Toggler'

const Wrap = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Content = styled.main`
  margin: 4rem 0;

  color: ${p => p.theme.gray};
`

const Layout = ({
  children,
  hasToken,
  onLogOutClick,
  onLoginClick,
  loading
}) => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <Wrap>
        <Inner>
          <Header>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
              <Logo />
            </NavLink>

            <Toggler onClick={() => setOpen(!open)} />

            <NavBar visible={open}>
              <NavItem>
                <Link as={NavLink} to='/privacy'>
                  Privacy
                </Link>
              </NavItem>

              <NavItem>
                <Link as={NavLink} to='/faq'>
                  About
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
            </NavBar>
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
}

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
