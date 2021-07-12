import * as React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import PropTypes from 'prop-types';
import { priceFormatter, numberFormatter } from 'helpers/numberFormatter';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const StyledHeading = styled(Heading)`
  line-height: 1;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 1;
`;

const Cardinal = ({ value, description, priceFormat }) => (
  <StyledWrapper>
    <StyledHeading level={3} size="xl">
      {priceFormat ? priceFormatter(value) : numberFormatter(value)}
    </StyledHeading>
    <StyledParagraph>{description}</StyledParagraph>
  </StyledWrapper>
);

Cardinal.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  priceFormat: PropTypes.bool,
};

Cardinal.defaultProps = {
  priceFormat: false,
};

export default Cardinal;
