import styled from 'styled-components'
import React from 'react'

const List = styled.ul`
  display: block;
`

const Item = styled.li`
  display: flex;
`

const Thumb = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: ${props => `url(${props.image})` || 'none'};
  background-size: cover;

  border-radius: 100%;
  border: 2px solid ${p => p.theme.white};

  ${p => p.theme.shadow};
`

const PlaylistList = ({ playlists }) => (
  <List>
    {playlists.map(p => (
      <Item key={p.id}>
        <Thumb image={p.image} />
        {p.name}
      </Item>
    ))}
  </List>
)

/** @component */
export default PlaylistList
