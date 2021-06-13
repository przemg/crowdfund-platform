import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <h1>Hello world</h1>} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
