import { projectData } from './projectData';

export function getAllProjectData() {
  return projectData;
}

export function getProjectData(id: string) {
  const filteredProject = projectData.filter(
    (project) => project.subTitle === id.replace('_', ' ')
  )[0];

  return filteredProject;
}

export function getAllProjectIds() {
  return projectData.map((project) => {
    return {
      params: {
        id: project.subTitle.replace(' ', '_'),
      },
    };
  });
}
