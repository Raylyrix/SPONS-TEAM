'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const bgTextRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950 via-indigo-950 to-black">
      {/* Background watermark text */}
      <div ref={bgTextRef} className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-[20rem] font-bold text-white select-none"
          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
        >
          KSHITIJ
        </motion.h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            KSHITIJ 2026
          </h2>
          <p className="text-2xl md:text-4xl text-white/80 italic">
            think. create. enjoy.
          </p>
          <p className="text-lg md:text-xl text-white/60 mt-8">
            IIT Kharagpur's Techno-Management Symposium
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

      {/* Gradient layers with parallax effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
}
