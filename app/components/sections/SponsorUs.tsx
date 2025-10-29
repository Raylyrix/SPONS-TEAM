'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SponsorUs() {
  const [activeField, setActiveField] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="sponsor-us" className="relative min-h-screen py-32 px-8">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">SPONSOR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              US
            </span>
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-white/80 mb-16 text-center max-w-4xl mx-auto px-4"
        >
          Join us in creating the most memorable tech festival experience.
          Contact us to become a sponsor and partner with excellence.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-red-900/10 via-red-800/10 to-red-900/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a href="mailto:kshitij@iitkgp.ac.in" className="text-white font-medium hover:text-red-400 transition-colors">
                      kshitij@iitkgp.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">+91-XXX-XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">IIT Kharagpur, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Why Partner With Us?</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Reach 19,000+ engaged followers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>35+ participating colleges annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Premier IIT brand association</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>High-impact visibility and engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Contact Us</h3>

            <form className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all hover:border-white/30 text-sm md:text-base"
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField('')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-1234-567-890"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all hover:border-white/30 text-sm md:text-base"
                  onFocus={() => setActiveField('phone')}
                  onBlur={() => setActiveField('')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all hover:border-white/30 text-sm md:text-base"
                  onFocus={() => setActiveField('company')}
                  onBlur={() => setActiveField('')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your interest in sponsoring KSHITIJ 2026..."
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all resize-none hover:border-white/30"
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField('')}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-bold text-lg rounded-xl hover:from-red-700 hover:via-red-800 hover:to-red-900 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
}
