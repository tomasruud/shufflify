import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${p => p.theme.font.secondary};
  font-weight: 700;
  font-size: 2rem;
  
  line-height: 1.5;
  
  margin-bottom: 1rem;
`

export const Heading1 = Heading

export const Heading2 = styled(Heading).attrs({ as: 'h2' })`
  font-size: 1.5rem;
`

/** @component */
export default Heading