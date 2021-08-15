import * as React from 'react';
import Footer from '.';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    storyPadding: {
      customPadding: {
        paddingTop: '40px',
        paddingLeft: '0',
        paddingRight: '0',
      },
    },
    storyBackground: {
      defaultValue: 'gray',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  onlyCopy: false,
};

export const Default = () => <Footer />;

export const OnlyCopy = () => <Footer onlyCopy />;
