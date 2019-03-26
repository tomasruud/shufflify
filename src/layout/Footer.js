import styled from 'styled-components'
import Inner from './Inner'

const Footer = styled(Inner).attrs({ as: 'footer' })`
  color: ${p => p.theme.grayLight};
  font-size: ${p => p.theme.font.small};

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: flex-start;
`

export default Footer