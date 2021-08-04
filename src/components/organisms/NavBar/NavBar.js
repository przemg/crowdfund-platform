import * as React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import MenuLink from 'components/atoms/MenuLink';
import PropTypes from 'prop-types';
import { useAuth } from 'context/AuthContext';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 0;
`;

const StyledList = styled.ul`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 16px;
  align-items: center;
  list-style: none;
`;

const NavBar = ({ color }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <StyledHeader>
      <Logo color={color} />
      <nav>
        <StyledList>
          <li>
            <MenuLink exact to={routes.home.path} activeClassName="active" $color={color}>
              Home
            </MenuLink>
          </li>
          <li>
            <MenuLink to={routes.about.path} activeClassName="active" $color={color}>
              About
            </MenuLink>
          </li>
          <li>
            <MenuLink to={routes.discover.path} activeClassName="active" $color={color}>
              Discover
            </MenuLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <MenuLink to={routes.dashboard.path} activeClassName="active" $color={color}>
                  Dashboard
                </MenuLink>
              </li>
              <li>
                <Button onClick={logout}>Log Out</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <MenuLink as={Link} to={routes.login.path} $color={color}>
                  Log In
                </MenuLink>
              </li>
              <li>
                <Button as={Link} to={routes.register.path}>
                  Get Started
                </Button>
              </li>
            </>
          )}
        </StyledList>
      </nav>
    </StyledHeader>
  );
};

NavBar.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
};

export default NavBar;
