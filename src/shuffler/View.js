import React, { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import type { Playlist, Track, URI } from '../common'

import { tracks as trackActions } from '../actions'
import { playlists, tracks, router } from '../selectors'
import { NavLink, Link, Loader, Paragraph, Subtitle, Title } from '../common'
import Select from './Select'
import TrackList from './TrackList'
import * as algorithms from './algorithms'

const Back = styled(Link)`
  font-size: ${p => p.theme.font.small};
  text-transform: uppercase;
`

type Props = {
  playlist: Playlist,
  tracks: ?Array<Track>,
  isLoading: boolean,
  loadTracks: (uri: URI) => void
}

const View = ({ playlist, tracks, isLoading, loadTracks }: Props) => {
  useLayoutEffect(() => {
    loadTracks(playlist.uri)
  }, [loadTracks, playlist])

  const [type, setType] = useState('')
  const [field, setField] = useState('')

  const changeAlgorithm = e => {
    setType(e.target.value)
    setField('')
  }

  return (
    <React.Fragment>
      <NavLink as={Back} to='/playlists' style={{ marginBottom: '2rem' }}>
        &laquo; Back to overview
      </NavLink>

      <Title>{playlist.name}</Title>

      <Paragraph>Select a shuffle strategy from the dropdown below.</Paragraph>

      <Select value={type ? type : ''} onChange={changeAlgorithm}>
        <option disabled={true} value=''>
          Strategy
        </option>
        {Object.keys(algorithms).map(k => (
          <option value={k} key={k}>
            {algorithms[k].display}
          </option>
        ))}
      </Select>

      {!!algorithms[type] && algorithms[type].hasOptions() && (
        <Select value={field} onChange={e => setField(e.target.value)}>
          <option disabled={true} value=''>
            - Select field -
          </option>
          {algorithms[type].opts.map(o => (
            <option value={o} key={o}>
              {o.toLowerCase()}
            </option>
          ))}
        </Select>
      )}

      <Subtitle>Original order</Subtitle>

      {isLoading && <Loader />}
      {!isLoading && !!tracks && <TrackList tracks={tracks} />}
    </React.Fragment>
  )
}

View.defaultProps = {
  tracks: [],
  isLoading: true
}

const select = state => ({
  playlist: playlists.byURI(state, router.param(state, 'uri')),
  tracks: tracks.byPlaylistURI(state, router.param(state, 'uri')),
  isLoading: tracks.loading(state)
})

const actions = dispatch => ({
  loadTracks: playlistURI => dispatch(trackActions.loadIfNeeded(playlistURI))
})

export default connect(
  select,
  actions
)(View)
