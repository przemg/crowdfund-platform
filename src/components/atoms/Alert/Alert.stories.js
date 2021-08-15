import * as React from 'react';
import Alert from '.';

export default {
  title: 'Atoms/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  type: {
    options: ['error', 'success'],
    control: {
      type: 'select',
    },
  },
};

Playground.args = {
  children: 'Sample error message',
  type: 'error',
  box: false,
};

export const Error = () => <Alert type="error">This is error message</Alert>;

export const ErrorBox = () => (
  <Alert box type="error">
    This is error box message
  </Alert>
);

export const Success = () => <Alert type="success">This is success message</Alert>;

export const SuccessBox = () => (
  <Alert box type="success">
    This is success box message
  </Alert>
);
