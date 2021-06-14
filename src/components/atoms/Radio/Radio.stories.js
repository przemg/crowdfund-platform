import * as React from 'react';
import styled from 'styled-components';
import Radio from '.';

export default {
  title: 'Atoms/Radio',
  component: Radio,
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
`;

export const Playground = () => (
  <StyledWrapper>
    <Radio name="storybook" />
    <Radio name="storybook" checked />
    <Radio name="storybook" disabled />
  </StyledWrapper>
);

const Template = (args) => <Radio {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  checked: false,
  disabled: false,
};
