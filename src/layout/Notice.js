// @flow
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { message as messageActions } from '../actions'
import { message } from '../selectors'

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

type Props = {
  children: any,
  isSet: boolean,
  clear: () => void
}

const Item = ({ children, isSet, clear, ...rest }: Props) => {
  if (!isSet) {
    return null
  }

  return (
    <Wrapper {...rest}>
      {children}
      <Close onClick={() => clear()} ariaLabel='Close'>
        x
      </Close>
    </Wrapper>
  )
}

const select = state => ({
  children: message.content(state),
  isSet: message.isSet(state)
})

const actions = dispatch => ({
  clear: () => dispatch(messageActions.clear())
})

export default connect(
  select,
  actions
)(Item)
