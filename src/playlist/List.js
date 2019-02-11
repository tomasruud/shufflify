import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { findPlaylists } from './state'

const List = ({ playlists, done, failed, loading, fetchPlaylists }) => {
  useEffect(() => {
    if (!done && !loading && !failed) {
      fetchPlaylists()
    }
  })

  let list = <span>No playlists found</span>
  let title = 'Your playlists'

  if (playlists && playlists.length > 0) {
    list = (
      <ul>{playlists && playlists.map((p, i) => <li key={i}>{p.name}</li>)}</ul>
    )

    title = title + ' (' + playlists.length + ')'
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      {loading && <span>Finding your playlists..</span>}
      {failed && <span>Unable to find your playlists, please try again!</span>}
      {!loading && list}
    </React.Fragment>
  )
}

const mapDispatch = dispatch => ({
  fetchPlaylists: () => dispatch(findPlaylists())
})

const mapState = state => ({
  playlists: state.playlists.items,
  done: state.playlists.fetched,
  failed: state.playlists.failed,
  loading: state.playlists.isLoading
})

export default connect(
  mapState,
  mapDispatch
)(List)
