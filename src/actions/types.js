// @flow
import type { Playlist, Track, TrackFeatures, URI, User } from '../common'
import type { State } from '../reducers'

export type Action =
  | { type: 'MESSAGE_SET', message: string }
  | { type: 'MESSAGE_CLEAR' }
  | { type: 'ROUTER_NAVIGATE', path: string, params: {} }
  | { type: 'PLAYLISTS_SEARCH_SET', search: string }
  | { type: 'PLAYLISTS_LOAD_REQUEST' }
  | { type: 'PLAYLISTS_LOAD_SUCCESS', items: Array<Playlist> }
  | { type: 'SESSION_BOOTSTRAP_COMPLETE', token: ?string, user: ?User }
  | { type: 'TRACKS_LOAD_REQUEST' }
  | { type: 'TRACKS_LOAD_SUCCESS', playlistURI: URI, tracks: Array<Track> }
  | { type: 'TRACKFEATURES_LOAD_REQUEST' }
  | { type: 'TRACKFEATURES_LOAD_SUCCESS', features: Array<TrackFeatures> }

export type GetState = () => State
export type PromiseAction = Promise<Action>
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
