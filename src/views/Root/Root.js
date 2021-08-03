import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { useAuth } from 'context/AuthContext';
import GenericLoadingIndicator from 'components/organisms/GenericLoadingIndicator';
import commonApp from './CommonApp';
import unauthenticatedApp from './UnauthenticatedApp';
import authenticatedApp from './AuthenticatedApp';

const App = () => {
  const { isAuthenticated } = useAuth();

  // Important note:
  // commonApp component has to be passed as last to properly handle 404 error
  const partsToRender = [isAuthenticated ? authenticatedApp : unauthenticatedApp, commonApp].flat();

  return (
    <React.Suspense fallback={<GenericLoadingIndicator />}>
      <Switch>
        {partsToRender.map(({ path, component, ...rest }) => (
          <Route key={path} path={path} component={component} {...rest} />
        ))}
      </Switch>
    </React.Suspense>
  );
};

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
