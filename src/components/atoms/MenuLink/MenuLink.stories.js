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

const Template = (args) => <MenuLink {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Menu link',
  to: '/fancy-url',
};

export const Default = () => <MenuLink to="/fancy-url">Default menu link</MenuLink>;
