import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
   transform: scale(0);
  }
  
  50% {
  transform: scale(1);
  }
  
  100% {
  transform: scale(0);
  }
`

type Props = {
  offset?: number
}

const Ball = styled.div.attrs<Props>(({ offset }) => ({
  offset: offset || 0
}))<Props>`
  width: 100%;
  height: 100%;

  border-radius: 100%;

  background-color: ${p => p.theme.secondaryColors.red20};
  opacity: 0.8;

  animation: ${animation} 1.5s ${p => p.offset}s
    cubic-bezier(0.53, 0.06, 0.5, 0.95) infinite;

  transform: scale(0);

  position: absolute;
`

const Wrap = styled.div`
  display: block;

  position: relative;

  width: 2rem;
  height: 2rem;
`

const Loader = ({ ...props }: {}) => (
  <Wrap {...props}>
    <Ball />
    <Ball offset={0.75} />
  </Wrap>
)

export default Loader
