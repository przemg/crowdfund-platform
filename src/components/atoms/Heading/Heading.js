import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.headingM};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.black};
  line-height: 1.8;
  margin: 0;
  max-width: 60ch;

  ${({ extraSmall }) =>
    extraSmall &&
    css`
      font-size: ${({ theme }) => theme.font.headingXS};
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.font.headingS};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.font.headingL};
    `}

  ${({ extraLarge }) =>
    extraLarge &&
    css`
      font-size: ${({ theme }) => theme.font.headingXL};
    `}
`;

export default Heading;
