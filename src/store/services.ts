import { playlists, session, trackMeta, tracks } from '../features'

export type Services =
  | playlists.services.PlaylistService
  | session.services.SessionService
  | trackMeta.services.TrackMetaService
  | tracks.services.TrackService
