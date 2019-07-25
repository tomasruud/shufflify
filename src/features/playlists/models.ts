import { ID, URI } from '../../models'

export interface Playlist {
  uri: URI,
  id: ID,
  ownerID: ID,
  name: string,
  href: string,
  image?: string,
  tracks: Array<URI>
}