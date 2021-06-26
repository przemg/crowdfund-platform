import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuLink = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.white};
  padding: 12px 16px;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.white};
    transform-origin: left;
    transition: transform 0.3s ease-in;
    border-radius: 2px;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        transform: scaleX(1);
      }
    `}
`;

MenuLink.propTypes = {
  active: PropTypes.bool,
};

MenuLink.defaultProps = {
  active: false,
};

export default MenuLink;
