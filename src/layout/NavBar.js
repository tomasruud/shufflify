import styled from 'styled-components'
import { small } from '../Theme'

const NavBar = styled.ul`
  ${small`
    display: ${p => p.visible ? 'block' : 'none'};
    flex: 1 100%;
  `}
`

export default NavBar