import { createSelector } from 'reselect'
import { userID } from './session'
import { filters } from '../actions/playlists'

export const playlists = state => state.playlists.items

export const loading = state => state.playlists.loading

export const loaded = state => state.playlists.loaded

export const playlistById = (state, id) =>
  playlists(state).find(p => p.id === id)

export const filter = state => state.playlists.filter

export const search = state => state.playlists.search

export const visiblePlaylists = createSelector(
  [filter, search, playlists, userID],
  (filter, search, playlists, userID) => {
    search = search.toLowerCase()

    playlists = playlists.filter(
      p => !search || (p.name && p.name.toLowerCase().includes(search))
    )

    switch (filter) {
      case filters.MINE:
        return playlists.filter(p => p.ownerId === userID)

      default:
        return playlists
    }
  }
)
