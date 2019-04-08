import styled from 'styled-components'

const Input = styled.input`
  padding: 0.75rem;

  font-size: ${p => p.theme.font.regular};
  
  background-color: ${p => p.theme.grayEvenLighter};
  
  border: 0;
  
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.white},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

/** @component */
export default Input
