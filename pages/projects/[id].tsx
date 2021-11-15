import { GetStaticPaths, GetStaticProps } from 'next';
import { getProjectData, getAllProjectIds } from '../../lib/projects';
// Types
import { project } from '../../types';
// Components
import ProjectHeader from '../../components/ProjectHeader';
import Head from 'next/head';
import Link from 'next/link';
import ProjectDescription from '../../components/ProjectDescription';
import ProjectChallenge from '../../components/ProjectChallenge';

interface IProps {
  projectData: project;
}

const Project: React.FC<IProps> = ({ projectData }) => {
  console.log('projectData.props', projectData);

  return (
    <>
      <Head>
        <title>{`Portfolio | ${projectData.subTitle}`}</title>
      </Head>
      <ProjectHeader project={projectData} />
      <ProjectDescription project={projectData} />
      <ProjectChallenge project={projectData} />
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
