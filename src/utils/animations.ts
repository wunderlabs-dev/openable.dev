const entranceInitial = {
  opacity: 0,
  y: 6,
} as const;

const entranceAnimate = {
  opacity: 1,
  y: 0,
} as const;

const entranceTransition = {
  duration: 0.6,
  ease: [0.25, 1, 0.5, 1],
} as const;

const accordionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
} as const;

const accordionTransition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
} as const;

const lavaBlobPrimaryAnimate = {
  x: [0, 120, -80, 40, 0],
  y: [0, -100, 60, -40, 0],
  scale: [1, 1.3, 0.8, 1.15, 1],
  rotate: [0, 25, -20, 10, 0],
};

const lavaBlobPrimaryTransition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

const lavaBlobSecondaryAnimate = {
  x: [0, -100, 80, -60, 0],
  y: [0, 80, -70, 50, 0],
  scale: [1, 0.8, 1.3, 0.9, 1],
  rotate: [0, -20, 15, -25, 0],
};

const lavaBlobSecondaryTransition = {
  duration: 13,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

const navIndicatorHidden = {
  opacity: 0,
} as const;

const navIndicatorVisible = {
  opacity: 1,
} as const;

const navIndicatorTransition = {
  type: "spring",
  stiffness: 150,
  damping: 18,
} as const;

const browserPanelInitial = {
  y: 0,
} as const;

const browserPanelWhileHover = {
  y: -70,
} as const;

const browserPanelTransition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
} as const;

export {
  entranceInitial,
  entranceAnimate,
  entranceTransition,
  accordionVariants,
  accordionTransition,
  lavaBlobPrimaryAnimate,
  lavaBlobPrimaryTransition,
  lavaBlobSecondaryAnimate,
  lavaBlobSecondaryTransition,
  navIndicatorHidden,
  navIndicatorVisible,
  navIndicatorTransition,
  browserPanelInitial,
  browserPanelWhileHover,
  browserPanelTransition,
};
