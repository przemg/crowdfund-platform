import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextMessage = styled.label`
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme, type }) => theme.color[type === 'error' ? 'red100' : 'green100']};
`;

TextMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
};

export default TextMessage;
