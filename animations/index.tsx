export const containerAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 200,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollRevealRight = {
  hidden: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const homeHeaderAnimation = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const navAnimation = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const aboutRotation = {
  hidden: {
    rotate: 5,
    y: 150,
  },
  show: {
    rotate: 0,
    y: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      type: 'spring',
      bounce: 0.6,
      ease: 'easeOut',
      duration: 1,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};
