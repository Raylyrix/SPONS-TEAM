'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const events = [
  { 
    name: 'Kascades', 
    category: 'Technical', 
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    description: 'A series of challenging technical competitions spanning multiple domains of engineering and innovation.'
  },
  { 
    name: 'AI Realm', 
    category: 'AI/ML', 
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    description: 'Explore the frontiers of artificial intelligence and machine learning through cutting-edge competitions.'
  },
  { 
    name: 'Robotics', 
    category: 'Hardware', 
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    description: 'Build, design, and compete with autonomous robots in various challenging scenarios.'
  },
  { 
    name: 'CodeForces', 
    category: 'Programming', 
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    description: 'Intense coding competitions featuring algorithmic challenges for competitive programmers.'
  },
  { 
    name: 'Hackathon', 
    category: 'Development', 
    icon: '🔥',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    description: '24-hour innovation sprint where teams build innovative solutions to real-world problems.'
  },
  { 
    name: 'Workshops', 
    category: 'Learning', 
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    description: 'Hands-on sessions led by industry experts covering emerging technologies and skills.'
  },
  { 
    name: 'Guest Lectures', 
    category: 'Knowledge', 
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Inspiring talks by renowned industry leaders, researchers, and visionaries.'
  },
  { 
    name: 'Expo', 
    category: 'Exhibition', 
    icon: '🏆',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Grand showcase of innovation, technology, and student projects from across the globe.'
  },
  { 
    name: 'Quizzard', 
    category: 'Tech Quiz', 
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    description: 'Test your knowledge in technical quizzes covering various domains of engineering and science.'
  },
  { 
    name: 'Business Case', 
    category: 'Management', 
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    description: 'Analyze real-world business scenarios and present strategic solutions to industry experts.'
  },
  { 
    name: 'Circuit Design', 
    category: 'Electronics', 
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    description: 'Design and implement innovative circuit solutions for complex engineering challenges.'
  },
  { 
    name: 'CAD Modeling', 
    category: 'Design', 
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    description: 'Create detailed 3D models and designs using advanced CAD software and techniques.'
  },
  { 
    name: 'Crypto Quest', 
    category: 'Security', 
    icon: '🔐',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    description: 'Navigate through cryptography challenges and cybersecurity scenarios.'
  },
  { 
    name: 'Startup Pitch', 
    category: 'Entrepreneurship', 
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    description: 'Pitch your innovative ideas to industry veterans and investors for funding and mentorship.'
  },
  { 
    name: 'Racing Championship', 
    category: 'Automotive', 
    icon: '🏎️',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    description: 'Build high-performance racing vehicles and compete in speed and endurance challenges.'
  },
];

export default function FlagshipEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="events" ref={sectionRef} className="relative py-32 px-8" style={{ minHeight: '200vh', zIndex: 1 }}>
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 0 }} />
      <div className="relative z-10 max-w-7xl mx-auto" style={{ position: 'sticky', top: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-title font-bold text-white mb-4">
            FLAGSHIP
          </h2>
          <h2 className="text-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            EVENTS
          </h2>
        </motion.div>

        {/* Clean Grid Layout - 5×3 grid with parallax */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" style={{ position: 'sticky', top: '10vh' }}>
          {events.map((event, index) => {
            // Calculate row (0, 1, or 2 for 3 rows)
            const rowIndex = Math.floor(index / 5);
            const colIndex = index % 5;
            
            // Each row moves in different direction with different speed - reduced values
            const parallaxSpeed = [-15, 20, -10, 15, -20]; // Much smaller movements
            const yOffset = useTransform(scrollYProgress, [0, 0.5, 1], 
              [0, parallaxSpeed[colIndex] * (rowIndex + 1), parallaxSpeed[colIndex] * (rowIndex + 1)]
            );
            
            // Subtle scale effect for depth
            const scale = useTransform(scrollYProgress, [0, 0.5, 1], 
              [1, 1 - (rowIndex * 0.02), 1 - (rowIndex * 0.03)]
            );
            
            return (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.06, 
                duration: 0.5
              }}
              whileHover={{ y: -8 }}
              style={{ y: yOffset, scale, height: '400px' }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-500/20">
                
                {/* Image Background - More prominent */}
                <div className="absolute inset-0">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
                </div>
                
                {/* Content - Bottom aligned */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  {/* Category Badge */}
                  <div className="mb-3 inline-block px-3 py-1.5 bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{event.category}</span>
                  </div>
                  
                  {/* Event Name */}
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    {event.name}
                  </h3>
                  
                  {/* Description - slides up on hover */}
                  <p className="text-sm text-white/80 leading-relaxed max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:mt-2">
                    {event.description}
                  </p>
                  
                  {/* Arrow indicator - appears on hover */}
                  <div className="mt-3 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-bold">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Red accent border - appears on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-500 pointer-events-none" />
                
                {/* Top icon - Absolute positioned */}
                <div className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  {event.icon}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
