import * as React from 'react';
import PropTypes from 'prop-types';
import { FetchProvider } from './FetchContext';
import { AuthProvider } from './AuthContext';

const AppProviders = ({ children }) => (
  <FetchProvider>
    <AuthProvider>{children}</AuthProvider>
  </FetchProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
