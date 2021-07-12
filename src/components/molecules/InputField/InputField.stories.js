import * as React from 'react';
import InputField from '.';

export default {
  title: 'Molecules/InputField',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  id: 'playground-input',
  label: 'Example label',
  error: '',
  singleColumn: false,
};

export const Default = () => <InputField id="default-input" label="Default input" />;

export const Error = () => (
  <InputField id="error-input" label="Error input" error="Sample error message" />
);

export const SingleColumn = () => (
  <InputField singleColumn id="single-column-input" label="Single column input" />
);

export const SingleColumnError = () => (
  <InputField
    singleColumn
    id="single-column-input"
    label="Single column input"
    error="Sample error message"
  />
);
