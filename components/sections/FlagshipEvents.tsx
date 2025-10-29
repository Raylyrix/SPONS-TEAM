'use client';

import { motion } from 'framer-motion';

const events = [
  { name: 'Kascades', category: 'Technical' },
  { name: 'AI Realm', category: 'AI/ML' },
  { name: 'Robotics', category: 'Hardware' },
  { name: 'CodeForces', category: 'Programming' },
  { name: 'Hackathon', category: 'Development' },
  { name: 'Workshops', category: 'Learning' },
  { name: 'Guest Lectures', category: 'Knowledge' },
  { name: 'Expo', category: 'Exhibition' },
];

export default function FlagshipEvents() {
  return (
    <section id="flagship-events" className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center"
        >
          FLAGSHIP EVENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 group-hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-3">{event.category.charAt(0)}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
                <p className="text-white/60 text-sm">{event.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
