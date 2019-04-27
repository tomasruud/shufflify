import { combineReducers } from 'redux'

import session from './session'
import playlists from './playlists'
import tracks from './tracks'
import router from './router'
import message from './message'

const root = combineReducers({
  session,
  playlists,
  tracks,
  router,
  message
})

export default root