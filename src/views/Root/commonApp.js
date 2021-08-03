import { routes } from 'routes/index';
import HomePage from 'views/HomePage/HomePage';
import NotFoundPage from 'views/NotFoundPage/';

// Part of application where every user has access whether he is authenticated or not
const commonApp = [
  { path: routes.home.path, component: HomePage, exact: true },

  { path: '*', component: NotFoundPage },
];

export default commonApp;
