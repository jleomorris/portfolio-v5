import { useEffect } from 'react';
// Components
import ProjectSection from '../../components/ProjectSection';
// Utils
import { setBackgroundColor } from '../../utils';
import { projectData } from '../../lib/projectData';

const Projects = () => {
  // Set bg color based on first project
  useEffect(() => {
    const targetColor = projectData()[0].backgroundColor;
    setBackgroundColor(targetColor);
    return () => {
      setBackgroundColor('#f2c744');
    };
  }, []);

  return (
    <div className='projects'>
      {projectData().map((project, index) => (
        <ProjectSection key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
