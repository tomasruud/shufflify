// @flow
import React from 'react'
import styled from 'styled-components'

import { Link, Paragraph, Wrapper } from '../common'

const Wrap = styled(Wrapper).attrs({ as: 'footer' })`
  color: ${p => p.theme.grayLight};
  font-size: ${p => p.theme.font.small};

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: flex-start;
`

const Footer = () => (
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
    </div>

    <div>
      <Paragraph>
        <Link href='https://github.com/tomasruud/shufflify/issues' external>
          Report issues
        </Link>
        <br />
        Version {process.env.REACT_APP_VERSION}
      </Paragraph>
    </div>
  </Wrap>
)

export default Footer
