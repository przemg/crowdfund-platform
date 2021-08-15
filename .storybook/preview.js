import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from 'theme/GlobalStyle';
import { mainTheme } from 'theme/mainTheme';
import { customViewports } from './data/customStorybookSettings';
import StoryBackgroundDecorator from './decorators/setStoryBackgroundDecorator';
import StoryPaddingDecorator from './decorators/setStoryPaddingDecorator';
import { AuthContext } from '../src/context/AuthContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  viewport: { viewports: customViewports },
  backgrounds: {
    disable: true,
    grid: { disable: true },
  },
};

const fakeAuthContextValue = {
  account: {
    name: 'Storybook User',
  },
  isAuthenticated: false,
  login() {
    fakeAuthContextValue.isAuthenticated = true;
  },
  logout() {
    fakeAuthContextValue.isAuthenticated = false;
  },
};

export const decorators = [
  StoryRouter(),
  StoryPaddingDecorator(),
  StoryBackgroundDecorator(),
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <AuthContext.Provider value={fakeAuthContextValue}>
        <Story />
      </AuthContext.Provider>
    </ThemeProvider>
  ),
];
