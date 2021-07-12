import * as React from 'react';
import LogoWhite from 'assets/brand/logo-white.svg';
import LogoBlack from 'assets/brand/logo-black.svg';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import Box from '.';

const sampleLogos = {
  crowdfundBlackLogo: LogoBlack,
  crowdfundWhiteLogo: LogoWhite,
  sampleLogoBookmark: BookmarkIcon,
};

export default {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    storyPadding: { customPadding: { paddingTop: '40px' } },
    storyBackground: {
      defaultValue: 'gray',
    },
  },
};

const Template = (args) => <Box {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  brandColor: { control: { type: 'color' } },
  brandLogo: {
    options: Object.keys(sampleLogos),
    mapping: sampleLogos,
    control: {
      type: 'select',
      labels: {
        crowdfundBlackLogo: 'Crowdfund Logo - Black',
        crowdfundWhiteLogo: 'Crowdfund Logo - White',
        sampleLogoBookmark: 'Sample Logo Bookmark',
      },
    },
  },
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
