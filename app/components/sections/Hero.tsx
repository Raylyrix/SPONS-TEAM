'use client';

import { motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';

interface HeroProps {
  titleRef?: React.RefObject<HTMLDivElement | null>;
  navbarTitleSlotRef?: React.RefObject<HTMLDivElement | null>;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ titleRef }, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const localTitleRef = useRef<HTMLDivElement>(null);
  const kshitijTextRef = useRef<HTMLSpanElement>(null);

  // Use forwarded ref or local ref
  const mergedSectionRef = (ref as React.RefObject<HTMLDivElement>) || sectionRef;
  const mergedTitleRef = titleRef || localTitleRef;

  return (
    <section ref={mergedSectionRef} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Semi-transparent backdrop for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Foreground content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Static title */}
          <motion.div 
            ref={mergedTitleRef}
            className="mb-6 relative z-10"
          >
            <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
              <motion.span 
                ref={kshitijTextRef}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 whitespace-nowrap"
                style={{
                  textShadow: '0 0 30px rgba(220, 38, 38, 0.4)',
                  filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.3))',
                }}
              >
                KSHITIJ
              </motion.span>
              <motion.div
                className="h-12 md:h-16 lg:h-20 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              />
              <motion.span 
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white/90"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                }}
              >
                2026
              </motion.span>
            </div>
          </motion.div>
          <p className="text-subtitle text-white/80 italic mb-8" style={{ textShadow: 'none' }}>
            think. create. enjoy.
          </p>
          <p className="text-base md:text-lg text-white/60 mt-8" style={{ textShadow: 'none' }}>
            ASIA&apos;s Largest Techno-Management Symposium
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white cursor-pointer"
          onClick={() => {
            document.getElementById('who-are-we')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M12 0v40M0 28l12 12 12-12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
