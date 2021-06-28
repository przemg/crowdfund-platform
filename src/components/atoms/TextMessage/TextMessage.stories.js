import * as React from 'react';
import TextMessage from '.';

export default {
  title: 'Atoms/TextMessage',
  component: TextMessage,
};

const Template = (args) => <TextMessage {...args} />;

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
};

export const Error = () => <TextMessage type="error">This is error message</TextMessage>;

export const Success = () => <TextMessage type="success">This is success message</TextMessage>;
