import { message, router, session, playlists } from '../features'

export type Actions =
  | message.actions.Action
  | router.actions.Action
  | session.actions.Action
  | playlists.actions.Action
