export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const accordionPanel = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};
