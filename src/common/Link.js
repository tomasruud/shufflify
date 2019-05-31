// @flow
import styled from 'styled-components'

type Props = {
  external: boolean
}

const Link = styled.a.attrs(({ external }: Props) => ({
  target: external ? '_blank' : null
}))`
  color: inherit;

  font-weight: ${p => p.theme.font.bold};
  font-family: ${p => p.theme.font.primary};
  font-size: inherit;

  text-decoration: none;

  transition: all 0.1s;

  border: 0;
  border-radius: 3px;
  
  background: transparent;

  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    
    background: ${p => p.theme.primary};
    color: ${p => p.theme.primaryContrast}
  }
`

export default Link
