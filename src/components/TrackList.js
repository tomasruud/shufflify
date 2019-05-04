import React from 'react'
import PropTypes from 'prop-types'
import track from '../models/track'

const TrackList = ({tracks}) => (
  <ul>
    {!!tracks && tracks.map(t => (
      <li key={t.uri}>{t.name} - {t.artists.join(', ')}</li>
    ))}
  </ul>
)

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(track).isRequired
}

TrackList.defaultProps = {
  tracks: []
}

export default TrackList