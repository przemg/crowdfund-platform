import * as React from 'react';
import ProgressBar from '.';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  max: 100,
  value: 30,
};

export const Default = () => <ProgressBar value={50} max={100} />;
