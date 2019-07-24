// @flow
import React from 'react'
import styled from 'styled-components'
import type { Track } from '../common'

const Table = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;

  width: 100%;

  font-size: ${p => p.theme.font.small};
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;

  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${p => p.theme.grayLighter};
  
  ${p => p.theme.animations.show};
  opacity: 0;
`

const Cell = styled.div`
  display: block;
  flex-flow: row nowrap;
  flex-grow: 1;
  flex-basis: 0;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  :not(:last-child) {
    margin-right: 1rem;
  }
`

const Title = styled(Cell)`
  text-transform: uppercase;
  color: ${p => p.theme.grayLight};
`

type Props = {
  tracks: Array<Track>
}

const TrackList = ({ tracks }: Props) => (
  <Table>
    <Row>
      <Title>Title</Title>
      <Title>Artist</Title>
    </Row>
    {!!tracks &&
      tracks.map((t, i) => (
        <Row key={'' + t.uri + i}>
          <Cell>{t.name}</Cell>
          <Cell>{t.artists.join(', ')}</Cell>
        </Row>
      ))}
  </Table>
)

TrackList.defaultProps = {
  tracks: []
}

export default TrackList
