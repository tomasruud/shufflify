import { combineReducers } from 'redux'
import { message, playlists, router, session } from '../features'

const root = combineReducers({
  message: message.reducer,
  playlists: playlists.reducer,
  router: router.reducer,
  session: session.reducer
})

export default root