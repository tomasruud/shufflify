import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-family: ${p => p.theme.font.secondary};
  font-weight: 700;
  font-size: ${p => p.theme.font.h1};
  
  color: ${p => p.theme.black};
  
  margin-bottom: .5rem;
`

export const Heading2 = styled(Heading1).attrs({ as: 'h2' })`
  font-size: ${p => p.theme.font.h2};
`

export default Heading1