// Types
import { project } from '../../types';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';

interface IProps {
  project: project;
  inView: boolean;
}

const ProjectSerTeamAtt: React.FC<IProps> = ({ project, inView }) => {
  return (
    <div className='project-services-team-attributions'>
      <PageContainer
        variant={Variant.TIGHT}
        noFlex={false}
        // bgColor='bg-white'
        noFullHeight
      >
        <div
          className={`${
            inView === true ? project.textColor : ''
          } flex justify-between w-full font-sans font-bold tracking-widest uppercase border border-blue-900 h-180`}
        >
          <div className='w-1/4 border border-red-900'>
            <h2 className='mb-10 font-sans text-xl font-bold tracking-widest uppercase'>
              Services
            </h2>
            <div className='space-y-3 font-normal normal-case'>
              {project.services.map((service) => (
                <p className='text-2xl' key={service}>
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className='w-1/4 border border-red-900'>
            <h2 className='mb-10 text-xl'>Team</h2>
            <div className='space-y-3 font-normal normal-case'>
              {project.team.map((teamMember) => (
                <p
                  className='text-2xl'
                  key={teamMember.name}
                >{`${teamMember.name} | ${teamMember.role}`}</p>
              ))}
            </div>
          </div>
          <div className='w-1/4 border border-red-900'>
            <h2 className='mb-10 font-sans text-xl font-bold tracking-widest uppercase'>
              Attributions
            </h2>
            <div className='space-y-3 font-normal normal-case'>
              {project.attributions.map((attribution) => (
                <p
                  className='text-2xl'
                  key={attribution.name}
                >{`${attribution.name} | ${attribution.role}`}</p>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default ProjectSerTeamAtt;
