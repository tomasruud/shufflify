import React from 'react'
import { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { lighten, saturate } from '@wessberg/color'

const colors = {
  purple: '#453246',
  red: '#F86254',
  burgundy: '#B04D5D',
  yellow: '#FFD05B',
  white: '#fcfafc',
  black: '#000'
}

const theme = {
  primary: colors.red,
  primaryContrast: colors.white,
  primaryLight: lighten(colors.red, 20),
  primaryDark: saturate(lighten(colors.red, -10), -30),

  background: colors.purple,

  secondary: colors.red,
  white: colors.white,
  black: colors.black,
  gray: '#4D4646',
  grayLight: '#AF99B0',
  grayLighter: lighten(colors.white, -10),
  grayEvenLighter: saturate(lighten(colors.white, -2), -20),

  palette: colors,

  font: {
    primary: '"Karla", sans-serif',
    secondary: '"Rubik", sans-serif',

    bold: 700,

    small: '.8rem',
    regular: '1rem',
    large: '1.2rem',

    h1: '1.4rem',
    h2: '1.2rem'
  },

  shadow: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)'
}

export const small = (...args) => css`
  @media (max-width: 800px) {
    ${css(...args)}
  }
`

const Global = createGlobalStyle`
  html {
    font-size: 140%;
  }
  
  body {
    background-color: ${p => p.theme.background};
    
    font-family: ${p => p.theme.font.primary};
    line-height: 1.35;
    
    overflow-y: scroll;
  }
  
  ::selection {
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.white};
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Reset />
      <Global />
      {children}
    </React.Fragment>
  </ThemeProvider>
)

Theme.propTypes = {}

export default Theme
