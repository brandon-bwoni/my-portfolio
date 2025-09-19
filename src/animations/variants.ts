export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInFromLeft = {
  initial: {
    x: -30,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const slideInFromRight = {
  initial: {
    x: 30,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const hoverScale = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

export const serviceHover = {
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.2
    }
  }
};
