'use client';

import { motion } from 'framer-motion';

export default function WhoAreWe() {
  const achievements = [
    { number: '75+', label: 'Years of Excellence', icon: '🏛️' },
    { number: '19K+', label: 'Instagram Followers', icon: '📱' },
    { number: '35+', label: 'Participating Colleges', icon: '🎓' },
  ];

  const timeline = [
    { year: 1951, event: 'IIT Kharagpur Founded' },
    { year: 2010, event: 'Digital Transformation' },
    { year: 2020, event: '19K+ Followers Milestone' },
    { year: 2026, event: '75 Years of Excellence' },
  ];

  return (
    <section id="who-are-we" className="relative min-h-screen py-32 px-6 md:px-8">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Headline & Visual */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                WHO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  ARE WE
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Asia&apos;s largest techno-management festival, bringing together the brightest minds from across the globe.
              </motion.p>
            </motion.div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: 'easeInOut'
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    {item.number}
                  </div>
                  <div className="text-xs text-white/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            
            {/* Main Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-white/90">
                KSHITIJ is the annual techno-management festival of IIT Kharagpur, celebrated for fostering innovation, creativity, and technical excellence.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Our platform connects students, industry leaders, and innovators to create transformative experiences that shape the future of technology.
              </p>
            </motion.div>

            {/* Timeline Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="relative pl-12 group cursor-pointer"
                  >
                    <motion.div 
                      className="absolute left-0 w-4 h-4 bg-red-500 rounded-full border-4 border-black z-10"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <div className="text-red-400 font-bold text-sm mb-1 group-hover:text-red-300 transition-colors">
                      {item.year}
                    </div>
                    <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                      {item.event}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-2xl p-6 border border-red-500/30 overflow-hidden group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  TO THE NEXT{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                    HORIZON
                  </span>
                </div>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                  Join us in shaping the future of technology and innovation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
