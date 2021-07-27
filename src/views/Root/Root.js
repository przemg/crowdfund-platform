import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { useAuth } from 'context/AuthContext';
import GenericLoadingIndicator from 'components/organisms/GenericLoadingIndicator';
import CommonApp from './CommonApp';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <CommonApp />
      <React.Suspense fallback={<GenericLoadingIndicator />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </>
  );
};

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
