// @flow
import type { URI } from './uri'
import type { ID } from './id'

export type Playlist = {
  uri: URI,
  id: ID,
  ownerID: ID,
  name: string,
  href: string,
  image: ?string,
  tracks: Array<string>
}