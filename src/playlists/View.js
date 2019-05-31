// @flow
import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import type { Playlist } from '../common'

import { playlists as playlistActions } from '../actions'
import { playlists } from '../selectors'
import { Loader, Paragraph, Title } from '../common'
import Filter from './Filter'
import List from './List'

type Props = {
  isLoading: boolean,
  loadPlaylists: () => void,
  updateSearch: (filter: string) => void,
  search: string,
  playlists: ?Array<Playlist>
}

const View = ({ isLoading, loadPlaylists, updateSearch, search }: Props) => {
  useLayoutEffect(() => {
    loadPlaylists()
  }, [loadPlaylists])

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

const select = state => ({
  isLoading: playlists.loading(state),
  search: playlists.search(state)
})

const actions = dispatch => ({
  loadPlaylists: () => dispatch(playlistActions.loadIfNeeded()),
  updateSearch: search => dispatch(playlistActions.setSearch(search))
})

export default connect(
  select,
  actions
)(View)
