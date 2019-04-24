import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { small } from './Theme'
import Container from './Container'
import Footer from '../containers/Footer'
import Nav from '../containers/Nav'

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

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <Nav />
          <Content>{children}</Content>
        </Container>
      </Wrapper>

      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
