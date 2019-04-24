import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import trackType from '../models/track'
import playlistType from '../models/playlist'

const Tracks = ({ tracks, playlist, hasError, isLoading, loadTracks }) => {
  useLayoutEffect(() => {
    loadTracks()
  }, [])

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
      <h1>{playlist.name}</h1>
      <Link to='/'>Back</Link>
      <br />
      {hasError && <span>Unable to find your tracks, please try again!</span>}
      {isLoading ? <span>Loading..</span> : list}
    </React.Fragment>
  )
}

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(trackType).isRequired,
  playlist: playlistType.isRequired,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

export default Tracks
