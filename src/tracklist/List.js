import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  fetchComplete,
  findTracks,
  getTracks,
  hasFailed,
  isLoading
} from './state'
import { getPlaylistById } from '../playlist/state'

const List = ({ tracks, playlist, done, failed, loading, fetchTracks }) => {
  useEffect(() => {
    if (!done && !loading && !failed) {
      fetchTracks()
    }
  })

  let list = <span>No tracks found</span>
  let title = playlist.name

  if (tracks && tracks.length > 0) {
    list = (
      <ul>
        {tracks.map((p, i) => (
          <li key={i}>{p.name} - {p.artists.join(', ')}</li>
        ))}
      </ul>
    )

    title = title + ' (' + tracks.length + ')'
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      {loading && <span>Finding your tracks..</span>}
      {failed && <span>Unable to find your tracks, please try again!</span>}
      {!loading && list}
    </React.Fragment>
  )
}

const mapDispatch = (dispatch, { match }) => ({
  fetchTracks: () => dispatch(findTracks(match.params.id))
})

const mapState = (state, { match }) => ({
  playlist: getPlaylistById(state, match.params.id),
  tracks: getTracks(state),
  done: fetchComplete(state),
  failed: hasFailed(state),
  loading: isLoading(state)
})

export default connect(
  mapState,
  mapDispatch
)(List)
