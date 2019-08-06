import { TrackMeta } from './models'

export interface TrackMetaService {
  getMetaForTracks(trackIDs: Array<string>): Promise<Array<TrackMeta>>
}
