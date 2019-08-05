import styled from 'styled-components'

type Props = {
  external?: boolean
}

const Link = styled.a.attrs<Props>(({ external }) => ({
  target: external ? '_blank' : null
}))<Props>`
  color: inherit;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.primary};
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

    background: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`

export default Link
