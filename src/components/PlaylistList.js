import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { routes } from '../actions/router'
import Link from '../containers/Link'
import playlist from '../models/playlist'
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
      <Item key={p.id}>
        <SecondaryButton as={Link} to={routes.SHUFFLE} params={{ id: p.id }}>
          {p.name}
        </SecondaryButton>
      </Item>
    ))}
  </List>
)

PlaylistList.propTypes = {
  playlists: PropTypes.arrayOf(playlist)
}

export default PlaylistList
