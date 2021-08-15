import * as React from 'react';
import Dropdown from '.';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
};

// eslint-disable-next-line react/prop-types
const Template = ({ label, children: itemsList }) => (
  <Dropdown>
    <Dropdown.Button>{label}</Dropdown.Button>
    <Dropdown.List>
      {itemsList.map(({ type, to, onClick, children }) => (
        <Dropdown.Item type={type} to={to} onClick={onClick}>
          {children}
        </Dropdown.Item>
      ))}
    </Dropdown.List>
  </Dropdown>
);

export const Playground = Template.bind({});

Playground.args = {
  label: 'Playground dropdown',
  children: [
    { type: 'link', to: '/option1', onClick: null, children: 'Option 1' },
    { type: 'button', to: '', onClick: () => {}, children: 'Option 2' },
  ],
};

export const Default = () => (
  <Dropdown>
    <Dropdown.Button>Default dropdown</Dropdown.Button>
    <Dropdown.List>
      <Dropdown.Item type="link" to="/dashboard">
        Option 1 as Link
      </Dropdown.Item>
      <Dropdown.Item type="link" to="/home">
        Option 2 as Link
      </Dropdown.Item>
      <Dropdown.Item type="button">Option 3 as Button</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);
