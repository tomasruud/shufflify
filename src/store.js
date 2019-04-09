import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import auth from './views/Login/state'
import playlists from './views/Playlists/state'
import tracks from './views/Tracks/state'

const app = combineReducers({
  auth,
  playlists,
  tracks
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(app, composeEnhancers(applyMiddleware(thunk)))

export default store
