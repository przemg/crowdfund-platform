import * as React from 'react';
import Card from '.';

export default {
  title: 'Molecules/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  id: 'playground-card',
  title: 'Example card title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis.',
  actionButtonLabel: 'Action button',
  minPledge: null,
  numberOfLeft: null,
  radioName: '',
  checkedName: '',
};

export const Default = () => (
  <Card
    id="default-card"
    title="Title of default card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Default action"
  />
);

export const RewardCard = () => (
  <Card
    id="reward-card"
    title="Title of Reward Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Select Reward"
    minPledge={25}
    numberOfLeft={60}
  />
);

export const RewardCardOutOfStock = () => (
  <Card
    id="reward-card"
    title="Title of Reward Card Out of stock"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Select Reward"
    minPledge={200}
    numberOfLeft={0}
  />
);

export const RadioCard = () => (
  <Card
    id="radio-card"
    radioName="radio-card"
    title="Title of Radio Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Continue"
    minPledge={25}
    numberOfLeft={60}
  />
);

export const RadioCardOutOfStock = () => (
  <Card
    id="radio-card"
    radioName="radio-card-out-of-stock"
    title="Title of Radio Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Continue"
    minPledge={25}
    numberOfLeft={0}
  />
);

export const RadioCardSelected = () => (
  <Card
    id="radio-card"
    radioName="radio-selected"
    checkedName="radio-selected"
    title="Title of Radio Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
    actionButtonLabel="Continue"
    minPledge={25}
    numberOfLeft={10}
  />
);
