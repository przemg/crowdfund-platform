import * as React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from './FetchContext';

const AuthContext = React.createContext();
const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const { axiosInstance } = useFetch();

  const [authState, setAuthState] = React.useState({
    account: null,
    isAuthenticated: false,
    checkedSessionCookie: false,
  });

  React.useEffect(() => {
    const getAuthenticatedUserData = async () => {
      try {
        const { data } = await axiosInstance.get('/auth/me');
        setAuthState({ account: data, isAuthenticated: true, checkedSessionCookie: true });
      } catch (error) {
        setAuthState({ account: null, isAuthenticated: false, checkedSessionCookie: true });
      }
    };

    getAuthenticatedUserData();
  }, [axiosInstance]);

  const login = () => {};
  const logout = () => {};

  // We are waiting for a response from /auth/me to check if the user has a valid session cookie
  if (!authState.checkedSessionCookie) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
