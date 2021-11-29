import React from 'react';
// Styles
import loaderStyles from '../../../styles/Loader.module.scss';
// Animations
import { motion } from 'framer-motion';
// Components
import CustomImage from './CustomImage';
import Image from 'next/image';

interface IProps {
  imgURL: string;
  variants: any;
  id: '1' | '2' | '3' | '4';
}

const imageStyles = {
  1: 'w-48 h-48 sm:w-96 sm:h-96 border border-red-900',
  2: 'w-48 h-48 sm:h-96 sm:w-96 -ml-12',
  3: 'w-48 h-48 sm:w-96 sm:h-96 -ml-12',
  4: 'w-48 h-48 sm:w-96 sm:h-96 -ml-12',
};

const ImageBlock: React.FC<IProps> = ({
  imgURL,
  variants,
  id,
}): React.ReactElement => {
  return (
    <motion.div
      className={`${loaderStyles.imageBlock} z-50 bg-blackLighter relative border-4 border-yellow-400 p-12 rounded-full ${imageStyles[id]}`}
      variants={variants as any}
    >
      <Image src={imgURL} layout='fill' objectFit='contain' alt='image-block' />
    </motion.div>
  );
};

export default ImageBlock;
