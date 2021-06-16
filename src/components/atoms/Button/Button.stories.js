/* eslint-disable react/prop-types */
import * as React from 'react';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import styled from 'styled-components';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button label',
  },
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  width: 300px;
`;

const PlaygroundTemplate = ({ disabled, active, ...args }) => (
  <StyledWrapper>
    <Button disabled={disabled} {...args} />
    <Button active={active} icon={BookmarkIcon} {...args} />
  </StyledWrapper>
);
const PrimaryTemplate = (args) => <Button {...args} />;
const IconTemplate = (args) => <Button icon={BookmarkIcon} {...args} />;

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  disabled: false,
  active: false,
};

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  disabled: false,
};

export const Icon = IconTemplate.bind({});
Icon.args = {
  active: false,
};
