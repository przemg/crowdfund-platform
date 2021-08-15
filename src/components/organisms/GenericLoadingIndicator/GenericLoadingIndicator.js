import * as React from 'react';
import styled from 'styled-components';
import Spinner from 'components/atoms/Spinner';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const GenericLoadingIndicator = () => (
  <StyledWrapper>
    <Spinner />
  </StyledWrapper>
);

export default GenericLoadingIndicator;
