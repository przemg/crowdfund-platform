import * as React from 'react';
import Cardinal from '.';

export default {
  title: 'Molecules/Cardinal',
  component: Cardinal,
};

const Template = (args) => <Cardinal {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  value: 5007,
  description: 'total backers',
  priceFormat: false,
};

export const Default = () => <Cardinal value={56} description="days left" />;

export const PriceFormat = () => (
  <Cardinal value={78000} description="of $100,000 backed" priceFormat />
);
