/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import MenuLink from '.';

export default {
  title: 'Atoms/MenuLink',
  component: MenuLink,
  args: {
    backgroundColor: '#000',
    active: false,
  },
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 200px;
  height: 100px;
`;

const Template = ({ backgroundColor, ...args }) => (
  <StyledWrapper backgroundColor={backgroundColor}>
    <MenuLink to="/" {...args}>
      Menu link
    </MenuLink>
  </StyledWrapper>
);

export const Normal = Template.bind({});
