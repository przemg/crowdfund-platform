import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>Hello world</p>} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
