import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import root from './reducers'
import errorHandler from './middleware/error'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose

const enhancers = composeEnhancers(applyMiddleware(errorHandler, thunk))

const store = createStore(root, enhancers)

export default store
