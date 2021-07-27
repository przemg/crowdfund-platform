import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.gray200};
  border-top-color: ${({ theme }) => theme.color.cyan300};
  animation: ${rotateAnimation} 1s linear infinite;
`;

export default Spinner;
