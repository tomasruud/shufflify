import { State } from './reducer'
import { Track } from './models'

export const byTrackURI = (state: State, uri: string): Track => {
  return state.byURI[uri]
}

export const byPlaylistURI = (
  state: State,
  playlistURI: string
): Array<Track> | null => {
  if (!state.byPlaylistURI[playlistURI]) {
    return null
  }

  return state.byPlaylistURI[playlistURI].map(uri => byTrackURI(state, uri))
}

export const TrackURIByID = (state: State, id: string): string => {
  return state.URIbyID[id]
}

export const byTrackID = (state: State, id: string): Track => {
  return byTrackURI(state, TrackURIByID(state, id))
}

export const loading = (state: State): boolean => state.loading
