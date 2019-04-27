import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.secondary};
  
  padding: 0.75rem;

  ${p => p.theme.shadow};
`

const Close = styled.button`
  border: 0;
  background: transparent;
  
  color: inherit;

  float: right;

  vertical-align: middle;
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
  
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.secondary},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

const Message = ({ children, onClear, ...rest }) => (
  <Wrapper {...rest}>
    {children}
    <Close onClick={() => onClear()}>x</Close>
  </Wrapper>
)

Message.propTypes = {}

export default Message
