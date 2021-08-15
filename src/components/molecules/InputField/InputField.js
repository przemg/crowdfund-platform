import * as React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import Alert from 'components/atoms/Alert';
import styled, { css } from 'styled-components';

const StyledLabel = styled(Label)`
  padding-bottom: 8px;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 6px;
  align-items: center;

  ${({ singleColumn }) =>
    singleColumn &&
    css`
      grid-template-columns: 1fr min-content;

      ${StyledLabel} {
        padding-bottom: 0;
      }

      ${Alert} {
        grid-column: 2 / span 1;
      }
    `};
`;

const InputField = React.forwardRef(({ singleColumn, id, label, error, ...props }, ref) => (
  <StyledWrapper singleColumn={singleColumn}>
    <StyledLabel htmlFor={id}>{`${label}: `}</StyledLabel>
    <Input id={id} ref={ref} error={!!error} {...props} />
    {error ? <Alert type="error">{error}</Alert> : null}
  </StyledWrapper>
));

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  singleColumn: PropTypes.bool,
};

InputField.defaultProps = {
  error: '',
  singleColumn: false,
};

export default InputField;
