// @flow
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import type { Playlist } from '../common'

import { playlists } from '../selectors'
import { SecondaryButton, NavLink } from '../common'

const Wrap = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: wrap;
`

const Item = styled.li`
  margin: 4px;
  
  ${p => p.theme.animations.show};
  transform: translateY(20px);
`

type Props = {
  playlists: Array<Playlist>
}

const List = ({ playlists, ...rest }: Props) => (
  <Wrap {...rest}>
    {playlists.map(p => (
      <Item key={p.uri}>
        <NavLink as={SecondaryButton} to='/shuffle' params={{ uri: p.uri }}>
          {p.name}
        </NavLink>
      </Item>
    ))}
  </Wrap>
)

List.defaultProps = {
  playlists: []
}

const select = state => ({
  playlists: playlists.filtered(state)
})

export default connect(select)(List)
