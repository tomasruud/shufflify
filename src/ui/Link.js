import styled from 'styled-components'

const Link = styled.a.attrs(({ external }) => ({
  target: external ? '_blank' : null
}))`
  color: inherit;

  font-weight: ${p => p.theme.font.bold};
  font-family: ${p => p.theme.font.primary};

  text-decoration: none;
  
  transition: all .1s;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid;
    
    padding-bottom: 2px;
  }
`

/** @component */
export default Link
