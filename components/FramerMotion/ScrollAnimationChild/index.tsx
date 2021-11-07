import { ReactNode, useEffect, useState } from 'react';
// Animation
import { motion, AnimateSharedLayout } from 'framer-motion';
import * as animationsImport from '../../../animations';

interface IProps {
  children: ReactNode;
  variant: Variant;
  animate?: any;
  elRef?: any;
}

export enum Variant {
  PAGE,
  FADEUP,
  SCROLLREVEALRIGHT,
  ABOUTROTATION,
}

const animations: { [key: string]: any } = animationsImport;

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PAGE]: 'pageAnimation',
  [Variant.FADEUP]: 'fadeUp',
  [Variant.SCROLLREVEALRIGHT]: 'scrollRevealRight',
  [Variant.ABOUTROTATION]: 'aboutRotation',
};

const ScrollAnimationChild: React.FC<IProps> = ({
  children,
  variant,
  animate,
  elRef,
}) => {
  return (
    <AnimateSharedLayout>
      <motion.main
        variants={animations[VARIANT_MAPS[variant]]} // Pass the variant object into Framer Motion
        transition={{ type: 'linear' }} // Set the transition to linear
        className='w-full scroll-animation-child'
        animate={animate}
        ref={elRef}
        initial={animate ? 'hidden' : 'show'}
      >
        {children}
      </motion.main>
    </AnimateSharedLayout>
  );
};

export default ScrollAnimationChild;
