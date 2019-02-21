import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: ${p => p.theme.font.primary};
  font-size: 1.4rem;
  
  line-height: 1.15;
  
  margin-bottom: 1rem;
`

/** @component */
export default Paragraph
