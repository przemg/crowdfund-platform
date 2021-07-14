import * as React from 'react';
import PropTypes from 'prop-types';
import AuthTemplate from 'templates/AuthTemplate';
import TextLink from 'components/atoms/TextLink';
import Paragraph from 'components/atoms/Paragraph';
import InputField from 'components/molecules/InputField';
import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  margin-bottom: 64px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <AuthTemplate
      title="Welcome again!"
      description="You need to confirm your identity to continue."
    >
      <StyledForm onSubmit={handleSubmit((e) => console.log(e))}>
        <InputField
          id="email"
          type="email"
          label="Email address"
          inputWidth={350}
          error={errors.email?.message}
          {...register('email', {
            required: { value: true, message: 'Email address is required' },
            pattern: {
              value: /[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]{2,}(?:\.[a-z0-9]{2,})*$/i,
              message: 'You must provide correct email address',
            },
          })}
        />
        <InputField
          passwordShowAction
          id="password"
          type="password"
          label="Password"
          inputWidth={350}
          error={errors.password?.message}
          {...register('password', {
            required: { value: true, message: 'Password is required' },
          })}
        />
        <StyledButton>Login</StyledButton>
      </StyledForm>
      <Paragraph>
        New user? <TextLink to="/register">Create an account</TextLink>
      </Paragraph>
    </AuthTemplate>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginPage;
