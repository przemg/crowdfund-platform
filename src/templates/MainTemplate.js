import * as React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
