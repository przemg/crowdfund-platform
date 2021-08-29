import * as React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import { routes } from 'routes';
import { useFetch } from 'context/FetchContext';
import { useAuth } from 'context/AuthContext';
import ProjectCard from 'components/molecules/ProjectCard';
import Dropdown from 'components/molecules/Dropdown';
import { generatePath } from 'react-router';

const DashboardProjectsView = () => {
  const [projects, setProjects] = React.useState();
  const [projectsLoading, setProjectsLoading] = React.useState(true);
  const { account } = useAuth();
  const { axiosInstance } = useFetch();

  React.useEffect(() => {
    const getProjectsData = async () => {
      try {
        setProjectsLoading(true);

        const {
          data: { data },
        } = await axiosInstance.get(`/accounts/${account._id}/projects`);

        setProjects(data);
        setProjectsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProjectsData();
  }, [axiosInstance, account._id]);

  return (
    <DashboardTemplate>
      <DashboardTemplate.Section
        title="Your all projects"
        action={{ to: routes.dashboard, label: 'Create new project' }}
      >
        {projectsLoading
          ? 'Loding'
          : projects.map(({ _id, title, about, photo, brandLogo, brandColor }) => (
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

export default DashboardProjectsView;
