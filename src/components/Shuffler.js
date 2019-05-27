import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import playlistType from '../models/playlist'
import algorithms from '../constants/algorithms'
import routes from '../constants/routes'
import VisibleTracks from '../containers/VisibleTracks'
import Link from '../containers/Link'
import Title, { Heading2 } from './Title'
import Loader from './Loader'
import Paragraph from './Paragraph'

const Select = styled.select`
  border: 0;
  border-radius: 666rem;

  font-size: ${p => p.theme.font.regular};

  padding: 0.5rem;
  margin: 0;

  ${p => p.theme.shadow};
  
  color: ${p => p.value === '' ? p.theme.grayLight : p.theme.gray};
  
  > option[disabled] {
    color: ${p => p.theme.grayLight};
  }
  
  > option {
    color: ${p => p.theme.gray};
  }

  :hover {
    cursor: pointer;
  }
  
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.white},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

const Back = styled(Link)`
  font-size: ${p => p.theme.font.small};
  text-transform: uppercase;
  
  margin-bottom: 2rem;
`

const Shuffler = ({ playlist, isLoading, loadTracks }) => {
  useLayoutEffect(() => {
    if (!playlist.tracks) {
      loadTracks(playlist.uri)
    }
  }, [loadTracks, playlist])

  const [type, setType] = useState('')
  const [field, setField] = useState('')

  const algoChange = e => {
    setType(e.target.value)
    setField('')
  }

  return (
    <React.Fragment>
      <Back to={routes.PLAYLISTS}>&laquo; Back to overview</Back>

      <Title>{playlist.name}</Title>

      <Paragraph>
        Select a shuffle strategy from the dropdown below.
      </Paragraph>

      <Select value={type} onChange={algoChange}>
        <option disabled={true} value=''>Strategy</option>
        {Object.keys(algorithms).map(k => (
          <option value={k}>{algorithms[k].display}</option>
        ))}
      </Select>
      {!!algorithms[type] && algorithms[type].hasOptions() && (
        <Select value={field} onChange={e => setField(e.target.value)}>
          <option disabled={true} value=''>- Select field -</option>
          {algorithms[type].opts.map(o => (
            <option value={o}>{o.toLowerCase()}</option>
          ))}
        </Select>
      )}

      <Heading2>Original order</Heading2>
      {isLoading ? <Loader /> : <VisibleTracks />}
    </React.Fragment>
  )
}

Shuffler.propTypes = {
  playlist: playlistType.isRequired,
  isLoading: PropTypes.bool,
  loadTracks: PropTypes.func.isRequired
}

export default Shuffler
