import * as React from 'react';
import { routes } from 'routes';

const authenticatedApp = [{ path: routes.dashboard.path, component: () => <p>dashboard</p> }];

export default authenticatedApp;
