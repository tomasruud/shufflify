import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { routes } from '../constants'
import { playlist } from '../models'
import { Link } from '../containers'

import { SecondaryButton } from './Button'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: wrap;
`

const Item = styled.li`
  margin: 4px;
`

const PlaylistList = ({ playlists, ...rest }) => (
  <List {...rest}>
    {playlists.map(p => (
      <Item key={p.uri}>
        <SecondaryButton as={Link} to={routes.SHUFFLE} params={{ uri: p.uri }}>
          {p.name}
        </SecondaryButton>
      </Item>
    ))}
  </List>
)

PlaylistList.propTypes = {
  playlists: PropTypes.arrayOf(playlist).isRequired
}

PlaylistList.defaultProps = {
  playlists: []
}

export default PlaylistList
