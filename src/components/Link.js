import styled from 'styled-components'

const Link = styled.a.attrs(({ external }) => ({
  target: external ? '_blank' : null
}))`
  color: inherit;

  font-weight: ${p => p.theme.font.bold};
  font-family: ${p => p.theme.font.primary};
  font-size: inherit;

  text-decoration: none;
  
  transition: all .1s;
  
  border: 0;
  background-color: transparent;
  
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid;
    
    padding-bottom: 2px;
  }
`

/** @component */
export default Link
