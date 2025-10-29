'use client';

import { motion } from 'framer-motion';

export default function SponsorUs() {
  return (
    <section id="sponsor-us" className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-black via-purple-950 to-indigo-950 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          SPONSOR US
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <p className="text-white/80 text-lg mb-8">
            Join us in creating the most memorable tech festival experience.
            Contact us to become a sponsor and partner with excellence.
          </p>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-lg p-4 border border-white/20"
            >
              <p className="text-white/90">Email: kshitij@iitkgp.ac.in</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-lg p-4 border border-white/20"
            >
              <p className="text-white/90">Phone: +91-XXX-XXX-XXXX</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
