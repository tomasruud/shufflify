// @flow
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { session } from '../selectors'

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100%;
  border: 2px solid ${p => p.theme.grayEvenLighter};

  margin-right: 0.25rem;

  ${p => p.theme.mediaQueries.small`
    margin-right: 0;
  `}
`

const Wrap = styled.span`
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.grayLight};
  color: ${p => p.theme.grayEvenLighter};

  padding: 0.25rem 0.65rem 0.25rem 0.25rem;
  border-radius: 666rem;

  ${p => p.theme.shadow}

  ${p => p.theme.mediaQueries.small`
    padding: 0.25rem;
  `}
`

const Name = styled.span`
  ${p => p.theme.mediaQueries.small`
    display: none;
  `}
`

type Props = {
  image: ?string,
  name: string
}

const Badge = ({ image, name }: Props) => (
  <Wrap>
    {!!image && <Image src={image} alt='Profile picture' />}
    <Name>{name}</Name>
  </Wrap>
)

const select = state => {
  const user = session.user(state)

  if (user == null) {
    return {
      image: undefined,
      name: ''
    }
  }

  return {
    image: user.image,
    name: user.name
  }
}

export default connect(select)(Badge)
