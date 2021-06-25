import * as React from 'react';
import Heading from '.';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  level: {
    options: [1, 2, 3, 4, 5, 6],
    control: { type: 'select' },
  },
  size: {
    options: ['XS', 'S', 'M', 'L', 'XL'],
    control: { type: 'select' },
  },
};

Playground.args = {
  children: 'This sample content',
};

export const Default = () => <Heading>This is default heading</Heading>;

export const Levels = () => (
  <>
    <Heading level={1}>This is level 1 heading</Heading>
    <Heading level={2}>This is level 2 heading</Heading>
    <Heading level={3}>This is level 3 heading</Heading>
    <Heading level={4}>This is level 4 heading</Heading>
    <Heading level={5}>This is level 5 heading</Heading>
    <Heading level={6}>This is level 6 heading</Heading>
  </>
);

export const Sizes = () => (
  <>
    <Heading size="XL">This is extra large heading</Heading>
    <Heading size="L">This is large heading</Heading>
    <Heading size="M">This is medium heading</Heading>
    <Heading size="S">This is small heading</Heading>
    <Heading size="XS">This is extra small heading</Heading>
  </>
);
