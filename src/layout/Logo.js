// @flow
import React, { useMemo } from 'react'
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

type Props = {
  theme: {
    palette: Object
  }
}

const Logo = ({ theme }: Props) => {
  const colors = useMemo(
    () =>
      Object.keys(theme.palette)
        .sort(() => 0.5 - Math.random())
        .map(c => theme.palette[c]),
    [theme]
  )

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

export default withTheme(Logo)
