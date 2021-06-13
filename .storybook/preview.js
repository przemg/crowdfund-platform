import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/theme/mainTheme';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
