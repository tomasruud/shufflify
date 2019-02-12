import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchComplete,
  findPlaylists,
  getSearch,
  getVisiblePlaylists,
  hasFailed,
  isLoading,
  setSearch
} from './state'

const List = ({
  playlists,
  done,
  failed,
  loading,
  fetchPlaylists,
  setSearch,
  search
}) => {
  useEffect(() => {
    if (!done && !loading && !failed) {
      fetchPlaylists()
    }
  })

  let list = <span>No playlists found</span>
  let title = 'Your playlists'

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

    title = title + ' (' + playlists.length + ')'
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      {loading && <span>Finding your playlists..</span>}
      {failed && <span>Unable to find your playlists, please try again!</span>}
      {!loading && (
        <React.Fragment>
          <input
            type='text'
            placeholder='Filter'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {list}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapDispatch = dispatch => ({
  fetchPlaylists: () => dispatch(findPlaylists()),
  setSearch: search => dispatch(setSearch(search))
})

const mapState = state => ({
  playlists: getVisiblePlaylists(state),
  done: fetchComplete(state),
  failed: hasFailed(state),
  loading: isLoading(state),
  search: getSearch(state)
})

export default connect(
  mapState,
  mapDispatch
)(List)
