import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.5 });
  //   console.log("in view", view);

  if (inView) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
};
