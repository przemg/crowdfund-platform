import * as React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/atoms/Logo';
import Footer from 'components/organisms/Footer';
import styled from 'styled-components';
import Box from 'components/atoms/Box/';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
`;

const StyledBox = styled(Box)`
  margin-top: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const AuthTemplate = ({ children, title, description }) => (
  <StyledWrapper>
    <Logo color="black" />
    <StyledBox>
      <Heading level={1} size="m">
        {title}
      </Heading>
      <StyledParagraph>{description}</StyledParagraph>
      {children}
    </StyledBox>
    <Footer onlyCopy />
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthTemplate;
