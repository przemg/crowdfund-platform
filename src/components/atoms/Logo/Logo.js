import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from 'assets/brand/logo.svg';

const Logo = () => (
  <Link to="/">
    <img src={LogoSVG} alt="Crowdfund logo" />
  </Link>
);

export default Logo;
