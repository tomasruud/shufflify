import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { playlistById } from '../playlist/state'
import { loadTracks, tracks, error, loading } from './state'

const List = ({ tracks, playlist, error, loading, loadTracks }) => {
  useLayoutEffect(() => {
    loadTracks()
  }, [])

  let list = <span>No tracks found</span>

  if (tracks && tracks.length > 0) {
    list = (
      <ul>
        {tracks.map((p, i) => (
          <li key={i}>
            {p.name} - {p.artists.join(', ')}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <React.Fragment>
      <h1>{playlist.name}</h1>
      <Link to='/'>Back</Link>
      <br />
      {error && <span>Unable to find your tracks, please try again!</span>}
      {loading ? <span>Loading..</span> : list}
    </React.Fragment>
  )
}

List.propTypes = {
  tracks: PropTypes.array.isRequired,
  playlist: PropTypes.object.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

const mapDispatch = (dispatch, { match }) => ({
  loadTracks: () => dispatch(loadTracks(match.params.id))
})

const mapState = (state, { match }) => ({
  playlist: playlistById(state, match.params.id),
  tracks: tracks(state),
  error: error(state),
  loading: loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(List)
