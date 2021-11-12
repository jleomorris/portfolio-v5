import Head from 'next/head';
import Link from 'next/link';
// import Layout from '../../components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getProjectData, getAllProjectIds } from '../../lib/projects';

interface IProps {
  projectData: {
    subTitle: string;
    title: string;
    backgroundColor: string;
    textColor: string;
    imgUrl: string;
  };
}

const Project: React.FC<IProps> = ({ projectData }) => {
  console.log('projectData.props', projectData);

  return (
    <>
      <Head>
        <title>{`Portfolio | ${projectData.subTitle}`}</title>
      </Head>
      <p>Project: {projectData.subTitle}</p>
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
