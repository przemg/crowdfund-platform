import * as React from 'react';
import styled from 'styled-components';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
`;

export const Playground = () => (
  <StyledWrapper>
    <Input type="text" />
    <Input type="number" priceLeadingIcon />
    <Input type="password" passwordShowAction />
  </StyledWrapper>
);

export const Normal = () => <Input type="text" />;
export const Price = () => <Input type="number" priceLeadingIcon />;
export const Password = () => <Input type="password" passwordShowAction />;
