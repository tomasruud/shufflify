import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import root from './reducers'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false
    })
    : compose

const store = createStore(root, composeEnhancers(applyMiddleware(thunk)))

export default store
