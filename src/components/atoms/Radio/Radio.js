import styled from 'styled-components';
import PropTypes from 'prop-types';

const Radio = styled.input.attrs(() => ({
  type: 'radio',
}))`
  width: 20px;
  height: 20px;
  appearance: none;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:checked {
    background-color: ${({ theme }) => theme.color.cyan200};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

Radio.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
};

export default Radio;
