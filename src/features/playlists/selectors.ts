import { createSelector } from 'reselect'
import { State } from './reducer'
import { Playlist } from './models'
import { URI } from '../../models'

export const all = (state: State): Array<Playlist> | null => {
  if (state.byURI == null) {
    return null
  }

  return Object.values(state.byURI)
}

export const loading = (state: State) => state.loading

export const loaded = (state: State) => all(state) != null

export const byURI = (state: State, uri: URI): Playlist | null => {
  if (state.byURI == null) {
    return null
  }

  return state.byURI[uri]
}

export const search = (state: State) => state.search

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
