import styled, { css } from 'styled-components';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.cyan200};
  padding: 0 32px;
  width: fit-content;
  min-width: 150px;
  height: 44px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-in;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.cyan300};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray200};
    cursor: not-allowed;
  }

  ${({ secondary, $bookmark }) =>
    secondary &&
    !$bookmark &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.cyan300};
      border: 2px solid ${({ theme }) => theme.color.cyan300};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.color.cyan100};
      }

      &:disabled {
        color: ${({ theme }) => theme.color.white};
        border: 2px solid ${({ theme }) => theme.color.gray200};
      }
    `}

  ${({ $bookmark, $active }) =>
    $bookmark &&
    css`
      // && - to increase the specificity to overide gray background when button get $bookmark,
      // $active and disabled props in the same time
      && {
        position: relative;
        background-color: ${({ theme }) => theme.color[$active ? 'cyan100' : 'gray200']};
        color: ${({ theme }) => theme.color[$active ? 'cyan300' : 'gray400']};
        padding: 0 24px 0 calc(16px + 44px);
      }

      &&:hover {
        background-color: ${({ theme }) => theme.color[$active ? 'cyan100' : 'gray200']};
      }

      &::before,
      &::after {
        display: block;
        content: '';
        width: 44px;
        height: 44px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border-radius: 50%;
      }

      &::before {
        background-color: ${({ theme }) => theme.color[$active ? 'cyan300' : 'black']};
        transition: background-color 0.3s ease-in;
      }

      &::after {
        background-color: ${({ theme }) => theme.color[$active ? 'white' : 'gray300']};
        mask-image: url(${BookmarkIcon});
        mask-size: 44px 44px;
      }

      &:hover:not(:disabled)::before {
        background-color: ${({ theme }) => theme.color[$active ? 'cyan200' : 'gray400']};
      }
    `}
`;

Button.propTypes = {
  $bookmark: PropTypes.bool,
  $active: PropTypes.bool,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  $bookmark: false,
  $active: false,
  disabled: false,
  secondary: false,
};

export default Button;
