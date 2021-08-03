import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { matchPath, Redirect } from 'react-router';
import { routes, scopes } from 'routes';
import { useAuth } from 'context/AuthContext';
import ErrorTemplate from 'templates/ErrorTemplate';

const NotFoundPage = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const [pathExist] = Object.values(routes).filter(({ path }) =>
    matchPath(location.pathname, { path, exact: true }),
  );

  if (isAuthenticated && pathExist?.allowedScope === scopes.UNAUTHENTICATED_SCOPE) {
    const [, referrerUrl] = location?.search.split('=');

    return referrerUrl ? <Redirect to={referrerUrl} /> : <Redirect to={routes.home.path} />;
  }

  if (!isAuthenticated && pathExist?.allowedScope === scopes.AUTHENTICATED_SCOPE) {
    return (
      <Redirect to={{ pathname: routes.login.path, search: `referrer=${location.pathname}` }} />
    );
  }

  return (
    <ErrorTemplate
      status={404}
      type="Not Found"
      message="The link you clicked may have been broken or the page doesn't exist."
    />
  );
};

export default NotFoundPage;
