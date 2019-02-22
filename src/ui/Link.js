import styled from 'styled-components'

const Link = styled.a.attrs(({ external }) => ({
  target: external ? '_blank' : null
}))`
  color: inherit;

  font-weight: ${p => p.theme.font.bold};
  font-family: ${p => p.theme.font.primary};

  text-decoration: none;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid;
  }
`

/** @component */
export default Link
