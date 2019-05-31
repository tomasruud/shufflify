// @flow
import { combineReducers } from 'redux'

import type { State as MessageState } from './message'
import type { State as PlaylistsState } from './playlists'
import type { State as RouterState } from './router'
import type { State as SessionState } from './session'
import type { State as TrackFeaturesState } from './trackFeatures'
import type { State as TrackState } from './tracks'

import message from './message'
import playlists from './playlists'
import router from './router'
import session from './session'
import trackFeatures from './trackFeatures'
import tracks from './tracks'

const root = combineReducers({
  message,
  playlists,
  router,
  session,
  trackFeatures,
  tracks
})

export default root

export type State = {
  message: MessageState,
  playlists: PlaylistsState,
  router: RouterState,
  session: SessionState,
  trackFeatures: TrackFeaturesState,
  tracks: TrackState
}
