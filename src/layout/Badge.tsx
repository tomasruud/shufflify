import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { State } from '../store'
import { session } from '../features'

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100%;
  border: 2px solid ${p => p.theme.grays.gray60};

  margin-right: 0.25rem;

  ${p => p.theme.queries.small`
    margin-right: 0;
  `}
`

const Wrap = styled.span`
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.grays.gray40};
  color: ${p => p.theme.grays.gray60};

  padding: 0.25rem 0.65rem 0.25rem 0.25rem;
  border-radius: 666rem;

  ${p => p.theme.shadows.main}

  ${p => p.theme.queries.small`
    padding: 0.25rem;
  `}
`

const Name = styled.span`
  ${p => p.theme.queries.small`
    display: none;
  `}
`

type Props = {
  image?: string,
  name: string
}

const Badge = ({ image, name }: Props) => (
  <Wrap>
    {!!image && <Image src={image} alt='Profile picture' />}
    <Name>{name}</Name>
  </Wrap>
)

const select = (state: State) => {
  const user = session.selectors.user(state.session)

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
