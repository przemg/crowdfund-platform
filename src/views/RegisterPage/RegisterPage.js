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
import Alert from 'components/atoms/Alert';
import { useAuth } from 'context/AuthContext';

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

const RegisterPage = () => {
  const [registerError, setRegisterError] = React.useState();
  const [registerSuccess, setRegisterSuccess] = React.useState();
  const [registerLoading, setRegisterLoading] = React.useState(false);
  const { axiosInstance } = useFetch();
  const { authenticateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterRequest = async ({ email, name, password }) => {
    try {
      setRegisterLoading(true);

      const {
        data: { data },
      } = await axiosInstance.post('/auth/signup', { email, name, password });

      setRegisterError('');
      setRegisterSuccess('User successfully created!');
      setRegisterLoading(false);

      setTimeout(() => {
        authenticateUser(data);
      }, 700);
    } catch (error) {
      setRegisterError('ups');
      setRegisterSuccess('');
      setRegisterLoading(false);
    }
  };

  return (
    <AuthTemplate title="Join to us!" description="Create free account to start.">
      <StyledForm onSubmit={handleSubmit(handleRegisterRequest)}>
        {registerSuccess ? (
          <Alert box type="success">
            {registerSuccess}
          </Alert>
        ) : null}
        <InputField
          autoFocus
          id="email"
          type="email"
          label="Email address"
          error={registerError ? 'Given email address is already in use' : errors.email?.message}
          {...register('email', {
            required: { value: true, message: 'Email address is required' },
            pattern: {
              value: /[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]{2,}\.[a-z0-9]{2,}$/i,
              message: 'You must provide correct email address',
            },
          })}
        />
        <InputField
          id="name"
          type="text"
          label="Full name"
          error={errors.name?.message}
          {...register('name', {
            required: { value: true, message: 'Full name is required' },
            pattern: {
              value: /[a-z]+ [a-z-]+/i,
              message: 'You must enter your first name and last name',
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
            pattern: {
              value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,15}$/,
              message:
                'Should consist of 6-20 characters, at least one lowercase, one uppercase and one number',
            },
          })}
        />
        <StyledButton disabled={registerLoading} type="submit">
          {registerLoading ? 'Please wait...' : 'Create account'}
        </StyledButton>
      </StyledForm>
      <Paragraph>
        Already have an account? <TextLink to={routes.login}>Login</TextLink>
      </Paragraph>
    </AuthTemplate>
  );
};

export default RegisterPage;
