import * as React from 'react';
import NavBar from '.';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  parameters: {
    storyBackground: {
      defaultValue: 'black',
      basedOnArg: 'color',
      values: [{ argValue: 'black', value: 'white' }],
    },
  },
};

const Template = (args) => <NavBar {...args} />;

const sampleNavItems = [
  { to: '/about', label: 'About' },
  { to: '/discover', label: 'Discover' },
  { to: '/get-started', label: 'Get Started' },
];

export const Playground = Template.bind({});

Playground.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['white', 'black'],
    },
  },
};

Playground.args = {
  color: 'white',
  navItems: sampleNavItems,
};

export const Black = () => <NavBar color="black" navItems={sampleNavItems} />;

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
Black.args = { color: 'black' };

export const White = () => <NavBar color="white" navItems={sampleNavItems} />;

export const WithoutNavItemsBlack = () => <NavBar color="black" />;

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
WithoutNavItemsBlack.args = { color: 'black' };

export const WithoutNavItemsWhite = () => <NavBar color="white" />;
