// @flow
import React from 'react'

import Router from './Router'
import Theme from './Theme'
import { Layout } from './layout'

const App = () => (
  <Theme>
    <Layout>
      <Router />
    </Layout>
  </Theme>
)

export default App
