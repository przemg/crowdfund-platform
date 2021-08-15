import * as React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/organisms/NavBar';
import Footer from 'components/organisms/Footer';

const GenericTemplate = ({ children }) => (
  <>
    <NavBar color="black" />
    {children}
    <Footer />
  </>
);

GenericTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericTemplate;
