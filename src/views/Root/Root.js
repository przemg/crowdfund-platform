import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import { useAuth } from 'context/AuthContext';
import { routes } from 'routes';
import HomePage from 'views/HomePage';
import NotFoundPage from 'views/NotFoundPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import GenericLoadingIndicator from 'components/organisms/GenericLoadingIndicator';

const DashboardPage = React.lazy(() => import('views/DashboardPage'));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: routes.login, search: `referrer=${location.pathname}` }} />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const [, referrerUrl] = location?.search.split('=');

        return isAuthenticated ? <Redirect to={referrerUrl || routes.home} /> : <Component />;
      }}
    />
  );
};

/*
  - <Route /> Component - intended for routes where every user can go
  - <PublicRoute /> Component - intended for routes where only unauthenticated users can go
  - <ProtectedRoute /> Component - intended for routes where only authenticated users can go
*/
const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <React.Suspense fallback={<GenericLoadingIndicator />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PublicRoute path={routes.login} component={LoginPage} />
          <PublicRoute path={routes.register} component={RegisterPage} />
          <ProtectedRoute path={routes.dashboard} component={DashboardPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </React.Suspense>
    </MainTemplate>
  </BrowserRouter>
);

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default Root;
