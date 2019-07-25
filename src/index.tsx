import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './App'

const store = configureStore()

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

render(<Root />, document.getElementById('shufflify'))

if (module.hot) {
  module.hot.accept()
}
