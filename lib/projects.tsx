import { projectData } from './projectData';

export function getAllProjectData() {
  return projectData;
}

export function getProjectData(id: string) {
  const filteredProject = projectData().filter(
    (project) => project.link === id
  )[0];

  return filteredProject;
}

export function getAllProjectIds() {
  return projectData().map((project) => {
    return {
      params: {
        id: project.link,
      },
    };
  });
}
