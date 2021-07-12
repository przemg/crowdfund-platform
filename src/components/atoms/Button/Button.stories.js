import * as React from 'react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'This is sample button',
  disabled: false,
  bookmark: false,
  active: false,
};

export const Default = () => <Button>Button</Button>;

export const Disabled = () => <Button disabled>This is disabled button</Button>;

export const Bookmark = () => <Button bookmark>Bookmark button</Button>;

export const BookmarkActive = () => (
  <Button bookmark active>
    Bookmark active button
  </Button>
);

// const StyledWrapper = styled.div`
//   display: grid;
//   grid-gap: 12px;
// `;

// const PlaygroundTemplate = ({ disabled, active, ...args }) => (
//   <StyledWrapper>
//     <Button disabled={disabled} {...args} />
//     <Button active={active} icon={BookmarkIcon} {...args} />
//   </StyledWrapper>
// );
// const PrimaryTemplate = (args) => <Button {...args} />;
// const IconTemplate = (args) => <Button icon={BookmarkIcon} {...args} />;

// export const Playground = PlaygroundTemplate.bind({});
// Playground.args = {
//   disabled: false,
//   active: false,
// };

// export const Primary = PrimaryTemplate.bind({});
// Primary.args = {
//   disabled: false,
// };

// export const Icon = IconTemplate.bind({});
// Icon.args = {
//   active: false,
// };
