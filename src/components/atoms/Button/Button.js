import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.cyan200};
  padding: 0 32px;
  width: fit-content;
  min-width: 150px;
  height: 44px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  :disabled {
    background-color: ${({ theme }) => theme.color.gray200};
    cursor: not-allowed;

    :hover {
      background-color: ${({ theme }) => theme.color.gray200};
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.color.cyan300};
  }

  ${({ icon }) =>
    icon &&
    css`
      position: relative;
      background-color: ${({ theme }) => theme.color.gray200};
      color: ${({ theme }) => theme.color.gray400};
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
        background-color: ${({ theme }) => theme.color.black};
        transition: background-color 0.3s ease-in;
      }

      ::after {
        background-color: ${({ theme }) => theme.color.gray300};
        mask-image: url(${icon});
        mask-size: 44px 44px;
      }

      :hover {
        background-color: ${({ theme }) => theme.color.gray200};
      }

      :hover::before {
        background-color: ${({ theme }) => theme.color.gray400};
      }

      ${({ active }) =>
        active &&
        css`
          background-color: ${({ theme }) => theme.color.cyan100};
          color: ${({ theme }) => theme.color.cyan300};

          ::before {
            background-color: ${({ theme }) => theme.color.cyan300};
          }

          ::after {
            background-color: ${({ theme }) => theme.color.white};
          }

          :hover {
            background-color: ${({ theme }) => theme.color.cyan100};
          }

          :hover::before {
            background-color: ${({ theme }) => theme.color.cyan200};
          }
        `}
    `}
`;

export default Button;
