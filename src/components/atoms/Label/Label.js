import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.gray400};
`;

export default Label;
