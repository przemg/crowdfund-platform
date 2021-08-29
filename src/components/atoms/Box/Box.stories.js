import * as React from 'react';
import Box from '.';

export default {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    storyBackground: {
      defaultValue: 'gray',
    },
  },
};

const Template = (args) => <Box {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Example box content',
};

export const Default = () => <Box>This is default box</Box>;
