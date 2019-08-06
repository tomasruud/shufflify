import { applyMiddleware, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { Actions } from './actions'
import { Services } from './services'
import root from './reducer'
import errorHandler from './error'

export type State = ReturnType<typeof root>
export type Actions = Actions
export type Services = Services

const composeEnhancers = composeWithDevTools({ shouldHotReload: false })

const configureStore = () => {
  const mw = [
    errorHandler,
    thunk.withExtraArgument({}) as ThunkMiddleware<State, Actions, Services>
  ]

  const enhancer = applyMiddleware(...mw)

  return createStore(root, composeEnhancers(enhancer))
}

export default configureStore
