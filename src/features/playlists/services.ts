import { Playlist } from './models'

export interface PlaylistService {
  getPlaylists(): Promise<Array<Playlist>>
}
