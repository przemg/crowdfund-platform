import * as React from 'react';
import Label from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Label ',
};

export const Defaul = () => <Label>This is default label</Label>;
