import * as React from 'react';
import { routes } from 'routes';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

const UnauthenticatedApp = () => (
  <Switch>
    <Route path={routes.login} component={LoginPage} />
    <Route path={routes.register} component={RegisterPage} />
  </Switch>
);

export default UnauthenticatedApp;
