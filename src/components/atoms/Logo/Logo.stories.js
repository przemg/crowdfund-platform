import * as React from 'react';
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
    color: 'white',
  },
  parameters: {
    storyBackground: {
      defaultValue: 'black',
      basedOnArg: 'color',
      values: [{ argValue: 'black', value: 'white' }],
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const Normal = Template.bind({});
