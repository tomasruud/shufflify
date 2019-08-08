import React from 'react'
import styled from 'styled-components'

import { Emoji } from '../common'

const Wrap = styled.div`
  display: flex;

  max-width: 400px;

  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.small};

  border-radius: 666rem;

  ${p => p.theme.shadows.main};
`

const Button = styled.button`
  border: 0;
  border-top-right-radius: 666rem;
  border-bottom-right-radius: 666rem;

  background: transparent;

  padding: 0.75rem;

  font-size: inherit;

  :hover {
    cursor: pointer;
  }

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.colors.white},
      0 0 0 4px ${p => p.theme.secondaryColors.red20};
  }
`

const Input = styled.input`
  border: 0;
  border-top-left-radius: 666rem;
  border-bottom-left-radius: 666rem;

  background-color: transparent;

  padding: 0.75rem;

  font-size: inherit;

  width: 100%;

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.colors.white},
      0 0 0 4px ${p => p.theme.secondaryColors.red20};
  }
`

type Props = {
  setFilter: (value: string) => void,
  filter: string
}

const Filter = ({ setFilter, filter, ...rest }: Props) => (
  <Wrap>
    <Input
      type='text'
      onChange={e => setFilter(e.target.value)}
      value={filter}
      {...rest}
    />
    <Button
      onClick={() => setFilter('')}
      disabled={filter === ''}
      ariaLabel='Clear'
    >
      <Emoji emoji='❌' alt='Clear' />
    </Button>
  </Wrap>
)

export default Filter
