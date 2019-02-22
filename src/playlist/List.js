import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  loadPlaylists,
  search,
  visiblePlaylists,
  error,
  loading,
  updatePlaylistsSearch,
  loaded
} from './state'

const List = ({
  playlists,
  loaded,
  error,
  loading,
  loadPlaylists,
  updateSearch,
  search
}) => {
  useLayoutEffect(() => {
    if (!loaded) {
      loadPlaylists()
    }
  }, [])

  let list = <span>No playlists found</span>

  if (playlists && playlists.length > 0) {
    list = (
      <ul>
        {playlists.map((p, i) => (
          <li key={i}>
            <Link to={'/shuffle/' + p.id}>{p.name}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <React.Fragment>
      <h1>Your playlists</h1>
      {error && <span>Unable to find your playlists, please try again!</span>}
      {loading ? (
        <span>Loading..</span>
      ) : (
        <React.Fragment>
          <input
            type='text'
            placeholder='Filter'
            value={search}
            onChange={e => updateSearch(e.target.value)}
          />
          <button onClick={() => updateSearch('')} disabled={search === ''}>
            X
          </button>
          <br />
          {list}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapDispatch = dispatch => ({
  loadPlaylists: () => dispatch(loadPlaylists()),
  updateSearch: search => dispatch(updatePlaylistsSearch(search))
})

const mapState = state => ({
  loaded: loaded(state),
  playlists: visiblePlaylists(state),
  error: error(state),
  loading: loading(state),
  search: search(state)
})

export default connect(
  mapState,
  mapDispatch
)(List)
