import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.bodyTextM};
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.gray400};
  line-height: 1.8;
  max-width: 60ch;
`;

export default Paragraph;
