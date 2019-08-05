import styled from 'styled-components'

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.h1};

  color: ${p => p.theme.colors.black};

  margin-bottom: 0.5rem;
`

export const Subtitle = styled(Title).attrs({ as: 'h2' })`
  font-size: ${p => p.theme.fontSizes.h2};
`
