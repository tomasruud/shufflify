import { Track } from './models'

export interface TrackService {
  getTracks(id: string): Promise<Array<Track>>
}