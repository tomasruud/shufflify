import React from 'react'
import styled from 'styled-components'
import { Link as NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import info from '../package.json'
import { hasToken, loading } from './views/Login/state'
import { small } from './Theme'

import { Link, Logo, Paragraph } from './components'

const Inner = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 2rem;
  
  ${small`
    padding: 1rem;
  `}
`

const Footer = styled(Inner).attrs({ as: 'footer' })`
  color: ${p => p.theme.grayLight};
  font-size: ${p => p.theme.font.small};

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: flex-start;
`

const Header = styled.header`
  color: ${p => p.theme.gray};

  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

const Wrap = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Content = styled.main`
  margin: 4rem 0;

  color: ${p => p.theme.gray};

  ${small`
    margin: 3rem 0;
  `}
`

const Layout = ({ children, hasToken, loading }) => {
  return (
    <React.Fragment>
      <Wrap>
        <Inner>
          <Header>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
              <Logo/>
            </NavLink>

            {loading ? (
              <Skeleton width={80} />
            ) : hasToken ? (
              null
            ) : (
              <span>
                <Link as={NavLink} to='/auth'>Sign in</Link>
              </span>
            )}
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
            <br/>
            <Link href='https://github.com/tomasruud' external>
              @tomasruud
            </Link>{' '}
            on GitHub
          </Paragraph>

          <Link as={NavLink} to='/privacy'>
            Privacy
          </Link>
        </div>

        <div>
          <Paragraph>
            <Link href='https://github.com/tomasruud/shufflify/issues' external>
              Report issues
            </Link>
            <br/>
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

export default withRouter(connect(mapState)(Layout))
