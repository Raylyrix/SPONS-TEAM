'use client';

import { motion } from 'framer-motion';

export default function Graphs() {
  return (
    <section id="graphs" className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-black via-purple-950 to-indigo-950 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16"
        >
          STATISTICS & DATA
        </motion.h2>
        <p className="text-white/80 text-xl">Charts and graphs will be integrated here</p>
      </div>
    </section>
  );
}
