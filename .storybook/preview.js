import styled, { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from 'theme/GlobalStyle';
import { mainTheme } from 'theme/mainTheme';
import { customViewports } from './data/customStorybookSettings';
import StoryBackgroundDecorator from './decorators/setStoryBackgroundDecorator';

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

const StyledGlobalWrapper = styled.div`
  padding: 24px;
`;

export const decorators = [
  StoryRouter(),
  StoryBackgroundDecorator(),
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <StyledGlobalWrapper>
        <Story />
      </StyledGlobalWrapper>
    </ThemeProvider>
  ),
];
