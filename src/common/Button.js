// @flow
import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;

  border-radius: 666rem;
  border: 0;

  font-weight: ${p => p.theme.font.bold};
  font-size: ${p => p.theme.font.regular};
  font-family: ${p => p.theme.font.primary};

  color: ${p => p.theme.primaryContrast};
  background-color: ${p => p.theme.primary};
  
  display: inline-block;
  text-decoration: none;

  ${p => p.theme.shadow};

  transition: all .1s;

  :hover {
    cursor: pointer;
    
    background-color: ${p => p.theme.primaryDark};
  }

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.white},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

export const SecondaryButton = styled(Button)`
  color: ${p => p.theme.black};
  background-color: ${p => p.theme.white};
  
  :hover {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.primary};
  }
`
