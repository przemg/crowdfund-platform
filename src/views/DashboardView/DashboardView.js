import * as React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import Card from 'components/molecules/Card';
import { useAuth } from 'context/AuthContext';
import { routes } from 'routes';

const DashboardView = () => {
  const { account } = useAuth();

  return (
    <DashboardTemplate>
      <DashboardTemplate.Heading>
        Welcome {`${account.name}! `}
        <span role="img" aria-label="Waving hand icon">
          👋
        </span>
      </DashboardTemplate.Heading>
      <DashboardTemplate.Section
        title="Your leatest projects"
        action={{ to: routes.dashboardProjects, label: 'See all your projects' }}
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
};

export default DashboardView;
