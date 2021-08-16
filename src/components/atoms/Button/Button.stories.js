import * as React from 'react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'This is sample button',
  $secondary: false,
  disabled: false,
  $bookmark: false,
  $active: false,
};

export const Default = () => <Button>Button</Button>;

export const Disabled = () => <Button disabled>This is disabled button</Button>;

export const Secondary = () => <Button $secondary>This is secondary button</Button>;

export const Bookmark = () => <Button $bookmark>Bookmark button</Button>;

export const BookmarkActive = () => (
  <Button $bookmark $active>
    Bookmark active button
  </Button>
);
