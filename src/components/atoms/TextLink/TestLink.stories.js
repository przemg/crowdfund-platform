import * as React from 'react';
import TextLink from '.';

export default {
  title: 'Atoms/TextLink',
  component: TextLink,
};

const Template = (args) => <TextLink {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Playground text link',
  to: '/playground',
};

export const Default = () => <TextLink to="/default">Default link</TextLink>;
