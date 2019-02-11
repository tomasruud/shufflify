import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { findTracks } from './state'

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
          <li key={i}>{p.name}</li>
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
  playlist: state.playlists.items.find(p => p.id === match.params.id),
  tracks: state.tracks.items,
  done: state.tracks.fetched,
  failed: state.tracks.failed,
  loading: state.tracks.isLoading
})

export default connect(
  mapState,
  mapDispatch
)(List)
