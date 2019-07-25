import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

import 'typeface-karla'
import 'typeface-rubik'

const Global = createGlobalStyle`
  html {
    font-size: 140%;
  }
  
  body {
    background-color: ${p => p.theme.grays.gray60};
    
    font-family: ${p => p.theme.fonts.primary};
    line-height: 1.35;
    
    overflow-y: scroll;
  }
  
  ::selection {
    background-color: ${p => p.theme.grays.gray60};
    color: ${p => p.theme.colors.white};
  }
`

const GlobalStyle = () => (
  <React.Fragment>
    <Reset />
    <Global />
  </React.Fragment>
)

export default GlobalStyle