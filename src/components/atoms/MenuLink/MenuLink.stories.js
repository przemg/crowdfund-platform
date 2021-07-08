import * as React from 'react';
import MenuLink from '.';

export default {
  title: 'Atoms/MenuLink',
  component: MenuLink,
  parameters: {
    storyBackground: {
      defaultValue: 'black',
      basedOnArg: '$color',
      values: [{ argValue: 'black', value: 'white' }],
    },
  },
};

const Template = (args) => <MenuLink {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  $color: {
    label: 'color',
    control: {
      type: 'select',
      options: ['white', 'black'],
    },
  },
};

Playground.args = {
  children: 'Menu link',
  to: '/fancy-url',
  $color: 'white',
};

export const Black = () => (
  <MenuLink to="/fancy-url" $color="black">
    Black menu link
  </MenuLink>
);

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
Black.args = { $color: 'black' };

export const White = () => (
  <MenuLink to="/fancy-url" $color="white">
    White menu link
  </MenuLink>
);
