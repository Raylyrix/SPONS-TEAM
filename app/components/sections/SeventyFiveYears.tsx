'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SeventyFiveYears() {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

  return (
    <section
      id="seventy-five-years"
      className="relative min-h-screen py-20 md:py-32 px-8 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Number & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-9xl md:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 leading-none mb-6"
            style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
          >
            {count}
          </motion.h1>
          
          <div className="inline-block px-6 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
            <span className="text-sm font-bold text-red-400 uppercase tracking-widest">Years of Legacy</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Institute Legacy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white">First IIT in Independent India</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Established in 1951, IIT Kharagpur was founded as the <span className="text-red-400 font-semibold">first IIT in independent India</span>, 
                standing as a beacon of knowledge and innovation. For 75 years, it has produced generations of pioneers who have reshaped industries, 
                advanced science, and contributed significantly to the nation and the world.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-sm text-white/50 font-medium">Platinum Jubilee 2026</p>
            </div>
          </motion.div>

          {/* Right Column - Kshitij Connection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white">A Legacy Extended</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Since its inception in 2004, <span className="text-red-400 font-semibold">Kshitij has become a powerful extension</span> of the institute&apos;s legacy. 
                As the techno-management symposium of IIT Kharagpur, it has provided a platform where students from across the globe converge to 
                compete, collaborate, and create.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-sm text-white/50 font-medium">Since 2004 • Celebrating 22 Years</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative px-8 py-6 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 backdrop-blur-md rounded-2xl border border-red-500/30 shadow-2xl">
            <p className="text-lg md:text-2xl font-bold text-white mb-2">
              Join Us in Shaping Tomorrow
            </p>
            <p className="text-base md:text-lg text-white/60">
              As we celebrate the Platinum Jubilee of IIT Kharagpur, Kshitij 2026 invites you to honour the past, 
              engage with the present, and shape the horizon of tomorrow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
