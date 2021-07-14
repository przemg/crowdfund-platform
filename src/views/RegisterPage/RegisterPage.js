import * as React from 'react';
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

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <AuthTemplate title="Join to us!" description="Create free account to start.">
      <StyledForm onSubmit={handleSubmit()}>
        <InputField
          autoFocus
          id="email"
          type="email"
          label="Email address"
          inputWidth={350}
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
          id="name"
          type="text"
          label="Full name"
          inputWidth={350}
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
          inputWidth={350}
          error={errors.password?.message}
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,15}$/,
              message: '6-20 characters (A-Z, a-z, 0-9 only)',
            },
          })}
        />
        <StyledButton>Create account</StyledButton>
      </StyledForm>
      <Paragraph>
        Already have an account? <TextLink to="/login">Login</TextLink>
      </Paragraph>
    </AuthTemplate>
  );
};

export default RegisterPage;
