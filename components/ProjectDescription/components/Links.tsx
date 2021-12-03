// Types
import { project } from '../../../types';
// Animation
import { motion } from 'framer-motion';
// Components
import Link from 'next/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  project: project;
}

const imageVariants = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: 1.15,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      bounce: 0.7,
      duration: 2,
    },
  },
};

const Links: React.FC<IProps> = ({ project }) => {
  return (
    <div className='flex w-full space-x-20 mt-28 links'>
      {project.links.map((link) => (
        <Link href={link.href} key={link.title}>
          <a target='_blank'>
            <motion.div
              variants={imageVariants}
              whileHover='whileHover'
              initial='initial'
              className='font-sans text-2xl font-semibold tracking-widest uppercase cursor-pointer'
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className='mr-2 text-xl'
              />
              {link.title}
            </motion.div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;
