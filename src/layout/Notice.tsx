import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { message } from '../features'
import { State } from '../store'

const Wrapper = styled.div`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.red};

  padding: 0.75rem;

  ${p => p.theme.shadows.main};
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
    box-shadow: 0 0 0 2px ${p => p.theme.colors.red},
      0 0 0 4px ${p => p.theme.secondaryColors.red20};
  }
`

type Props = {
  children: any
  isSet: boolean
  clear: () => void
}

const Item = ({
  children,
  isSet,
  clear,
  ...rest
}: Props & React.ComponentProps<typeof Wrapper>) => {
  if (!isSet) {
    return null
  }

  return (
    <Wrapper {...rest}>
      {children}
      <Close onClick={() => clear()} aria-label='Close'>
        x
      </Close>
    </Wrapper>
  )
}

const select = (state: State) => ({
  children: message.selectors.content(state.message),
  isSet: message.selectors.isSet(state.message)
})

const actions = {
  clear: message.actions.clear
}

export default connect(
  select,
  actions
)(Item)
