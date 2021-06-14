import * as React from 'react';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button label',
  },
};

const PrimaryTemplate = (args) => <Button active {...args} />;
const IconTemplate = (args) => <Button icon={BookmarkIcon} {...args} />;

export const Primary = PrimaryTemplate.bind({});

Primary.args = {
  disabled: false,
};

export const Icon = IconTemplate.bind({});

Icon.args = {
  active: false,
};
