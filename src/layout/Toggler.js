import React from 'react'
import styled from 'styled-components'

import { small } from '../Theme'

const Button = styled.button`
  display: none;
  
  background-color: transparent;
  border: 0;
  
  padding: 0;
  margin: 0;
  
  :hover {
    cursor: pointer;
  }
  
  ${small`
    display: block;
  `}
`

const Toggler = ({...props}) => (
  <Button {...props}>
    <svg width={30} height={23}>
      <rect x={0} y={0} width={30} height={3} fill='inherit' />
      <rect x={0} y={10} width={30} height={3} fill='inherit' />
      <rect x={0} y={20} width={30} height={3} fill='inherit' />
    </svg>
  </Button>
)

export default Toggler
