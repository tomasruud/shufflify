import React from 'react'
import styled from 'styled-components'
import { small } from './Theme'

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100%;
  border: 2px solid ${p => p.theme.grayEvenLighter};

  margin-right: 0.25rem;
  
  ${small`
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

  ${p => p.theme.shadow};
  
  ${small`
    padding: 0.25rem;
  `}
`

const Name = styled.span`
  ${small`
    display: none;
  `}
`

const Badge = ({ image, name }) => (
  <Wrap>
    <Image src={image} alt='Profile picture' />
    <Name>{name}</Name>
  </Wrap>
)

export default Badge
