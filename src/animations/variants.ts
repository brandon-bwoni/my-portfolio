// Modern animation variants with reduced motion support
const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeInUp = {
  initial: {
    y: reduceMotion ? 0 : 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: reduceMotion ? 0.1 : 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  initial: {
    y: reduceMotion ? 0 : -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: reduceMotion ? 0.1 : 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInFromLeft = {
  initial: {
    x: reduceMotion ? 0 : -30,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: reduceMotion ? 0.1 : 0.5,
      ease: "easeInOut"
    }
  }
};

export const slideInFromRight = {
  initial: {
    x: reduceMotion ? 0 : 30,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: reduceMotion ? 0.1 : 0.5,
      ease: "easeInOut"
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.15
    }
  }
};

export const hoverScale = {
  hover: {
    scale: reduceMotion ? 1 : 1.05,
    transition: {
      duration: reduceMotion ? 0 : 0.2
    }
  }
};

export const serviceHover = {
  hover: {
    scale: reduceMotion ? 1 : 1.02,
    boxShadow: reduceMotion ? "none" : "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: reduceMotion ? 0 : 0.2
    }
  }
};

// New optimized variants for modern web animations
export const smoothFadeIn = {
  initial: { 
    opacity: 0,
    y: reduceMotion ? 0 : 15
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0.1 : 0.4,
      ease: [0.25, 0.25, 0, 1] // Custom cubic-bezier for smooth easing
    }
  }
};

export const gentleHover = {
  hover: {
    y: reduceMotion ? 0 : -2,
    scale: reduceMotion ? 1 : 1.01,
    transition: {
      duration: reduceMotion ? 0 : 0.15,
      ease: "easeOut"
    }
  }
};

export const buttonPress = {
  tap: {
    scale: reduceMotion ? 1 : 0.98,
    transition: {
      duration: reduceMotion ? 0 : 0.1
    }
  }
};
