import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TextLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.bodyTextM};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.cyan200};

  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.cyan300};
  }
`;

export default TextLink;
