import * as React from 'react';
import Heading from '.';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'This is sample heading',
  },
};

const PlaygroundTemplate = (args) => (
  <>
    <Heading extraSmall {...args} />
    <Heading small {...args} />
    <Heading {...args} />
    <Heading large {...args} />
    <Heading extraLarge {...args} />
  </>
);

const ExtraSmallHeadingTemplate = (args) => <Heading extraSmall {...args} />;
const SmallHeadingTemplate = (args) => <Heading small {...args} />;
const NormalHeadingTemplate = (args) => <Heading {...args} />;
const LargeHeadingTemplate = (args) => <Heading large {...args} />;
const ExtraLargeHeadingTemplate = (args) => <Heading extraLarge {...args} />;

export const Playground = PlaygroundTemplate.bind({});

export const ExtraSmall = ExtraSmallHeadingTemplate.bind({});
export const Small = SmallHeadingTemplate.bind({});
export const Normal = NormalHeadingTemplate.bind({});
export const Large = LargeHeadingTemplate.bind({});
export const ExtraLarge = ExtraLargeHeadingTemplate.bind({});
