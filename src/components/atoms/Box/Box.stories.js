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
  background-color: ${({ theme }) => theme.color.gray100};
  padding: 40px;
`;

const StyledPlaygroundWrapper = styled(StyledWrapper)`
  display: grid;
  grid-gap: 64px;
  min-height: unset;
`;

const PlaygroundTemplate = ({ file, brandColor, ...args }) => (
  <StyledPlaygroundWrapper>
    <Box {...args} />
    <Box brandLogo={file} brandColor={brandColor} {...args} />
  </StyledPlaygroundWrapper>
);

const NormalTemplate = (args) => (
  <StyledWrapper>
    <Box {...args} />
  </StyledWrapper>
);

const BrandTemplate = ({ file, brandColor, ...args }) => (
  <StyledWrapper>
    <Box brandLogo={file} brandColor={brandColor} {...args} />
  </StyledWrapper>
);

export const Playground = PlaygroundTemplate.bind({});
Playground.argTypes = argTypesForBrandBox;
Playground.args = argsForBrandBox;

export const Normal = NormalTemplate.bind({});

export const Brand = BrandTemplate.bind({});
Brand.argTypes = argTypesForBrandBox;
Brand.args = argsForBrandBox;
