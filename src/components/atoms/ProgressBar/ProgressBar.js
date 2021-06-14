import styled from 'styled-components';

const ProgressBar = styled.progress`
  &[value] {
    appearance: none;
    height: 12px;

    ::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.colors.gray100};
      border-radius: 8px;
    }

    ::-webkit-progress-value {
      background-color: ${({ theme }) => theme.colors.cyan200};
      border-radius: 8px;
    }
  }
`;

export default ProgressBar;
