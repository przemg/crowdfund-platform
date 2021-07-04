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
  error: false,
  inputWidth: '',
};

export const Default = () => <Input />;

export const Price = () => <Input priceLeadingIcon type="number" />;

export const Password = () => <Input passwordShowAction />;

export const Error = () => <Input error />;

export const CustomWidth = () => <Input inputWidth="500" />;
