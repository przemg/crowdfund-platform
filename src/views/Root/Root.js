import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import LoginPage from './LoginPage';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>Hello world</p>} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
