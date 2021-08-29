import styled from 'styled-components';

const Box = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 8px;
`;

export default Box;
