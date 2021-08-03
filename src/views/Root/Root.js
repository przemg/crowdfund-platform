import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { useAuth } from 'context/AuthContext';
import GenericLoadingIndicator from 'components/organisms/GenericLoadingIndicator';
import CommonApp from './CommonApp';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const App = () => {
  const { isAuthenticated } = useAuth();

  // Important note:
  // CommonApp component has to be passed as last to properly handle 404 error
  return (
    <>
      <React.Suspense fallback={<GenericLoadingIndicator />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
      <CommonApp />
    </>
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
