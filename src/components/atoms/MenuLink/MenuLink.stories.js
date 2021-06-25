import * as React from 'react';
import MenuLink from '.';

export default {
  title: 'Atoms/MenuLink',
  component: MenuLink,
  parameters: {
    storyBackground: {
      defaultValue: 'black',
    },
  },
};

const Template = (args) => <MenuLink to="/" {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Menu link',
  active: false,
};

export const Default = () => <MenuLink to="/">Default menu link</MenuLink>;

export const Active = () => (
  <MenuLink active to="/">
    Active menu link
  </MenuLink>
);
