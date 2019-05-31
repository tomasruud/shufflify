// @flow
import React from 'react'
import styled from 'styled-components'

import { Nav, Notice, Footer } from './layout'
import { Wrapper as Container, Theme } from './common'
import Router from './Router'

const Wrapper = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Content = styled.main`
  margin: 3rem 0;

  color: ${p => p.theme.gray};

  ${p => p.theme.animations.show};
  animation-delay: 500ms;
  opacity: 0;
  transform: translateY(-20px);
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
