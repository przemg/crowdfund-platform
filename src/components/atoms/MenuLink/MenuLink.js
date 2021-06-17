import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLink = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fonts.bodyTextS};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  text-decoration: none;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    transform-origin: left;
    transition: transform 0.3s ease-in;
    border-radius: 2px;
    transform: scaleX(0);
  }

  :hover::after {
    transform: scaleX(1);
  }

  ${({ active }) =>
    active &&
    css`
      ::after {
        transform: scaleX(1);
      }
    `}
`;

export default MenuLink;
