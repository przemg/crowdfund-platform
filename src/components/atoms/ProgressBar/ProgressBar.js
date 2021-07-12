import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProgressBar = styled.progress.attrs(({ max }) => ({ max }))`
  &[value] {
    appearance: none;
    height: 12px;

    &::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.color.gray200};
      border-radius: 8px;
    }

    &::-webkit-progress-value {
      background-color: ${({ theme }) => theme.color.cyan200};
      border-radius: 8px;
    }
  }
`;

ProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProgressBar;
