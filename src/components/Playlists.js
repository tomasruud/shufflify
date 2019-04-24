import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import playlistType from '../models/playlist'

const Playlists = ({
  playlists,
  isLoaded,
  hasError,
  isLoading,
  loadPlaylists,
  updateSearch,
  search
}) => {
  useLayoutEffect(() => {
    if (!isLoaded) {
      loadPlaylists()
    }
  }, [])

  let list = <span>No playlists found</span>

  if (playlists && playlists.length > 0) {
    list = (
      <ul>
        {playlists.map((p, i) => (
          <li key={i}>
            <Link to={'/playlists/' + p.id}>{p.name}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <React.Fragment>
      <h1>Your playlists</h1>
      {hasError && <span>Unable to find your playlists, please try again!</span>}
      {isLoading ? (
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

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(playlistType).isRequired
}

export default Playlists
