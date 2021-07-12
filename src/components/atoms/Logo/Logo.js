import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from 'assets/brand/logo-white.svg';
import LogoBlack from 'assets/brand/logo-black.svg';
import PropTypes from 'prop-types';

const Logo = ({ color }) => (
  <Link to="/">
    <img src={color === 'white' ? LogoWhite : LogoBlack} alt="Crowdfund logo" />
  </Link>
);

Logo.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
};

export default Logo;
