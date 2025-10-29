'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function WhoAreWe() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-are-we" className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center"
        >
          WHO ARE WE
        </motion.h2>

        <div ref={textRef} className="space-y-6 text-lg md:text-xl text-white/80">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="leading-relaxed"
          >
            KSHITIJ is the annual techno-management festival of IIT Kharagpur, one of India's premier
            institutes for engineering and technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="leading-relaxed"
          >
            Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">75 years</span> of
            excellence, KSHITIJ brings together the brightest minds from across the nation to showcase innovation,
            creativity, and technical prowess.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="leading-relaxed"
          >
            Our festival serves as a platform where cutting-edge technology meets visionary thinking,
            fostering collaborations between students, industry leaders, and innovators.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="leading-relaxed text-3xl md:text-4xl mt-16 text-center"
          >
            TO THE NEXT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 font-bold">
              HORIZON...
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
