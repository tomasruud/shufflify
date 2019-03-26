import styled from 'styled-components'

const Header = styled.header`
  color: ${p => p.theme.gray};

  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

export default Header