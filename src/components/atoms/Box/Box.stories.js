import * as React from 'react';
import LogoWhite from 'assets/brand/logo-white.svg';
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

Playground.argTypes = {
  brandColor: { control: { type: 'color' } },
  brandLogo: { control: { type: 'file' } },
};

Playground.args = {
  children: 'Example box content',
};

export const Default = () => <Box>This is default box</Box>;

export const Brand = () => (
  <Box brandColor="#000000" brandLogo={LogoWhite}>
    This is brand box
  </Box>
);
