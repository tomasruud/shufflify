import { Link as NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Paragraph from './Paragraph'
import Container from './Container'

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

      <Link as={NavLink} to='/privacy'>
        Privacy
      </Link>
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
