// @flow
import styled from 'styled-components'

const Select = styled.select`
  border: 0;
  border-radius: 666rem;

  font-size: ${p => p.theme.font.regular};

  padding: 0.5rem;
  margin: 0;

  ${p => p.theme.shadow};

  color: ${p => (p.value === '' ? p.theme.grayLight : p.theme.gray)};

  > option[disabled] {
    color: ${p => p.theme.grayLight};
  }

  > option {
    color: ${p => p.theme.gray};
  }

  :hover {
    cursor: pointer;
  }

  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${p => p.theme.white},
      0 0 0 4px ${p => p.theme.primaryLight};
  }
`

export default Select