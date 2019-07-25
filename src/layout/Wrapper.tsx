import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 2rem;

  ${p => p.theme.mediaQueries.small`
    padding: 1rem;
  `}
`

export default Wrapper
