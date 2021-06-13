import * as React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { mainTheme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
