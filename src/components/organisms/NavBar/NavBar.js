import * as React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import MenuLink from 'components/atoms/MenuLink';
import PropTypes from 'prop-types';
import { useAuth } from 'context/AuthContext';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import Dropdown from 'components/molecules/Dropdown';
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
            <MenuLink exact to={routes.home} activeClassName="active" $color={color}>
              Home
            </MenuLink>
          </li>
          <li>
            <MenuLink to={routes.about} activeClassName="active" $color={color}>
              About
            </MenuLink>
          </li>
          <li>
            <MenuLink to={routes.discover} activeClassName="active" $color={color}>
              Discover
            </MenuLink>
          </li>
          {isAuthenticated ? (
            <li>
              <Dropdown>
                <Dropdown.Button>My Account</Dropdown.Button>
                <Dropdown.List>
                  <Dropdown.Item type="link" to={routes.dashboard}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item type="button" onClick={logout}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.List>
              </Dropdown>
            </li>
          ) : (
            <>
              <li>
                <MenuLink as={Link} to={routes.login} $color={color}>
                  Log In
                </MenuLink>
              </li>
              <li>
                <Button as={Link} to={routes.register}>
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
