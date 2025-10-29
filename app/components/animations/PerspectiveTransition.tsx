'use client';

import { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface PerspectiveTransitionProps {
  children: ReactNode;
  className?: string;
}

const PerspectiveTransition = memo(function PerspectiveTransition({ children, className = '' }: PerspectiveTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6, // Reduced from 1
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ 
        willChange: isInView ? 'auto' : 'transform, opacity',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default PerspectiveTransition;
