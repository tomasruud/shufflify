import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: ${p => p.open ? 'block' : 'none'};

  color: ${p => p.theme.black};
  background-color: ${p => p.theme.secondary};

  padding: 0.75rem;

  ${p => p.theme.shadow};
`

const Close = styled.button`
  border: 0;
  background: transparent;

  float: right;
  
  vertical-align: middle;
  font-size: 1rem;
    
  :hover {
    cursor: pointer;
  }
`

const Message = ({ children }) => {
  const [open, setOpen] = useState(true)

  return (
    <Wrapper open={open}>
      {children}
      <Close onClick={() => setOpen(false)}>x</Close>
    </Wrapper>
  )
}

/** @component */
export default Message
