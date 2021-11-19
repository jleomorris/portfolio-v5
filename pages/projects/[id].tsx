// Hooks
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Lib
import { getProjectData, getAllProjectIds } from '../../lib/projects';
// Types
import { project } from '../../types';
// Utils
import { setBackgroundColor } from '../../utils';
// Components
import { GetStaticPaths, GetStaticProps } from 'next';
import ProjectHeader from '../../components/ProjectHeader';
import Head from 'next/head';
import Link from 'next/link';
import ProjectDescription from '../../components/ProjectDescription';
import ProjectChallenge from '../../components/ProjectChallenge';
import ProjectFeatures from '../../components/ProjectFeatures';
import ProjectSerTeamAtt from '../../components/ProjectSerTeamAtt';

interface IProps {
  projectData: project;
}

const Project: React.FC<IProps> = ({ projectData }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    console.log('ProjectFeaturesSerTeamAttContainer.inView', inView);

    if (inView === true) {
      console.log(
        `Project features and serTeamAtt container (${projectData.backgroundColor}) component is visible`
      );

      const targetColor = projectData.backgroundColor;
      setBackgroundColor(targetColor);
    }

    if (inView === false) {
      console.log(
        `Project features and serTeamAtt container (${projectData.backgroundColor}) component isn't visible`
      );
      setBackgroundColor('#FFFFFF');
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>{`Portfolio | ${projectData.subTitle}`}</title>
      </Head>
      <ProjectHeader project={projectData} />
      <ProjectDescription project={projectData} />
      <ProjectChallenge project={projectData} />
      <div className='features-serteamatt-container' ref={ref}>
        <ProjectFeatures project={projectData} />
        <ProjectSerTeamAtt project={projectData} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('post.getStaticProps.params', params);
  const projectData = await getProjectData(params!.id as string);

  console.log('post.getStaticProps.projectData', projectData);

  return {
    props: {
      projectData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();

  console.log('post.getStaticPaths.paths', paths);

  return {
    paths,
    fallback: false,
  };
};

export default Project;
