'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Semi-transparent backdrop for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Foreground content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-display text-white mb-6" style={{ textShadow: 'none', fontWeight: 900 }}>
            KSHITIJ 2026
          </h1>
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
        transition={{ delay: 1, duration: 0.8 }}
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
}
