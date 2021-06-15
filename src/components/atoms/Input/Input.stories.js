import * as React from 'react';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Normal = () => <Input type="text" />;
export const Price = () => <Input type="number" priceLeadingIcon />;
export const Password = () => <Input type="password" passwordShowAction />;
