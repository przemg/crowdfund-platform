export const scopes = {
  COMMON_SCOPE: 'COMMON_SCOPE',
  UNAUTHENTICATED_SCOPE: 'UNAUTHENTICATED_SCOPE',
  AUTHENTICATED_SCOPE: 'AUTHENTICATED_SCOPE',
};

export const routes = {
  home: {
    path: '/',
    allowedScope: scopes.COMMON_SCOPE,
  },
  login: {
    path: '/login',
    allowedScope: scopes.UNAUTHENTICATED_SCOPE,
  },
  register: {
    path: '/register',
    allowedScope: scopes.UNAUTHENTICATED_SCOPE,
  },
  dashboard: {
    path: '/dashboard',
    allowedScope: scopes.AUTHENTICATED_SCOPE,
  },
};
