import React from 'react'
import Content from './Content'
import Paragraph from './Paragraph'
import Title from './Title'

const Privacy = () => (
  <Content>
    <Title>Privacy</Title>

    <Paragraph>Shufflify does not store any of your data anywhere.</Paragraph>

    <Paragraph>
      When you authenticate with Spotify, you receive a unique code that is only
      stored in your browser as long as you are using the app. Once you refresh
      the page, your code is no longer stored, and you will have to authenticate
      again.
    </Paragraph>
  </Content>
)

export default Privacy
