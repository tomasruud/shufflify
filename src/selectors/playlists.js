// @flow
import { createSelector } from 'reselect'
import type { Playlist, URI, User } from '../common'
import type { State } from '../reducers'

import { user } from './session'

export const all = (state: State): ?Array<Playlist> => {
  if (state.playlists.byURI == null) {
    return undefined
  }

  return ((Object.values(state.playlists.byURI): any): Array<Playlist>)
}

export const loading = (state: State): boolean => state.playlists.loading

export const loaded = (state: State): boolean => all(state) != null

export const byURI = (state: State, uri: URI): ?Playlist => {
  if (state.playlists.byURI == null) {
    return undefined
  }

  return state.playlists.byURI[uri]
}

export const search = (state: State): string => state.playlists.search

export const filtered = createSelector(
  search,
  all,
  user,
  loaded,
  (
    search: string,
    all: ?Array<Playlist>,
    user: User,
    loaded: boolean
  ): Array<Playlist> => {
    if (!loaded || all == null) {
      return []
    }

    search = search.toLowerCase()

    return all
      .filter(p => !search || (p.name && p.name.toLowerCase().includes(search)))
      .filter(p => p.ownerID === user.id)
  }
)
