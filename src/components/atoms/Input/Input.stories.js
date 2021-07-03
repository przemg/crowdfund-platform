import * as React from 'react';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  priceLeadingIcon: false,
  passwordShowAction: false,
};

export const Default = () => <Input />;

export const Price = () => <Input priceLeadingIcon type="number" />;

export const Password = () => <Input passwordShowAction />;
