/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import LogoWhite from 'assets/brand/logo-white.svg';
import Box from '.';

export default {
  title: 'Atoms/Box',
  componenet: Box,
  args: {
    children: 'Example content',
  },
  parameters: {
    storyBackground: {
      defaultValue: 'gray',
    },
  },
};

const argTypesForBrandBox = {
  file: {
    control: { type: 'file' },
  },
};
const argsForBrandBox = {
  brandColor: '#000',
  file: LogoWhite,
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 64px;
`;

const PlaygroundTemplate = ({ file, brandColor, ...args }) => (
  <StyledWrapper>
    <Box {...args} />
    <Box brandLogo={file} brandColor={brandColor} {...args} />
  </StyledWrapper>
);

const NormalTemplate = (args) => (
  <>
    <Box {...args} />
  </>
);

const BrandTemplate = ({ file, brandColor, ...args }) => (
  <>
    <Box brandLogo={file} brandColor={brandColor} {...args} />
  </>
);

export const Playground = PlaygroundTemplate.bind({});
Playground.argTypes = argTypesForBrandBox;
Playground.args = argsForBrandBox;

export const Normal = NormalTemplate.bind({});

export const Brand = BrandTemplate.bind({});
Brand.argTypes = argTypesForBrandBox;
Brand.args = argsForBrandBox;
