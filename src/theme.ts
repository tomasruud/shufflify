import { css, DefaultTheme, Keyframes, keyframes } from 'styled-components'
import { lighten, saturate } from '@wessberg/color'

const colors = {
  purple: '#453246',
  red: '#F86254',
  burgundy: '#B04D5D',
  yellow: '#FFD05B',
  white: '#fcfafc',
  black: '#000'
}

const grays = {
  gray30: '#4D4646',
  gray40: '#AF99B0',
  gray50: lighten(colors.white, -10),
  gray60: saturate(lighten(colors.white, -2), -20)
}

const secondaryColors = {
  red20: lighten(colors.red, 20),
  red60: saturate(lighten(colors.red, -10), -30)
}

const fonts = {
  primary: '"Karla", sans-serif',
  secondary: '"Rubik", sans-serif'
}

const fontSizes = {
  small: '.8rem',
  regular: '1rem',
  large: '1.2rem',

  h1: '1.4rem',
  h2: '1.2rem'
}

const fontWeights = {
  bold: 700
}

const animations = {
  show: keyframes`
    to {
      opacity: 1;
      transform: none;
    }`
}

const defaultAnimations = {
  show: css`
    animation: ${animations.show} 400ms ease-out forwards;
  `
}

const shadows = {
  main: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)'
}

const queries = {
  small: (first: any, ...interpolations: any[]) => css`
    @media (max-width: 800px) {
      ${css(first, ...interpolations)}
    }
  `
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string }
    grays: { [key in keyof typeof grays]: string }
    secondaryColors: { [key in keyof typeof secondaryColors]: string }

    fonts: { [key in keyof typeof fonts]: string }
    fontSizes: { [key in keyof typeof fontSizes]: string }
    fontWeights: { [key in keyof typeof fontWeights]: number }

    shadows: { [key in keyof typeof shadows]: string }

    animations: { [key in keyof typeof animations]: Keyframes }
    defaultAnimations: {
      [key in keyof typeof animations]: any
    }

    queries: { [key in keyof typeof queries]: (...args: any) => any }
  }
}

const theme: DefaultTheme = {
  colors,
  grays,
  secondaryColors,
  fonts,
  fontSizes,
  fontWeights,
  shadows,
  animations,
  defaultAnimations,
  queries
}

export default theme
