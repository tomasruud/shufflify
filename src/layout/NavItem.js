import styled from 'styled-components'
import { small } from '../Theme'

const NavItem = styled.li`
  display: inline-block;

  :not(:last-child) {
    margin-right: 1.5rem;
  }

  ${small`
    display: block;
    
    margin-right: 0;
    margin-top: 1rem;
  `}
`

export default NavItem