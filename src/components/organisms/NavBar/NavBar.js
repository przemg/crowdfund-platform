import * as React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import MenuLink from 'components/atoms/MenuLink';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  justify-content: ${({ withoutNavItems }) => (withoutNavItems ? 'center' : 'space-between')};
  align-items: center;
  padding: 32px 24px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 16px;
  list-style: none;
`;

const NavBar = ({ navItems, color }) => (
  <StyledHeader withoutNavItems={!navItems.length}>
    <Logo color={color} />
    <nav>
      <StyledList>
        {navItems
          ? navItems.map(({ to, label }) => (
              <li key={label}>
                <MenuLink to={to} $color={color}>
                  {label}
                </MenuLink>
              </li>
            ))
          : null}
      </StyledList>
    </nav>
  </StyledHeader>
);

NavBar.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, to: PropTypes.string.isRequired }),
  ),
};

NavBar.defaultProps = {
  navItems: [],
};

export default NavBar;
