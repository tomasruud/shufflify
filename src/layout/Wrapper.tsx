import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 2rem;

  ${p => p.theme.queries.small`
    padding: 1rem;
  `}
`

export default Wrapper
