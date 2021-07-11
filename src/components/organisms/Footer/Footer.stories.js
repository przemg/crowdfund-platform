import * as React from 'react';
import Footer from '.';

export default {
  title: 'Organisms/Footer',
  component: Footer,
};

const sampleNavItems = [
  { to: '/about', label: 'About' },
  { to: '/discover', label: 'Discover' },
  { to: '/get-started', label: 'Get Started' },
];

const Template = (args) => <Footer {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  onlyCopy: false,
  navItems: sampleNavItems,
};

export const Default = () => <Footer />;

export const WithNav = () => <Footer navItems={sampleNavItems} />;

export const OnlyCopy = () => <Footer onlyCopy />;
