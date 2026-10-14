import { useLayoutEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  hidden: ({ y }) => ({ opacity: 0, y }),
  visible: ({ delay }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Reveal = ({ as = "div", delay = 0, y = 20, children, ...rest }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [inViewAtMount, setInViewAtMount] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top < window.innerHeight) {
      setInViewAtMount(true);
    }
  }, []);

  // Content already on screen (or with reduced motion) renders as a plain
  // element; the swap happens in a layout effect, so before first paint.
  if (reduceMotion || inViewAtMount) {
    const Tag = as;
    return <Tag {...rest}>{children}</Tag>;
  }

  const Component = m[as];
  return (
    <Component
      ref={ref}
      custom={{ delay, y }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Component>
  );
};

Reveal.propTypes = {
  as: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
  children: PropTypes.node,
};

export default Reveal;
