import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from '@wessberg/color'

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

  background: colors.purple,

  secondary: colors.yellow,
  white: colors.white,
  black: colors.black,

  palette: colors,

  font: {
    primary: '"Karla", sans-serif',
    secondary: '"Rubik", sans-serif',

    bold: 700,

    root: '16px',
    regular: '1rem',
    large: '1.2rem'
  },

  shadow: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)'
}

const Global = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700|Rubik:700');
  
  body {
    background-color: ${p => p.theme.background};
  }
  
  ::selection {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.primaryContrast};
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Global />
      {children}
    </React.Fragment>
  </ThemeProvider>
)

export default Theme
