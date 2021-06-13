import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; // 10px
  }

  body {
    font-size: ${({ theme }) => theme.fonts.bodyTextM};
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray200};
    font-family: 'Commissioner', sans-serif;
  }
`;

export default GlobalStyle;
