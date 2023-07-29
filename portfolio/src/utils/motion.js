export const textVariant = (delay) => {
    return {
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
        },
    },
    };
};

export const mobileNavVariant = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const mobileItemVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};

export const sideBarVariant = {
    open: (height = 100) => ({
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
};
  
export const cloudVariants = (speed) => ({
animate: { x: "-100%", transition: { repeat: Infinity, duration: speed } }
});

export const fadeIn = (direction, type, delay, duration) => {
    return {
    hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
        },
    },
    };
};

export const zoomIn = (delay, duration) => {
    return {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
        },
    },
    };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
        },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
    hidden: {},
    show: {
        transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
        },
    },
    };
};