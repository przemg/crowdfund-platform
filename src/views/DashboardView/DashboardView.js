import * as React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import ProjectCard from 'components/molecules/ProjectCard';
import { useAuth } from 'context/AuthContext';
import { routes } from 'routes';
import { useFetch } from 'context/FetchContext';
import Dropdown from 'components/molecules/Dropdown';
import { generatePath } from 'react-router';

const DashboardView = () => {
  const [latestProjects, setLatestProjects] = React.useState();
  const [latestProjectsLoading, setLatestProjectsLoading] = React.useState(true);
  const { account } = useAuth();
  const { axiosInstance } = useFetch();

  React.useEffect(() => {
    const getLatestProjectsData = async () => {
      try {
        setLatestProjectsLoading(true);

        const {
          data: { data },
        } = await axiosInstance.get(`/accounts/${account._id}/projects?limit=3`);

        setLatestProjects(data);
        setLatestProjectsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestProjectsData();
  }, [axiosInstance, account._id]);

  return (
    <DashboardTemplate>
      <DashboardTemplate.Heading>
        Welcome {`${account.name}! `}
        <span role="img" aria-label="Waving hand icon">
          👋
        </span>
      </DashboardTemplate.Heading>
      <DashboardTemplate.Section
        title="Your latest projects"
        action={{ to: routes.dashboardProjects, label: 'See all your projects' }}
      >
        {latestProjectsLoading
          ? 'Loding'
          : latestProjects.map(({ _id, title, about, photo, brandLogo, brandColor }) => (
              <ProjectCard
                key={_id}
                title={title}
                about={about}
                photo={photo}
                brandLogo={brandLogo}
                brandColor={brandColor}
                action={
                  <Dropdown>
                    <Dropdown.Button>Manage project</Dropdown.Button>
                    <Dropdown.List>
                      <Dropdown.Item
                        type="link"
                        to={generatePath(routes.projectDetails, { projectId: _id })}
                      >
                        Show project
                      </Dropdown.Item>
                      <Dropdown.Item
                        type="link"
                        to={generatePath(routes.editProject, { projectId: _id })}
                      >
                        Edit project
                      </Dropdown.Item>
                      <Dropdown.Item type="button">Delete project</Dropdown.Item>
                    </Dropdown.List>
                  </Dropdown>
                }
              />
            ))}
      </DashboardTemplate.Section>
    </DashboardTemplate>
  );
};

export default DashboardView;
