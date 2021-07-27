import * as React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { mainTheme } from 'theme/mainTheme';
import AppProvider from 'context';

const MainTemplate = ({ children }) => (
  <AppProvider>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </AppProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
