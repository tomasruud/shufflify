import { State } from '../../reducers'
import { ID, Track, URI } from '../../common'

export const byURI = (state: State, uri: URI): ?Track => {
  if (!state.tracks.byURI) {
    return undefined
  }

  return state.tracks.byURI[uri]
}

export const byPlaylistURI = (
  state: State,
  playlistURI: URI
): ?Array<?Track> => {
  const list = playlistByURI(state, playlistURI)

  if (list == null) {
    throw Error('List not found')
  }

  if (list.tracks == null) {
    return undefined
  }

  return list.tracks.map(uri => byURI(state, uri))
}

export const URIbyID = (state: State, id: ID): ?string => {
  if (state.tracks.URIbyID == null) {
    return undefined
  }

  return state.tracks.URIbyID[id]
}

export const byID = (state: State, id: ID): ?Track => {
  const uri = URIbyID(state, id)

  if (uri == null) {
    return undefined
  }

  return byURI(state, uri)
}

export const loading = (state: State): boolean => state.tracks.loading
