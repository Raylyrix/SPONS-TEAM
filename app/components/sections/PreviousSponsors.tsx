'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const sponsors = [
  { name: 'Microsoft', tier: 'Platinum', logo: 'M', color: 'from-blue-500 to-cyan-500' },
  { name: 'Google', tier: 'Platinum', logo: 'G', color: 'from-blue-500 to-green-500' },
  { name: 'Amazon', tier: 'Gold', logo: 'A', color: 'from-orange-500 to-yellow-500' },
  { name: 'Meta', tier: 'Gold', logo: 'M', color: 'from-blue-600 to-purple-600' },
  { name: 'Intel', tier: 'Silver', logo: 'I', color: 'from-blue-300 to-blue-600' },
  { name: 'Adobe', tier: 'Silver', logo: 'A', color: 'from-red-500 to-orange-500' },
  { name: 'Oracle', tier: 'Silver', logo: 'O', color: 'from-red-600 to-red-800' },
  { name: 'IBM', tier: 'Silver', logo: 'I', color: 'from-blue-700 to-blue-900' },
  { name: 'Cisco', tier: 'Bronze', logo: 'C', color: 'from-blue-400 to-cyan-400' },
  { name: 'Dell', tier: 'Bronze', logo: 'D', color: 'from-blue-500 to-blue-700' },
  { name: 'HP', tier: 'Bronze', logo: 'H', color: 'from-blue-400 to-indigo-600' },
  { name: 'Samsung', tier: 'Bronze', logo: 'S', color: 'from-blue-500 to-blue-800' },
  { name: 'Apple', tier: 'Platinum', logo: 'A', color: 'from-gray-400 to-gray-600' },
  { name: 'Nvidia', tier: 'Gold', logo: 'N', color: 'from-green-500 to-green-700' },
  { name: 'Tesla', tier: 'Gold', logo: 'T', color: 'from-red-500 to-red-700' },
  { name: 'Sony', tier: 'Gold', logo: 'S', color: 'from-black to-gray-800' },
  { name: 'Qualcomm', tier: 'Silver', logo: 'Q', color: 'from-orange-500 to-red-500' },
  { name: 'AMD', tier: 'Silver', logo: 'A', color: 'from-red-600 to-black' },
  { name: 'Netflix', tier: 'Bronze', logo: 'N', color: 'from-red-600 to-red-900' },
  { name: 'Spotify', tier: 'Bronze', logo: 'S', color: 'from-green-500 to-black' },
  { name: 'Uber', tier: 'Bronze', logo: 'U', color: 'from-black to-gray-700' },
  { name: 'Airbnb', tier: 'Silver', logo: 'A', color: 'from-pink-500 to-red-500' },
  { name: 'PayPal', tier: 'Gold', logo: 'P', color: 'from-blue-400 to-blue-700' },
  { name: 'Visa', tier: 'Platinum', logo: 'V', color: 'from-blue-600 to-blue-900' },
  { name: 'Mastercard', tier: 'Platinum', logo: 'M', color: 'from-orange-500 to-red-500' },
  { name: 'Goldman', tier: 'Gold', logo: 'G', color: 'from-yellow-600 to-black' },
  { name: 'JPMorgan', tier: 'Gold', logo: 'J', color: 'from-blue-800 to-blue-900' },
  { name: 'Accenture', tier: 'Silver', logo: 'A', color: 'from-pink-600 to-purple-600' },
];

const tierColors = {
  Platinum: 'from-yellow-400 via-yellow-500 to-yellow-600',
  Gold: 'from-yellow-600 via-yellow-500 to-amber-500',
  Silver: 'from-gray-400 via-gray-300 to-gray-200',
  Bronze: 'from-amber-700 via-amber-600 to-amber-800',
};

export default function PreviousSponsors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Create 3 rows with different speeds for parallax (increased effect)
  const row1Speed = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const row2Speed = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  const row3Speed = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  // Split sponsors into 3 rows
  const row1 = sponsors.slice(0, Math.ceil(sponsors.length / 3));
  const row2 = sponsors.slice(Math.ceil(sponsors.length / 3), Math.ceil(sponsors.length / 3) * 2);
  const row3 = sponsors.slice(Math.ceil(sponsors.length / 3) * 2);

  return (
    <section 
      ref={sectionRef}
      id="previous-sponsors" 
      className="relative min-h-screen py-32 px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">SPONSORS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* Animated Rows */}
        <div className="space-y-6">
          {/* Row 1 */}
          <motion.div 
            style={{ x: row1Speed }}
            className="flex gap-6 animate-scroll-left"
          >
            {[...row1, ...row1, ...row1, ...row1].map((sponsor, index) => (
              <motion.div
                key={`row1-${sponsor.name}-${index}`}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative h-40 w-64 bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-xl border border-white/10 group-hover:border-red-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col items-center justify-center">
                    {/* Logo Circle */}
                    <div className="relative mb-3">
                      <div className={`relative w-12 h-12 bg-gradient-to-br ${sponsor.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <span className="text-xl font-bold text-white drop-shadow-lg">
                          {sponsor.logo}
                        </span>
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="text-white font-bold text-center mb-2 text-sm group-hover:text-red-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    
                    {/* Tier Badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${tierColors[sponsor.tier as keyof typeof tierColors]} text-xs font-semibold text-black shadow-md`}>
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {sponsor.tier}
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            style={{ x: row2Speed }}
            className="flex gap-6 animate-scroll-right"
          >
            {[...row2, ...row2, ...row2, ...row2].map((sponsor, index) => (
              <motion.div
                key={`row2-${sponsor.name}-${index}`}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative h-40 w-64 bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-xl border border-white/10 group-hover:border-red-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col items-center justify-center">
                    {/* Logo Circle */}
                    <div className="relative mb-3">
                      <div className={`relative w-12 h-12 bg-gradient-to-br ${sponsor.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <span className="text-xl font-bold text-white drop-shadow-lg">
                          {sponsor.logo}
                        </span>
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="text-white font-bold text-center mb-2 text-sm group-hover:text-red-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    
                    {/* Tier Badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${tierColors[sponsor.tier as keyof typeof tierColors]} text-xs font-semibold text-black shadow-md`}>
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {sponsor.tier}
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div 
            style={{ x: row3Speed }}
            className="flex gap-6 animate-scroll-left"
          >
            {[...row3, ...row3, ...row3, ...row3].map((sponsor, index) => (
              <motion.div
                key={`row3-${sponsor.name}-${index}`}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative h-40 w-64 bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-xl border border-white/10 group-hover:border-red-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col items-center justify-center">
                    {/* Logo Circle */}
                    <div className="relative mb-3">
                      <div className={`relative w-12 h-12 bg-gradient-to-br ${sponsor.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <span className="text-xl font-bold text-white drop-shadow-lg">
                          {sponsor.logo}
                        </span>
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="text-white font-bold text-center mb-2 text-sm group-hover:text-red-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    
                    {/* Tier Badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${tierColors[sponsor.tier as keyof typeof tierColors]} text-xs font-semibold text-black shadow-md`}>
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {sponsor.tier}
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Total Sponsors', value: '50+' },
            { label: 'Countries', value: '15+' },
            { label: 'Years of Partnership', value: '10+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-xl border border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          will-change: transform;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
