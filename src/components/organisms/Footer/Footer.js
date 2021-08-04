import * as React from 'react';
import Logo from 'components/atoms/Logo';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Label from 'components/atoms/Label';
import styled, { css } from 'styled-components';
import MenuLink from 'components/atoms/MenuLink';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes';

const StyledFooter = styled.footer`
  border-top: 3px solid ${({ theme }) => theme.color.cyan200};
  padding-top: 56px;

  ${({ onlyCopy }) =>
    onlyCopy &&
    css`
      text-align: center;
      border-top: none;
      background-color: transparent;
    `}
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledCopyWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray200};
  padding: 20px 0;
  margin-top: 64px;
`;

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 48px;
  text-align: right;
  margin-left: auto;
  text-align: left;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 24px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-gap: 16px;
  list-style: none;

  ${({ social }) =>
    social &&
    css`
      grid-template-columns: repeat(3, max-content);
      grid-gap: 24px;
      margin-left: auto;
    `}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledMenuLink = styled(MenuLink)`
  padding: 0 0 4px;
`;

const CopyLabel = () => (
  <Label as="p">&copy; Copyright {new Date().getFullYear()} by Crowdfund</Label>
);

const Footer = ({ onlyCopy }) =>
  onlyCopy ? (
    <StyledFooter onlyCopy>
      <CopyLabel />
    </StyledFooter>
  ) : (
    <StyledFooter>
      <StyledWrapper>
        <div>
          <Logo color="black" />
          <StyledParagraph>
            Crowdfunding means a way of funding by the community. It is an innovative model of
            financing creative ideas through the community.
          </StyledParagraph>
        </div>
        <StyledNavigation>
          <div>
            <StyledHeading level={3} size="xs">
              Navigation
            </StyledHeading>
            <StyledList>
              <li>
                <StyledMenuLink to={routes.home.path} as={Link} $color="black">
                  Home
                </StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink to={routes.about.path} as={Link} $color="black">
                  About
                </StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink to={routes.discover.path} as={Link} $color="black">
                  Discover
                </StyledMenuLink>
              </li>
            </StyledList>
          </div>
          <div>
            <StyledHeading level={3} size="xs">
              Terms
            </StyledHeading>
            <StyledList>
              <li>
                <StyledMenuLink to={routes.privacy.path} as={Link} $color="black">
                  Privacy Policy
                </StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink to={routes.regulations.path} as={Link} $color="black">
                  Regulations
                </StyledMenuLink>
              </li>
            </StyledList>
          </div>
        </StyledNavigation>
      </StyledWrapper>
      <StyledCopyWrapper>
        <StyledWrapper>
          <CopyLabel />
          <StyledList social>
            <li>
              <StyledMenuLink
                as="a"
                href="https://facebook.com"
                target="_blank"
                rel="nofollow noreferrer"
                $color="black"
              >
                Facebook
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink
                as="a"
                href="https://instagram.com"
                target="_blank"
                rel="nofollow noreferrer"
                $color="black"
              >
                Instagram
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink
                as="a"
                href="https://twitter.com"
                target="_blank"
                rel="nofollow noreferrer"
                $color="black"
              >
                Twitter
              </StyledMenuLink>
            </li>
          </StyledList>
        </StyledWrapper>
      </StyledCopyWrapper>
    </StyledFooter>
  );

Footer.propTypes = {
  onlyCopy: PropTypes.bool,
};

Footer.defaultProps = {
  onlyCopy: false,
};

export default Footer;
