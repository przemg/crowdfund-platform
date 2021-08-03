import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'routes/index';
import HomePage from 'views/HomePage/HomePage';

// Part of application where every user has access whether he is authenticated or not
const CommonApp = () => (
  <Switch>
    <Route exact path={routes.home} component={HomePage} />

    <Route path="*" component={() => <p>404</p>} />
  </Switch>
);

export default CommonApp;
