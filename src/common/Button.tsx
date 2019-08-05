import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;

  border-radius: 666rem;
  border: 0;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.regular};
  font-family: ${p => p.theme.fonts.primary};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.red};
  
  display: inline-block;
  text-decoration: none;

  ${p => p.theme.shadows.main};

  transition: all .1s;

  :hover {
    cursor: pointer;
    
    background-color: ${p => p.theme.secondaryColors.red60};
  }

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.colors.white},
      0 0 0 4px ${p => p.theme.secondaryColors.red20};
  }
`

export const SecondaryButton = styled(Button)`
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  
  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.red};
  }
`
