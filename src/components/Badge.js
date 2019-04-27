import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100%;
  border: 2px solid ${p => p.theme.grayEvenLighter};

  margin-right: .25rem;
`

const Wrap = styled.span`
  display: flex;
  align-items: center;
  
  background-color: ${p => p.theme.grayLight};
  color: ${p => p.theme.grayEvenLighter};
  
  padding: .25rem .65rem .25rem .25rem;
  border-radius: 666rem;
  
  ${p => p.theme.shadow};
`

const Badge = ({ image, name }) => (
  <Wrap>
    <Image src={image} alt='Profile picture' />
    {name}
  </Wrap>
)

export default Badge
