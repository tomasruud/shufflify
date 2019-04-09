import React from 'react'
import { ContentLimiter, Heading1, Paragraph } from '../components'

const Privacy = () => (
  <ContentLimiter>
    <Heading1>Privacy</Heading1>

    <Paragraph>
      Shufflify does not store any of your data anywhere.
    </Paragraph>

    <Paragraph>
      When you authenticate with Spotify, you receive a unique code that is only stored in your browser as long as you are using the app. Once you refresh the page, your code is no longer stored, and you will have to authenticate again.
    </Paragraph>
  </ContentLimiter>
)

export default Privacy
