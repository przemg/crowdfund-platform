import React from 'react';
import { routes } from 'routes';

const LoginPage = React.lazy(() => import('views/LoginPage'));
const RegisterPage = React.lazy(() => import('views/RegisterPage'));

const unauthenticatedApp = [
  { path: routes.login.path, component: LoginPage },
  { path: routes.register.path, component: RegisterPage },
];

export default unauthenticatedApp;
