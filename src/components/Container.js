import styled from 'styled-components'
import { small } from './Theme'

const Wrapper = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 2rem;

  ${small`
    padding: 1rem;
  `}
`

export default Wrapper