import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import auth from './auth/state'
import playlists from './playlist/state'
import tracks from './tracklist/state'

const app = combineReducers({
  auth,
  playlists,
  tracks
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(app, composeEnhancers(applyMiddleware(thunk)))

export default store
