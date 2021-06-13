import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={() => <h1>Hello world</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Root;
