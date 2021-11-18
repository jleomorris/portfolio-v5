// Types
import { project } from '../../types';
// Utils
import { setBackgroundColor } from '../../utils';
// Hooks
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
// Components
import ProjectFeature from './components/ProjectFeature';

interface IProps {
  project: project;
}

const ProjectFeatures: React.FC<IProps> = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    console.log('ProjectFeatures.inView', inView);

    if (inView === true) {
      console.log(
        `Project features (${project.backgroundColor}) component is visible`
      );

      const targetColor = project.backgroundColor;
      setBackgroundColor(targetColor);
    }

    if (inView === false) {
      console.log(
        `Project features (${project.backgroundColor}) component isn't visible`
      );
      setBackgroundColor('#FFFFFF');
    }
  }, [inView]);

  return (
    <div className='project-features' ref={ref}>
      {project.features.map((feature) => (
        <ProjectFeature feature={feature} />
      ))}
    </div>
  );
};

export default ProjectFeatures;
