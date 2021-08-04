import * as React from 'react';
import PropTypes from 'prop-types';
import GenericLoadingIndicator from 'components/organisms/GenericLoadingIndicator';
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
        const {
          data: { data },
        } = await axiosInstance.get('/auth/me');

        setAuthState({ account: data, isAuthenticated: true, checkedSessionCookie: true });
      } catch (error) {
        setAuthState({ account: null, isAuthenticated: false, checkedSessionCookie: true });
      }
    };

    getAuthenticatedUserData();
  }, [axiosInstance]);

  const authenticateUser = (account) => {
    setAuthState({ ...authState, account, isAuthenticated: !!account?._id });
  };

  const logout = async () => {
    try {
      await axiosInstance.delete('/auth/logout');
      authenticateUser(null);
    } catch (error) {
      authenticateUser(null);
      console.log(error);
    }
  };

  // We are waiting for a response from /auth/me to check if the user has a valid session cookie
  if (!authState.checkedSessionCookie) {
    return <GenericLoadingIndicator />;
  }

  return (
    <AuthContext.Provider value={{ ...authState, authenticateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Additionally, importing AuthContext to create a fake authentication state for storybook
// to properly render components that require AuthContext
export { AuthProvider, useAuth, AuthContext };
