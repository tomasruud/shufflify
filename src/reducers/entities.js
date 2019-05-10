import { combineReducers } from 'redux'
import tracks from './tracks'
import playlists from './playlists'
import trackFeatures from './trackFeatures'

export default combineReducers({
  tracks,
  playlists,
  trackFeatures
})