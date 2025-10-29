'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SeventyFiveYears() {
  const [count, setCount] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Animate count from 0 to 75
    const duration = 2000;
    const increment = 75 / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 75) {
        setCount(75);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) / 10;
    const moveY = (e.clientY - centerY) / 10;
    x.set(moveX);
    y.set(moveY);
  };

  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  return (
    <section
      id="seventy-five-years"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-purple-950 via-pink-950 to-indigo-950 flex items-center justify-center"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[15rem] md:text-[20rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
        >
          {count}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          YEARS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-xl md:text-2xl text-white/80 mt-16 max-w-3xl mx-auto"
        >
          Celebrating our platinum jubilee, marking 75 years of excellence, innovation, and
          transformation at IIT Kharagpur. Join us in commemorating this remarkable journey of
          academic brilliance and technological advancement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
          <div className="relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <p className="text-white/90 font-medium">Since 1951</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
