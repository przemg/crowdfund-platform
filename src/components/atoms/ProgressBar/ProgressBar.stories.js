import * as React from 'react';
import ProgressBar from '.';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  args: {
    max: 100000,
    value: 65000,
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Normal = Template.bind({});
