'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '🎯',
    title: 'Brand Visibility',
    description: 'Connect with 19,000+ Instagram followers and 35+ colleges annually',
  },
  {
    icon: '🤝',
    title: 'Industry Partnership',
    description: 'Collaborate with IIT Kharagpur and its extensive network',
  },
  {
    icon: '💡',
    title: 'Innovation Hub',
    description: 'Showcase your technology at one of India\'s premier tech festivals',
  },
  {
    icon: '📈',
    title: 'Recruitment Platform',
    description: 'Access the best engineering talent from top institutions',
  },
  {
    icon: '🌟',
    title: 'Legacy Association',
    description: 'Partner with a 75-year legacy of excellence and innovation',
  },
];

export default function WhyAssociate() {
  return (
    <section id="why-associate" className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-black via-indigo-950 to-purple-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center"
        >
          WHY ASSOCIATE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
