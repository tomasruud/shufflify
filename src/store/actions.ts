import {
  message,
  router,
  session,
  playlists,
  trackMeta,
  tracks
} from '../features'

export type Actions =
  | message.actions.Action
  | router.actions.Action
  | session.actions.Action
  | playlists.actions.Action
  | trackMeta.actions.Action
  | tracks.actions.Action
