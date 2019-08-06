import { playlists, session } from '../features'

export type Services =
  | playlists.services.PlaylistService
  | session.services.SessionService
