import React from 'react'
import styled from 'styled-components'
import Logo from './ui/Logo'

const Wrap = styled.div`
  background-color: ${p => p.theme.white};
  ${p => p.theme.shadow};
`

const Inner = styled.div`
  max-width: 900px;

  margin: 0 auto;
  padding: 2rem;
`

const Content = styled.main`
  margin: 4rem 0;
`

const Header = styled.header`
  margin-bottom: 2rem;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <Wrap>
      <Inner>
        <Header>
          <Logo />
        </Header>

        <Content>{children}</Content>
      </Inner>
    </Wrap>

    <Inner as='footer'/>
  </React.Fragment>
)

export default Layout
