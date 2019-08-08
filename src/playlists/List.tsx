import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SecondaryButton, NavLink } from '../common'
import { playlists } from '../features'
import { State } from '../store'

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
  opacity: 0;
`

type Props = {
  playlists: Array<playlists.models.Playlist>
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

const select = (state: State) => ({
  playlists: playlists.selectors.filtered(state.playlists)
})

export default connect(select)(List)
