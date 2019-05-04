import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import VisiblePlaylists from '../containers/VisiblePlaylists'
import Title from './Title'
import Filter from './Filter'
import Paragraph from './Paragraph'
import Loader from './Loader'

const Playlists = ({ isLoading, loadPlaylists, updateSearch, search }) => {
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
        placeholder='Search...'
      />

      {isLoading ? (
        <Loader />
      ) : (
        <VisiblePlaylists style={{ marginTop: '1rem' }} />
      )}
    </React.Fragment>
  )
}

Playlists.propTypes = {
  isLoading: PropTypes.bool
}

export default Playlists
