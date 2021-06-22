import * as React from 'react';
import MenuLink from '.';

export default {
  title: 'Atoms/MenuLink',
  component: MenuLink,
  args: {
    active: false,
  },
  parameters: {
    storyBackground: {
      defaultValue: 'black',
    },
  },
};

const Template = (args) => (
  <MenuLink to="/" {...args}>
    Menu link
  </MenuLink>
);

export const Normal = Template.bind({});
