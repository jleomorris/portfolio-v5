import { GetStaticPaths, GetStaticProps } from 'next';
import { getProjectData, getAllProjectIds } from '../../lib/projects';
// Components
import ProjectHeader from '../../components/ProjectHeader';
import Head from 'next/head';
import Link from 'next/link';

interface IProps {
  projectData: {
    link: string;
    subTitle: string;
    title: string;
    backgroundColor: string;
    textColor: string;
    headerTextColor: string;
    headerImgURL: string;
    sectionImgURL: string;
  };
}

const Project: React.FC<IProps> = ({ projectData }) => {
  console.log('projectData.props', projectData);

  return (
    <>
      <Head>
        <title>{`Portfolio | ${projectData.subTitle}`}</title>
      </Head>
      <ProjectHeader project={projectData} />
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
