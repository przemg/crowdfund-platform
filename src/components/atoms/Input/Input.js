import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.black};
  height: 44px;
  padding: 0 20px;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.color.gray300};
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.color.cyan200};
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.captionM};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.gray300};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.color.cyan200};
    `}
`;

const StyledWrapper = styled.div`
  position: relative;
  width: fit-content;

  ${({ priceLeadingIcon }) =>
    priceLeadingIcon &&
    css`
      ::before {
        content: '$';
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        font-size: ${({ theme }) => theme.font.bodyTextS};
        font-weight: ${({ theme }) => theme.font.bold};
        color: ${({ theme }) => theme.color.gray300};
      }

      & > ${StyledInput} {
        padding: 0 20px 0 36px;
      }
    `}
  ${({ passwordShowAction }) =>
    passwordShowAction &&
    css`
      & > ${StyledInput} {
        padding: 0 70px 0 20px;
      }
    `};
`;

const Input = ({ priceLeadingIcon, passwordShowAction, ...props }) => {
  const passedOnlyPasswordShowButtonProps = !priceLeadingIcon && passwordShowAction;
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);

  const handleClick = () => setIsPasswordShown(!isPasswordShown);

  return (
    <StyledWrapper
      priceLeadingIcon={priceLeadingIcon}
      passwordShowAction={passedOnlyPasswordShowButtonProps}
    >
      {passedOnlyPasswordShowButtonProps ? (
        <>
          <StyledInput {...props} type={isPasswordShown ? 'text' : 'password'} />
          <StyledButton active={isPasswordShown} onClick={handleClick} type="button">
            {isPasswordShown ? 'Hide' : 'Show'}
          </StyledButton>
        </>
      ) : (
        <StyledInput {...props} />
      )}
    </StyledWrapper>
  );
};

Input.propTypes = {
  priceLeadingIcon: PropTypes.bool,
  passwordShowAction: PropTypes.bool,
};

Input.defaultProps = {
  priceLeadingIcon: false,
  passwordShowAction: false,
};

export default Input;
