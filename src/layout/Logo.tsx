import React, { useMemo } from 'react'
import styled, { DefaultTheme, withTheme } from 'styled-components'

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
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.h1};
  color: ${p => p.theme.colors.black};

  display: flex;

  align-items: center;
`

const Logo = ({ theme }: { theme: DefaultTheme }) => {
  const colors = useMemo(
    () =>
      (Object.keys(theme.colors) as Array<keyof typeof theme.colors>)
        .sort(() => 0.5 - Math.random())
        .map(c => theme.colors[c]),
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