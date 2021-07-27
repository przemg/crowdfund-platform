import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { useAuth } from 'context/AuthContext';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import CommonApp from './CommonApp';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <CommonApp />
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>Hello world</p>} />
        <App />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
