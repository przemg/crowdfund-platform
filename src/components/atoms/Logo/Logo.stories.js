/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import Logo from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    color: {
      options: ['white', 'black'],
      control: { type: 'select' },
    },
  },
  args: {
    backgroundColor: '#000',
    color: 'white',
  },
};

const Wrapper = styled.div`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 80px;
`;

const Template = ({ color, ...args }) => (
  <Wrapper {...args}>
    <Logo color={color} />
  </Wrapper>
);

export const Normal = Template.bind({});
