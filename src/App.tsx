import React from 'react'
import { ThemeProvider } from 'styled-components'
import Router from './Router'
import { Layout } from './layout'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Router />
    </Layout>
  </ThemeProvider>
)

export default App
