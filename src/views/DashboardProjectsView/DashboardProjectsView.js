import * as React from 'react';
import Card from 'components/molecules/Card';
import DashboardTemplate from 'templates/DashboardTemplate';
import { routes } from 'routes';

const DashboardProjectsView = () => (
  <DashboardTemplate>
    <DashboardTemplate.Section
      title="Your all projects"
      action={{ to: routes.dashboard, label: 'Create new project' }}
    >
      <Card
        id="default-card"
        title="Title of default card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
        actionButtonLabel="Default action"
      />
      <Card
        id="default-card"
        title="Title of default card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
        actionButtonLabel="Default action"
      />
      <Card
        id="default-card"
        title="Title of default card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
        actionButtonLabel="Default action"
      />
    </DashboardTemplate.Section>
  </DashboardTemplate>
);

export default DashboardProjectsView;
