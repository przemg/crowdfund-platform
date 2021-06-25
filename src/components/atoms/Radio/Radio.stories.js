import * as React from 'react';

import Radio from '.';

export default {
  title: 'Atoms/Radio',
  component: Radio,
};

const Template = (args) => <Radio readOnly {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  checked: false,
  disabled: false,
};

export const Default = () => <Radio readOnly />;

export const Checked = () => <Radio readOnly checked />;

export const Disabled = () => (
  <>
    <Radio readOnly disabled />
    <Radio readOnly disabled checked />
  </>
);
