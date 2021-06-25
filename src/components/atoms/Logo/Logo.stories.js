import * as React from 'react';
import Logo from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    storyBackground: {
      defaultValue: 'black',
      basedOnArg: 'color',
      values: [{ argValue: 'black', value: 'white' }],
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  color: 'white',
};

Playground.argTypes = {
  color: {
    options: ['white', 'black'],
    control: { type: 'select' },
  },
};

export const White = () => <Logo color="white" />;

export const Black = () => <Logo color="black" />;

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
Black.args = { color: 'black' };
