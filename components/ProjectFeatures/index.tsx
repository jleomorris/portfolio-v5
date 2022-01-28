// Types
import { project } from '../../types';
// Components
import ProjectFeature from './components/ProjectFeature';

interface IProps {
  project: project;
  inView: boolean;
}

const ProjectFeatures: React.FC<IProps> = ({ project, inView }) => {
  return (
    <div className='project-features mt-20 md:mt-0'>
      {project.features.map((feature) => (
        <ProjectFeature
          key={feature.title}
          project={project}
          feature={feature}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default ProjectFeatures;
