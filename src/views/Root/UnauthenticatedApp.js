import * as React from 'react';
import { routes } from 'routes';
import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

const UnauthenticatedApp = () => (
  <>
    <Route path={routes.login} component={LoginPage} />
    <Route path={routes.register} component={RegisterPage} />
  </>
);

export default UnauthenticatedApp;
