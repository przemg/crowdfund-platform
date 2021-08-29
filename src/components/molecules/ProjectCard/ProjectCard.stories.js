import * as React from 'react';
import LogoBlack from 'assets/brand/logo-black.svg';
import BgChairs from 'assets/bg/bg-chairs.jpg';
import Button from 'components/atoms/Button';
import Dropdown from 'components/molecules/Dropdown';
import ProjectCard from '.';

export default {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  parameters: {
    storyBackground: {
      defaultValue: 'gray',
    },
  },
};

const Template = (args) => <ProjectCard {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  brandLogo: {
    control: {
      type: 'file',
    },
  },
  photo: {
    control: {
      type: 'file',
    },
  },
  brandColor: {
    control: {
      type: 'color',
    },
  },
};

Playground.args = {
  brandLogo: LogoBlack,
  brandColor: '#fff',
  photo: BgChairs,
  title: 'Playground project card',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in massa rhoncus nunc porta eleifend. Morbi sit amet enim eros. Aliquam commodo tincidunt sapien vel ornare. Maecenas enim dui, vehicula vel faucibus sed, rutrum nec magna.',
  action: <Button>Details</Button>,
};

export const Default = () => (
  <ProjectCard
    title="Default project card"
    about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in massa rhoncus nunc porta eleifend. Morbi sit amet enim eros. Aliquam commodo tincidunt sapien vel ornare. Maecenas enim dui, vehicula vel faucibus sed, rutrum nec magna."
    photo={BgChairs}
    brandLogo={LogoBlack}
    brandColor="#fff"
    action={<Button>Details</Button>}
  />
);

export const DropdownAction = () => (
  <ProjectCard
    title="Default project card"
    about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in massa rhoncus nunc porta eleifend. Morbi sit amet enim eros. Aliquam commodo tincidunt sapien vel ornare. Maecenas enim dui, vehicula vel faucibus sed, rutrum nec magna."
    photo={BgChairs}
    brandLogo={LogoBlack}
    brandColor="#fff"
    action={
      <Dropdown>
        <Dropdown.Button>Manage project</Dropdown.Button>
        <Dropdown.List>
          <Dropdown.Item type="link" to="/project-id">
            Show project
          </Dropdown.Item>
          <Dropdown.Item type="link" to="/project-id/edit">
            Edit project
          </Dropdown.Item>
          <Dropdown.Item type="button">Delete project</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    }
  />
);
