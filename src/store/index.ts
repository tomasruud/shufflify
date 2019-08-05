import { applyMiddleware, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { Actions } from './actions'
import root from './reducer'
import errorHandler from './error'
import { Services } from './services'

export type State = ReturnType<typeof root>
export type Actions = Actions

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
