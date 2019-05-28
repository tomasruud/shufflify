import React from 'react'
import styled from 'styled-components'

import { Nav, Notice, Router, Footer } from '../containers'

import Container from './Wrapper'
import Theme from './Theme'

const Wrapper = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Content = styled.main`
  margin: 3rem 0;

  color: ${p => p.theme.gray};
`

const App = () => (
  <Theme>
    <Wrapper>
      <Container>
        <Nav />
        <Content>
          <Notice style={{ marginBottom: '1rem' }} />
          <Router />
        </Content>
      </Container>
    </Wrapper>
    <Footer />
  </Theme>
)

export default App
