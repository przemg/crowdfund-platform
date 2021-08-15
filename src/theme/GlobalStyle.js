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
    font-size: ${({ theme }) => theme.font.bodyTextM};
    font-weight: ${({ theme }) => theme.font.regular};
    color: ${({ theme }) => theme.color.gray400};
    font-family: 'Commissioner', sans-serif;
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

export default GlobalStyle;
