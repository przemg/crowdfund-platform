import * as React from 'react';
import { useAuth } from 'context/AuthContext';
import NavBar from '.';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  parameters: {
    storyBackground: {
      defaultValue: 'black',
      basedOnArg: 'color',
      values: [{ argValue: 'black', value: 'white' }],
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ isAuthenticated, ...rest }) => {
  const { login, logout } = useAuth();

  if (isAuthenticated === true) login();
  if (isAuthenticated === false) logout();

  return <NavBar {...rest} />;
};

export const Playground = Template.bind({});

Playground.argTypes = {
  color: {
    options: ['white', 'black'],
    control: {
      type: 'select',
    },
  },
};

Playground.args = {
  color: 'white',
  isAuthenticated: false,
};

export const BlackUnauthenticated = () => {
  const { logout } = useAuth();
  logout();

  return <NavBar color="black" />;
};

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
BlackUnauthenticated.args = { color: 'black' };

export const BlackAuthenticated = () => {
  const { login } = useAuth();
  login();

  return <NavBar color="black" />;
};

// This must be set for the StoryBackgroundDecorator to correctly set the background color of story
BlackAuthenticated.args = { color: 'black' };

export const WhiteUnauthenticated = () => {
  const { logout } = useAuth();
  logout();

  return <NavBar color="white" />;
};

export const WhiteAuthenticated = () => {
  const { login } = useAuth();
  login();

  return <NavBar color="white" />;
};
