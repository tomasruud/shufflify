// @flow
import React from 'react'
import styled from 'styled-components'

import Container from './Wrapper'
import Nav from './Nav'
import Notice from './Notice'
import Footer from './Footer'

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

const Layout = ({ children }: any) => (
  <React.Fragment>
    <Wrapper>
      <Container>
        <Nav />
        <Content>
          <Notice style={{ marginBottom: '1rem' }} />
          {children}
        </Content>
      </Container>
    </Wrapper>
    <Footer />
  </React.Fragment>
)

export default Layout
