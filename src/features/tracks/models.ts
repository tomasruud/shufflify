export type Track = {
  uri: string,
  id?: string,
  name: string,
  artists: Array<string>,
  local: boolean
}

export type URIbyIDMap = {
  [id: string]: string
}

export type ByURIMap = {
  [uri: string]: Track
}

export type ByPlaylistURIMap = {
  [uri: string]: Track
}