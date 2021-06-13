import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fonts.bodyTextM};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray200};
  line-height: 1.8;
  max-width: 60ch;
`;

export default Paragraph;
