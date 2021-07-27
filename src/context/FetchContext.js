import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const FetchContext = React.createContext();
const useFetch = () => React.useContext(FetchContext);

const FetchProvider = ({ children }) => {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  React.useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const { data } = await axiosInstance.get('/auth/csrf-token');
        axiosInstance.defaults.headers['X-CSRF-Token'] = data.csrfToken;
      } catch (error) {
        console.log(error);
      }
    };

    getCsrfToken();
  }, [axiosInstance]);

  return <FetchContext.Provider value={{ axiosInstance }}>{children}</FetchContext.Provider>;
};

FetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useFetch, FetchProvider };
