import React from 'react';
import Paragraph from '.';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children:
      'Fusce pellentesque quam semper nulla placerat vehicula. Donec et nibh tortor. Nulla ut felis in neque tempus volutpat ac et justo. Nulla elementum posuere lectus id tincidunt. Phasellus elementum metus arcu, non ultrices odio efficitur ut. Cras tellus quam, vestibulum vel porttitor a, dignissim sit amet dui. Vestibulum varius neque at lacus consequat, nec eleifend orci rhoncus. Praesent viverra non sapien vel blandit. Nulla sollicitudin mauris nisl, id elementum ante blandit in. Praesent interdum elit lorem, ac malesuada purus sollicitudin quis. Nulla condimentum tortor tortor, ac imperdiet tortor faucibus sit amet. Aliquam nibh velit, finibus vel diam sit amet, semper pellentesque libero. Nulla felis nisl, convallis ac molestie eu, pulvinar sit amet libero. Nam nisl arcu, fermentum tristique dui at, tincidunt maximus sem. Phasellus aliquet vestibulum urna eu facilisis. Pellentesque aliquam interdum tortor eu maximus.',
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Normal = Template.bind({});
