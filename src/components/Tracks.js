import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import trackType from '../models/track'
import playlistType from '../models/playlist'
import Link from '../containers/Link'
import { routes } from '../actions/router'
import Title from './Title'

const Tracks = ({ tracks, playlist, playlistID, isLoading, loadTracks }) => {
  useLayoutEffect(() => {
    loadTracks(playlistID)
  }, [loadTracks, playlistID])

  let list = <span>No tracks found</span>

  if (tracks && tracks.length > 0) {
    list = (
      <React.Fragment>
        <ul>
          {tracks.map((p, i) => (
            <li key={i}>
              {p.name} - {p.artists.join(', ')}
            </li>
          ))}
        </ul>
        <Button>Shuffle</Button>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Title>{playlist.name}</Title>
      <Link to={routes.PLAYLISTS}>Back</Link>
      <br />
      {isLoading ? <span>Loading..</span> : list}
    </React.Fragment>
  )
}

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(trackType).isRequired,
  playlist: playlistType.isRequired,
  isLoading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

export default Tracks
