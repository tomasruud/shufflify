import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import auth from './auth/state'
import playlists from './playlist/state'
import tracks from './tracklist/state'

const CLEAR_STATE = 'CLEAR_STATE'

export const clearState = {
  type: CLEAR_STATE
}

const app = combineReducers({
  auth,
  playlists,
  tracks
})

const reducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    state = undefined
  }

  return app(state, action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
