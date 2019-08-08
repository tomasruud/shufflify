import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import { Loader, Paragraph, Title } from '../common'
import Filter from './Filter'
import List from './List'
import { State } from '../store'
import { playlists } from '../features'

type Props = {
  isLoading: boolean
  loadPlaylists: () => void
  updateSearch: (filter: string) => void
  search: string
  playlists: Array<playlists.models.Playlist>
  needsLoading: boolean
}

const View = ({
  isLoading,
  loadPlaylists,
  updateSearch,
  search,
  needsLoading
}: Props) => {
  useLayoutEffect(() => {
    if (needsLoading) {
      loadPlaylists()
    }
  }, [loadPlaylists, needsLoading])

  return (
    <>
      <Title>Select playlist to shuffle</Title>

      <Paragraph>
        Click on the name of a playlist to enter shuffle-mode.
      </Paragraph>

      <Filter
        setFilter={updateSearch}
        filter={search}
        placeholder='Search by name'
      />

      {isLoading ? (
        <Loader style={{ marginTop: '1rem' }} />
      ) : (
        <List style={{ marginTop: '1rem' }} />
      )}
    </>
  )
}

const select = (state: State) => ({
  isLoading: playlists.selectors.loading(state.playlists),
  search: playlists.selectors.search(state.playlists),
  needsLoading: !playlists.selectors.loaded(state.playlists)
})

const actions = {
  loadPlaylists: playlists.actions.load,
  updateSearch: playlists.actions.setSearch
}

export default connect(
  select,
  actions
)(View)
