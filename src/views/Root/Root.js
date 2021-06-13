import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <p>Hello world</p>} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
