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
  1: 'w-96 h-96 left-96 top-24',
  2: 'h-120 w-120 right-96 top-52',
  3: 'w-200 h-200 left-96 bottom-8',
  4: 'w-220 h-220 right-96 bottom-8',
};

const ImageBlock: React.FC<IProps> = ({
  imgURL,
  variants,
  id,
}): React.ReactElement => {
  return (
    <motion.div
      className={`${loaderStyles.imageBlock} z-50 absolute ${imageStyles[id]}`}
      variants={variants as any}
    >
      <Image src={imgURL} layout='fill' objectFit='contain' alt='image-block' />
    </motion.div>
  );
};

export default ImageBlock;
