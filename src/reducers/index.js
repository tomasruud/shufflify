import { combineReducers } from 'redux'

import session from './session'
import playlists from './playlists'
import tracks from './tracks'

const root = combineReducers({
  session,
  playlists,
  tracks
})

export default root