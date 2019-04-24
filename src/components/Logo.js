import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Box = styled.span`
  width: 100%;
  height: 100%;

  display: block;

  background-color: ${p => p.color};
`

const BoxWrap = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  margin-right: 0.5rem;

  display: grid;

  grid-template-columns: 1fr 1fr;
`

const Wrap = styled.span`
  font-family: ${p => p.theme.font.primary};
  font-weight: ${p => p.theme.font.bold};
  font-size: ${p => p.theme.font.h1};
  color: ${p => p.theme.black};

  display: flex;

  align-items: center;
`

const Logo = ({ theme }) => {
  const colors = Object.keys(theme.palette)
    .sort(() => 0.5 - Math.random())
    .map(c => theme.palette[c])

  return (
    <Wrap>
      <BoxWrap>
        <Box color={colors[0]} />
        <Box color={colors[1]} />
        <Box color={colors[2]} />
        <Box color={colors[3]} />
      </BoxWrap>
      Shufflify
    </Wrap>
  )
}

Logo.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.object
  }).isRequired
}

export default withTheme(Logo)
