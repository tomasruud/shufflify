import { createSelector } from 'reselect'
import { userID } from './session'

export const playlists = state => Object.values(state.entities.playlists.byURI)

export const loading = state => state.entities.playlists.loading

export const loaded = state => playlists(state).length > 0

export const byURI = (state, uri) => state.entities.playlists.byURI[uri]

export const search = state => state.entities.playlists.search

export const visiblePlaylists = createSelector(
  [search, playlists, userID],
  (search, playlists, userID) => {
    search = search.toLowerCase()

    playlists = playlists.filter(
      p => !search || (p.name && p.name.toLowerCase().includes(search))
    )

    return playlists.filter(p => p.ownerId === userID)
  }
)
