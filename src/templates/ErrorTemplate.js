import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from 'components/atoms/Box';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50vw;
  margin-top: 10%;
`;

const StyledStatusParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.color.gray200};
  font-size: ${({ theme }) => theme.font.display};
  font-weight: ${({ theme }) => theme.font.bold};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -68%);
  z-index: -1;
`;

const StyledParagraph = styled(Paragraph)`
  max-width: 320px;
  text-align: center;
  margin: 4px 0 48px;
`;

const ErrorTemplate = ({ status, type, message }) => (
  <StyledWrapper>
    <StyledBox>
      <StyledStatusParagraph as="span">{status}</StyledStatusParagraph>
      <Heading>{type}</Heading>
      <StyledParagraph>{message}</StyledParagraph>
      <Button as={Link} to={routes.home.path}>
        Come back to homepage
      </Button>
    </StyledBox>
  </StyledWrapper>
);

ErrorTemplate.propTypes = {
  status: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorTemplate;
