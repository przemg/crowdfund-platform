import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fonts.bodyTextS};
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.cyan200};
  padding: 0 32px;
  height: 44px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    cursor: not-allowed;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray100};
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.cyan300};
  }

  ${({ icon }) =>
    icon &&
    css`
      position: relative;
      background-color: ${({ theme }) => theme.colors.gray100};
      color: ${({ theme }) => theme.colors.gray300};
      padding: 0 24px 0 calc(16px + 44px);

      ::before,
      ::after {
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

      ::before {
        background-color: ${({ theme }) => theme.colors.black};
        transition: background-color 0.3s ease-in;
      }

      ::after {
        background-color: ${({ theme }) => theme.colors.gray200};
        mask-image: url(${icon});
        mask-size: 44px 44px;
      }

      :hover {
        background-color: ${({ theme }) => theme.colors.gray100};
      }

      :hover::before {
        background-color: ${({ theme }) => theme.colors.gray300};
      }

      ${({ active }) =>
        active &&
        css`
          background-color: ${({ theme }) => theme.colors.cyan100};
          color: ${({ theme }) => theme.colors.cyan300};

          ::before {
            background-color: ${({ theme }) => theme.colors.cyan300};
          }

          ::after {
            background-color: ${({ theme }) => theme.colors.white};
          }

          :hover {
            background-color: ${({ theme }) => theme.colors.cyan100};
          }

          :hover::before {
            background-color: ${({ theme }) => theme.colors.cyan200};
          }
        `}
    `}
`;

export default Button;
