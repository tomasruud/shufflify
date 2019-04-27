import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import VisiblePlaylists from '../containers/VisiblePlaylists'
import Title from './Title'
import Filter from './Filter'
import Paragraph from './Paragraph'

const Playlists = ({
  isLoaded,
  isLoading,
  loadPlaylists,
  updateSearch,
  search
}) => {
  useLayoutEffect(() => {
    if (!isLoaded) {
      loadPlaylists()
    }
  }, [isLoaded, loadPlaylists])

  return (
    <React.Fragment>
      <Title>Your playlists</Title>

      <Paragraph>Click on a playlists name to load the tracks</Paragraph>

      <Filter
        setFilter={updateSearch}
        value={search}
        placeholder='Search...'
      />

      {isLoading ? (
        <span>Loading..</span>
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
