import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import playlistType from '../models/playlist'
import Link from '../containers/Link'
import routes from '../constants/routes'
import Title from './Title'
import VisibleTracks from '../containers/VisibleTracks'
import Loader from './Loader'

const Tracks = ({ playlist, isLoading, loadTracks }) => {
  useLayoutEffect(() => {
    if (!playlist.tracks) {
      loadTracks(playlist.uri)
    }
  }, [loadTracks, playlist])

  return (
    <React.Fragment>
      <Title>{playlist.name}</Title>
      <Link to={routes.PLAYLISTS}>Back</Link>
      <br />
      {isLoading ? <Loader /> : <VisibleTracks />}
    </React.Fragment>
  )
}

Tracks.propTypes = {
  playlist: playlistType.isRequired,
  isLoading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

export default Tracks
