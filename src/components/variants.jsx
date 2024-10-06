export const fadeIn = ({ direction, delay = 0 }) => {
    return {
      hidden: {
        y: direction === 'up' ? 150 : direction === 'down' ? -150 : 0,
        x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 2, // increased duration
          delay: delay,
          ease: [0.4, 0, 0.2, 1], // more pronounced easing for smooth effect
        },
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 2, // increased duration
          delay: delay,
          ease: [0.4, 0, 0.2, 1], // more pronounced easing
        },
      },
    };
  };
  