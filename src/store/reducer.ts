import { combineReducers } from 'redux'
import {
  message,
  playlists,
  router,
  session,
  trackMeta,
  tracks
} from '../features'

const root = combineReducers({
  message: message.reducer,
  playlists: playlists.reducer,
  router: router.reducer,
  session: session.reducer,
  trackMeta: trackMeta.reducer,
  tracks: tracks.reducer
})

export default root
