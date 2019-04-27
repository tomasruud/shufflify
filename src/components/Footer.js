import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import NavLink from '../containers/Link'
import Paragraph from './Paragraph'
import Container from './Wrapper'
import { routes } from '../actions/router'

const Wrap = styled(Container).attrs({ as: 'footer' })`
  color: ${p => p.theme.grayLight};
  font-size: ${p => p.theme.font.small};

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: flex-start;
`

const Footer = ({ version }) => (
  <Wrap>
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

      <NavLink to={routes.PRIVACY}>Privacy</NavLink>
    </div>

    <div>
      <Paragraph>
        <Link href='https://github.com/tomasruud/shufflify/issues' external>
          Report issues
        </Link>
        <br />
        Version {version}
      </Paragraph>
    </div>
  </Wrap>
)

Footer.propTypes = {
  version: PropTypes.string.isRequired
}

export default Footer
