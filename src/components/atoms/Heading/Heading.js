import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fonts.headingM};
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.8;
  margin: 0;
  max-width: 60ch;

  ${({ extraSmall }) =>
    extraSmall &&
    css`
      font-size: ${({ theme }) => theme.fonts.headingXS};
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fonts.headingS};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fonts.headingL};
    `}

  ${({ extraLarge }) =>
    extraLarge &&
    css`
      font-size: ${({ theme }) => theme.fonts.headingXL};
    `}
`;

export default Heading;
