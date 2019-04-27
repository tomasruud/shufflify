import React from 'react'
import styled from 'styled-components'
import { small } from './Theme'
import Container from './Wrapper'
import Footer from '../containers/Footer'
import Nav from '../containers/Nav'
import Theme from './Theme'
import Router from '../containers/Router'
import Notice from '../containers/Notice'

const Wrapper = styled.div`
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
