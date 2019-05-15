import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import playlistType from '../models/playlist'
import VisibleTracks from '../containers/VisibleTracks'
import Title from './Title'
import Loader from './Loader'
import ShuffleControls from './ShuffleControls'

const Shuffler = ({ playlist, isLoading, loadTracks }) => {
  useLayoutEffect(() => {
    if (!playlist.tracks) {
      loadTracks(playlist.uri)
    }
  }, [loadTracks, playlist])

  return (
    <React.Fragment>
      <Title>{playlist.name}</Title>
      <ShuffleControls/>
      {isLoading ? <Loader /> : <VisibleTracks />}
    </React.Fragment>
  )
}

Shuffler.propTypes = {
  playlist: playlistType.isRequired,
  isLoading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

export default Shuffler
