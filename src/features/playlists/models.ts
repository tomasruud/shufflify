export interface Playlist {
  uri: string,
  id: string,
  ownerID: string,
  name: string,
  href: string,
  image?: string
}

export interface ByURIMap {
  [uri: string]: Playlist
}
