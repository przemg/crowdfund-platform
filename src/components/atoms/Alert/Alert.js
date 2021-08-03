import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Alert = styled.label`
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme, type }) => theme.color[type === 'error' ? 'red200' : 'green200']};
  line-height: 1.8;

  ${({ box }) =>
    box &&
    css`
      display: block;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid
        ${({ theme, type }) => theme.color[type === 'error' ? 'red200' : 'green200']};
      background-color: ${({ theme, type }) =>
        theme.color[type === 'error' ? 'red100' : 'green100']};
    `}
`;

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
};

export default Alert;
