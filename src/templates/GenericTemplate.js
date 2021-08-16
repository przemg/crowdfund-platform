import * as React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/organisms/NavBar';
import Footer from 'components/organisms/Footer';
import styled from 'styled-components';

const StyledWrapper = styled.main`
  max-width: 1024px;
  margin: 40px auto 80px;
`;

const GenericTemplate = ({ children }) => (
  <>
    <NavBar color="black" />
    <StyledWrapper>{children}</StyledWrapper>
    <Footer />
  </>
);

GenericTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericTemplate;
