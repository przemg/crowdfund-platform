import * as React from 'react';
import styled from 'styled-components';
import Logo from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    backgroundColor: '#000',
  },
};

const Wrapper = styled.div`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 80px;
`;

const Template = (args) => (
  <Wrapper {...args}>
    <Logo />
  </Wrapper>
);

export const Normal = Template.bind({});
