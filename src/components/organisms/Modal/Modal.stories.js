import * as React from 'react';
import Card from 'components/molecules/Card';
import styled from 'styled-components';
import Modal from '.';

export default {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: {
    storyPadding: false,
  },
};

const Template = (args) => <Modal {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  isOpen: true,
  hasCloseButton: true,
  title: '',
  description: '',
  children: <p>Example content</p>,
  setIsOpen: () => {},
};

export const Default = () => (
  <Modal isOpen setIsOpen={() => {}}>
    <p>Content of Default Modal</p>
  </Modal>
);

export const WithoutCloseButton = () => (
  <Modal isOpen hasCloseButton={false} setIsOpen={() => {}}>
    <p>Content of Without Close Button Modal</p>
  </Modal>
);

export const Described = () => (
  <Modal
    isOpen
    title="Desscribed Modal Title"
    description="Sample described modal description"
    setIsOpen={() => {}}
  >
    <p>Content of Described Modal</p>
  </Modal>
);

// Data for WithComplexChildren story
const data = [
  {
    id: 'no-reward',
    radioName: 'no-reward',
    title: 'Pledge with no reward',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin.',
    actionButtonLabel: 'Continue',
  },
  {
    id: 'bamboo',
    radioName: 'bamboo',
    title: 'Bamboo Stand',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin.',
    actionButtonLabel: 'Continue',
    minPledge: 25,
    numberOfLeft: 101,
  },
  {
    id: 'black-edition',
    radioName: 'black-edition',
    title: 'Black Edition Stand',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin.',
    actionButtonLabel: 'Continue',
    minPledge: 75,
    numberOfLeft: 64,
  },
  {
    id: 'mahogany',
    radioName: 'mahogany',
    title: 'Mahogany Special Edition',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin.',
    actionButtonLabel: 'Continue',
    minPledge: 200,
    numberOfLeft: 0,
  },
];

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
`;

export const WithComplexChildren = () => {
  const [checkedName, setCheckedName] = React.useState('');

  const handleToggle = ({ target: { name } }) => {
    setCheckedName(name);
  };

  return (
    <Modal
      isOpen
      title="Complex children data"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere ante quis dui dapibus. eget malesuada orci porta. Ut sed purus eget tellus porta facilisis sed eu risus."
      setIsOpen={() => {}}
    >
      <StyledWrapper>
        {data.map(
          ({ id, radioName, title, description, actionButtonLabel, minPledge, numberOfLeft }) => (
            <Card
              key={id}
              id={id}
              radioName={radioName}
              title={title}
              description={description}
              actionButtonLabel={actionButtonLabel}
              minPledge={minPledge}
              numberOfLeft={numberOfLeft}
              checkedName={checkedName}
              handleToggle={handleToggle}
            />
          ),
        )}
      </StyledWrapper>
    </Modal>
  );
};
