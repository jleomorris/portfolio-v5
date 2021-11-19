// Types
import { project } from '../../types';
// Components
import ProjectFeature from './components/ProjectFeature';

interface IProps {
  project: project;
}

const ProjectFeatures: React.FC<IProps> = ({ project }) => {
  return (
    <div className='project-features'>
      {project.features.map((feature) => (
        <ProjectFeature feature={feature} />
      ))}
    </div>
  );
};

export default ProjectFeatures;
