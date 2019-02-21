import styled from 'styled-components'

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  margin: 0;

  border-radius: 666rem;
  border: 0;

  font-weight: ${p => p.theme.font.bold};
  font-size: ${p => p.theme.font.large};
  font-family: ${p => p.theme.font.primary};

  color: ${p => p.theme.primaryContrast};
  background-color: ${p => p.theme.primary};

  ${p => p.theme.shadow};

  transition: all 0.1s;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.white},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

/** @component */
export default Button
