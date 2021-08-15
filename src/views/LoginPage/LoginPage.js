import * as React from 'react';
import AuthTemplate from 'templates/AuthTemplate';
import TextLink from 'components/atoms/TextLink';
import Paragraph from 'components/atoms/Paragraph';
import InputField from 'components/molecules/InputField';
import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { routes } from 'routes';
import { useFetch } from 'context/FetchContext';
import { useAuth } from 'context/AuthContext';
import Alert from 'components/atoms/Alert';
import { useLocation } from 'react-router-dom';

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  margin-bottom: 64px;
  width: 360px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const LoginPage = () => {
  const [loginError, setLoginError] = React.useState();
  const [loginSuccess, setLoginSuccess] = React.useState();
  const [loginLoading, setLoginLoading] = React.useState(false);
  const { axiosInstance } = useFetch();
  const { authenticateUser } = useAuth();
  const { search } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginRequest = async ({ email, password }) => {
    try {
      setLoginLoading(true);
      const {
        data: { data },
      } = await axiosInstance.post('/auth/login', { email, password });

      setLoginSuccess('Successfully authenticated!');
      setLoginError('');
      setLoginLoading(false);

      setTimeout(() => {
        authenticateUser(data);
      }, 700);
    } catch (error) {
      setLoginSuccess('');
      setLoginError('Wrong email or password!');
      setLoginLoading(false);
    }
  };

  return (
    <AuthTemplate
      title="Welcome again!"
      description="You need to confirm your identity to continue."
    >
      <StyledForm onSubmit={handleSubmit(handleLoginRequest)}>
        {search && !loginSuccess ? (
          <Alert box type="error">
            This page requires login to access. Please log in to continue.
          </Alert>
        ) : null}
        {loginError ? (
          <Alert box type="error">
            {loginError}
          </Alert>
        ) : null}
        {loginSuccess ? (
          <Alert box type="success">
            {loginSuccess}
          </Alert>
        ) : null}
        <InputField
          autoFocus
          id="email"
          type="email"
          label="Email address"
          error={errors.email?.message}
          {...register('email', {
            required: { value: true, message: 'Email address is required' },
            pattern: {
              value: /[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]{2,}\.[a-z0-9]{2,}$/i,
              message: 'You must provide correct email address',
            },
          })}
        />
        <InputField
          passwordShowAction
          id="password"
          type="password"
          label="Password"
          error={errors.password?.message}
          {...register('password', {
            required: { value: true, message: 'Password is required' },
          })}
        />
        <StyledButton disabled={loginLoading} type="submit">
          {loginLoading ? 'Please wait...' : 'Login'}
        </StyledButton>
      </StyledForm>
      <Paragraph>
        New user? <TextLink to={routes.register}>Create an account</TextLink>
      </Paragraph>
    </AuthTemplate>
  );
};

export default LoginPage;
