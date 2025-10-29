'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const events = [
  { 
    name: 'Kascades', 
    category: 'Technical', 
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    description: 'A series of challenging technical competitions spanning multiple domains of engineering and innovation.',
    details: [
      'Multi-domain engineering challenges',
      'Competitive prizes and recognition',
      'Industry expert judges',
      'Networking opportunities'
    ]
  },
  { 
    name: 'AI Realm', 
    category: 'AI/ML', 
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    description: 'Explore the frontiers of artificial intelligence and machine learning through cutting-edge competitions.',
    details: [
      'ML model development contests',
      'Deep learning workshops',
      'AI ethics discussions',
      'Research paper presentations'
    ]
  },
  { 
    name: 'Robotics', 
    category: 'Hardware', 
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    description: 'Build, design, and compete with autonomous robots in various challenging scenarios.',
    details: [
      'Autonomous navigation challenges',
      'Robot design competitions',
      'Real-time problem solving',
      'Hardware and software integration'
    ]
  },
  { 
    name: 'CodeForces', 
    category: 'Programming', 
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    description: 'Intense coding competitions featuring algorithmic challenges for competitive programmers.',
    details: [
      'Algorithmic problem solving',
      'Time-constrained challenges',
      'Leaderboard rankings',
      'Industry recruiter presence'
    ]
  },
  { 
    name: 'Hackathon', 
    category: 'Development', 
    icon: '🔥',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    description: '24-hour innovation sprint where teams build innovative solutions to real-world problems.',
    details: [
      '24-hour coding marathon',
      'Team-based development',
      'Mentorship support available',
      'Cash prizes and internships'
    ]
  },
  { 
    name: 'Workshops', 
    category: 'Learning', 
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    description: 'Hands-on sessions led by industry experts covering emerging technologies and skills.',
    details: [
      'Interactive learning sessions',
      'Industry expert instructors',
      'Practical hands-on projects',
      'Certificate of participation'
    ]
  },
  { 
    name: 'Guest Lectures', 
    category: 'Knowledge', 
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Inspiring talks by renowned industry leaders, researchers, and visionaries.',
    details: [
      'Keynote presentations',
      'Q&A sessions with experts',
      'Career guidance',
      'Industry insights sharing'
    ]
  },
  { 
    name: 'Expo', 
    category: 'Exhibition', 
    icon: '🏆',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Grand showcase of innovation, technology, and student projects from across the globe.',
    details: [
      'Project demonstrations',
      'Innovation showcases',
      'Industry exhibitions',
      'Startup pitches and demos'
    ]
  },
  { 
    name: 'Quizzard', 
    category: 'Tech Quiz', 
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    description: 'Test your knowledge in technical quizzes covering various domains of engineering and science.',
    details: [
      'Technical knowledge tests',
      'Multiple difficulty levels',
      'Team and individual rounds',
      'Scholarships and rewards'
    ]
  },
  { 
    name: 'Business Case', 
    category: 'Management', 
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    description: 'Analyze real-world business scenarios and present strategic solutions to industry experts.',
    details: [
      'Real business case studies',
      'Strategic problem solving',
      'Presentation skills development',
      'Corporate judges panel'
    ]
  },
  { 
    name: 'Circuit Design', 
    category: 'Electronics', 
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    description: 'Design and implement innovative circuit solutions for complex engineering challenges.',
    details: [
      'Circuit simulation contests',
      'PCB design challenges',
      'Electronics prototyping',
      'Hardware debugging sessions'
    ]
  },
  { 
    name: 'CAD Modeling', 
    category: 'Design', 
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    description: 'Create detailed 3D models and designs using advanced CAD software and techniques.',
    details: [
      '3D modeling competitions',
      'CAD software training',
      'Design innovation awards',
      'Portfolio building workshops'
    ]
  },
  { 
    name: 'Crypto Quest', 
    category: 'Security', 
    icon: '🔐',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    description: 'Navigate through cryptography challenges and cybersecurity scenarios.',
    details: [
      'Cryptography puzzles',
      'Security challenges',
      'CTF-style competitions',
      'Cybersecurity awareness'
    ]
  },
  { 
    name: 'Startup Pitch', 
    category: 'Entrepreneurship', 
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    description: 'Pitch your innovative ideas to industry veterans and investors for funding and mentorship.',
    details: [
      'Startup idea pitching',
      'Investor panel presentations',
      'Mentorship opportunities',
      'Funding and incubation support'
    ]
  },
  { 
    name: 'Racing Championship', 
    category: 'Automotive', 
    icon: '🏎️',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    description: 'Build high-performance racing vehicles and compete in speed and endurance challenges.',
    details: [
      'Vehicle design and build',
      'Racing competitions',
      'Performance testing',
      'Engineering excellence awards'
    ]
  },
];

export default function FlagshipEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const handleLearnMore = (event: typeof events[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedEvent(event);
  };

  const closeOverlay = () => {
    setSelectedEvent(null);
  };

  // Prevent body scroll when overlay is open and focus scroll container
  useEffect(() => {
    if (selectedEvent) {
      // Store original styles
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyTop = document.body.style.top;
      const originalBodyWidth = document.body.style.width;
      const originalBodyHeight = document.body.style.height;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      
      // Lock body scroll - use fixed positioning to completely prevent scroll
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Also lock html element
      document.documentElement.style.overflow = 'hidden';
      
      // Prevent scroll on backdrop and modal - more aggressive approach
      const preventScroll = (e: WheelEvent | TouchEvent) => {
        // Check if the event is coming from the scroll container
        const target = e.target as Node;
        const isInsideScrollContainer = scrollContainerRef.current && scrollContainerRef.current.contains(target);
        
        // If not inside scroll container, always prevent
        if (!isInsideScrollContainer) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // If inside scroll container, check if we can scroll
        if (scrollContainerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
          const isAtTop = scrollTop === 0;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
          
          // Prevent scroll if trying to scroll beyond boundaries
          if (e instanceof WheelEvent) {
            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        }
      };
      
      // Store scroll prevention handler for cleanup
      const scrollHandler = (e: Event) => {
        // Prevent any scroll events from propagating outside overlay
        if (!scrollContainerRef.current?.contains(e.target as Node)) {
          e.preventDefault();
          e.stopPropagation();
        }
      };
      
      // Add event listeners with capture phase to catch all events
      window.addEventListener('wheel', preventScroll, { passive: false, capture: true });
      window.addEventListener('touchmove', preventScroll, { passive: false, capture: true });
      window.addEventListener('scroll', scrollHandler, { passive: false, capture: true });
      
      // Focus the scroll container so it can receive wheel events
      const timeout1 = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.focus({ preventScroll: true });
        }
      }, 150);
      
      const timeout2 = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.focus({ preventScroll: true });
        }
      }, 500);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        
        // Remove event listeners (with same options as added)
        window.removeEventListener('wheel', preventScroll, { capture: true } as EventListenerOptions);
        window.removeEventListener('touchmove', preventScroll, { capture: true } as EventListenerOptions);
        window.removeEventListener('scroll', scrollHandler, { capture: true } as EventListenerOptions);
        
        // Restore body and html styles
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.top = originalBodyTop;
        document.body.style.width = originalBodyWidth;
        document.body.style.height = originalBodyHeight;
        document.documentElement.style.overflow = originalHtmlOverflow;
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedEvent]);

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

        {/* Clean Grid Layout - 5×3 grid with improved parallax */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" style={{ 
          position: 'sticky', 
          top: '10vh',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          overflow: 'visible',
        }}>
          {events.map((event, index) => {
            // Calculate row (0, 1, or 2 for 3 rows)
            const rowIndex = Math.floor(index / 5);
            const colIndex = index % 5;
            
            // Reduced parallax speeds to prevent stacking
            const parallaxSpeed = [-25, 30, -20, 28, -30];
            const rowMultiplier = [1, 1.2, 0.9];
            
            // Smoother parallax y-offset with row variation
            const yOffset = useTransform(
              scrollYProgress, 
              [0, 0.5, 1], 
              [
                0, 
                parallaxSpeed[colIndex] * rowMultiplier[rowIndex], 
                parallaxSpeed[colIndex] * rowMultiplier[rowIndex] * 1.3
              ]
            );
            
            // Subtle scale effect for depth - prevent too much shrinking
            const scale = useTransform(
              scrollYProgress, 
              [0, 0.5, 1], 
              [
                1, 
                1 - (rowIndex * 0.03), 
                1 - (rowIndex * 0.05)
              ]
            );
            
            // Remove horizontal parallax to prevent overlapping
            // Using very minimal horizontal movement only for depth perception
            const xOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [0, 0] // No horizontal parallax to prevent overlap
            );
            
            // Variants for hover animations - all controlled by parent
            const cardVariants = {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            };

            // Image variants removed - using whileHover directly

            // Removed variants - using whileHover directly for better type safety

            const isHovered = hoveredCard === index;

            return (
            <motion.div
              key={event.name}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              style={{ 
                x: xOffset,
                y: yOffset,
                scale,
                height: '400px',
                willChange: 'transform',
                zIndex: isHovered ? 100 : (10 - rowIndex),
                position: 'relative',
                isolation: 'isolate',
              }}
              animate={{
                y: isHovered ? yOffset.get() - 12 : undefined,
                scale: isHovered ? 1.05 : undefined,
              }}
              transition={{ 
                delay: index * 0.06,
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative cursor-pointer group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
              }}>
                
                {/* Shine/Sweep effect on hover */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none"
                  initial={{ 
                    x: '-100%',
                    opacity: 0
                  }}
                  whileHover={{
                    x: '200%',
                    opacity: [0, 0.5, 0],
                    transition: {
                      duration: 0.8,
                      ease: 'easeInOut'
                    }
                  }}
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(220, 38, 38, 0.4) 50%, transparent 70%)',
                    mixBlendMode: 'overlay'
                  }}
                />

                {/* Image Background */}
                <div className="absolute inset-0">
                  <motion.img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                    style={{ willChange: 'transform' }}
                    initial={{ scale: 1, filter: 'brightness(0.7) saturate(0.9)' }}
                    whileHover={{ 
                      scale: 1.15, 
                      filter: 'brightness(1) saturate(1.1)',
                      transition: { duration: 0.6 }
                    }}
                  />
                  {/* Enhanced gradient overlay */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
                    }}
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.65, transition: { duration: 0.5 } }}
                  />
                  
                  {/* Red accent gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.5 }
                    }}
                  />
                </div>
                
                {/* Content - Bottom aligned */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none overflow-hidden"
                  style={{ 
                    transform: 'translateZ(20px)',
                    maxHeight: '80%',
                  }}
                >
                  {/* Category Badge */}
                  <motion.div 
                    className="mb-3 inline-block px-3 py-1.5 bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-lg"
                    initial={{ scale: 1, backgroundColor: 'rgba(220, 38, 38, 0.2)', y: 0 }}
                    whileHover={{ 
                      scale: 1.08, 
                      backgroundColor: 'rgba(220, 38, 38, 0.4)',
                      y: -2,
                      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                      transition: { duration: 0.4 }
                    }}
                  >
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{event.category}</span>
                  </motion.div>
                  
                  {/* Event Name */}
                  <motion.h3 
                    className="text-2xl font-black text-white mb-3 leading-tight"
                    initial={{ scale: 1, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 4px 16px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.4)',
                      transition: { duration: 0.4 }
                    }}
                  >
                    {event.name}
                  </motion.h3>
                  
                  {/* Description and Details - shows on hover with smooth animation */}
                  <motion.div
                    className="overflow-y-auto pointer-events-none"
                    style={{ 
                      willChange: 'height, opacity, transform',
                      maxHeight: isHovered ? '280px' : '0px',
                    }}
                    animate={{
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 15,
                      filter: isHovered ? 'blur(0px)' : 'blur(4px)',
                    }}
                    transition={{
                      height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
                      opacity: { duration: 0.4, delay: isHovered ? 0.1 : 0 },
                      y: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
                      filter: { duration: 0.4, delay: isHovered ? 0.1 : 0 }
                    }}
                  >
                    <div className="pr-1">
                      <p className="text-xs text-white/80 leading-relaxed mt-2 mb-2">
                        {event.description}
                      </p>
                      
                      {/* Event Details - Bullet Points */}
                      {event.details && event.details.length > 0 && (
                        <div className="space-y-1.5 mb-2">
                          {event.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              animate={{ 
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? 0 : -10,
                              }}
                              transition={{
                                delay: isHovered ? (0.25 + (idx * 0.05)) : 0,
                                duration: 0.3
                              }}
                              className="flex items-start gap-1.5"
                            >
                              <span className="text-red-400 mt-0.5 flex-shrink-0 text-[10px]">▸</span>
                              <span className="text-[10px] text-white/70 leading-relaxed">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      
                      {/* Arrow indicator - appears on hover - clickable */}
                      <motion.button
                        onClick={(e) => handleLearnMore(event, e)}
                        className="mt-2 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors pointer-events-auto"
                        animate={{ 
                          opacity: isHovered ? 1 : 0, 
                          x: isHovered ? 0 : -15,
                          scale: isHovered ? 1 : 0.8,
                        }}
                        transition={{
                          delay: isHovered ? 0.4 : 0,
                          duration: 0.4,
                          ease: [0.34, 1.56, 0.64, 1] as any
                        }}
                      >
                        <span className="text-xs font-bold">Learn More</span>
                        <motion.svg 
                          className="w-3 h-3" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ 
                            x: 4,
                            scale: 1.1
                          }}
                          transition={{ 
                            type: 'spring',
                            stiffness: 400,
                            damping: 17
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Red accent border - appears on hover */}
                <motion.div 
                  className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                  initial={{ 
                    borderColor: 'rgba(220, 38, 38, 0)', 
                    boxShadow: '0 0 0 rgba(220, 38, 38, 0)',
                    borderWidth: '2px'
                  }}
                  whileHover={{ 
                    borderColor: 'rgba(220, 38, 38, 0.7)',
                    boxShadow: '0 0 60px rgba(220, 38, 38, 0.5), 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(220, 38, 38, 0.1)',
                    borderWidth: '3px',
                    transition: { duration: 0.5 }
                  }}
                />
                
                {/* Top icon */}
                <motion.div 
                  className="absolute top-6 right-6 text-5xl"
                  initial={{ 
                    opacity: 0.3, 
                    scale: 1, 
                    rotate: 0,
                    filter: 'drop-shadow(0 0 0 rgba(220, 38, 38, 0))'
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.2,
                    rotate: 12,
                    filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))',
                    y: -5,
                    transition: { 
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }
                  }}
                >
                  {event.icon}
                </motion.div>
                
                {/* Enhanced glow effect on hover - multiple layers */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                  style={{
                    boxShadow: '0 0 80px rgba(220, 38, 38, 0.5), 0 0 120px rgba(220, 38, 38, 0.3), 0 0 160px rgba(220, 38, 38, 0.15)',
                  }}
                />
                
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-[2px] rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.15) 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          )})}
        </div>
      </div>

      {/* Detailed Overlay Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
              onClick={closeOverlay}
              onWheel={(e) => {
                // Prevent backdrop from scrolling
                if (!scrollContainerRef.current?.contains(e.target as Node)) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              onTouchMove={(e) => {
                // Prevent backdrop from scrolling on touch
                if (!scrollContainerRef.current?.contains(e.target as Node)) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              style={{ touchAction: 'none', overscrollBehavior: 'none' }}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              data-modal-content
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-4xl h-[calc(100vh-2rem)] md:h-[90vh] z-[201] bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-3xl border border-red-500/30 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                // Prevent modal container from scrolling, but allow scroll container to handle it
                if (!scrollContainerRef.current?.contains(e.target as Node)) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              style={{ maxHeight: '100vh', touchAction: 'none', overscrollBehavior: 'none' }}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeOverlay}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-xl bg-black/60 hover:bg-red-500/30 backdrop-blur-md border border-red-500/40 hover:border-red-500/60 flex items-center justify-center transition-all shadow-xl hover:shadow-red-500/20"
              >
                <svg className="w-6 h-6 text-red-400 hover:text-red-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Scrollable Content */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto overflow-x-hidden outline-none min-h-0"
                tabIndex={0}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(220, 38, 38, 0.5) transparent',
                  touchAction: 'pan-y',
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                  maxHeight: '100%',
                  position: 'relative'
                }}
                onMouseDown={() => {
                  // Ensure container receives focus when clicked for wheel events
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.focus({ preventScroll: true });
                  }
                }}
                onWheel={(e) => {
                  // Handle scroll within container - stop propagation to prevent page scroll
                  const target = e.currentTarget;
                  const { scrollTop, scrollHeight, clientHeight } = target;
                  const isAtTop = scrollTop === 0 && e.deltaY < 0;
                  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
                  
                  // If we can scroll within container, prevent it from bubbling
                  if (scrollHeight > clientHeight && !isAtTop && !isAtBottom) {
                    e.stopPropagation();
                  }
                }}
                onTouchMove={(e) => {
                  // Allow touch scrolling within container
                  e.stopPropagation();
                }}
              >
                {/* Hero Image Section */}
                <div className="relative h-72 md:h-96 overflow-hidden">
                  {/* Background Image with Parallax Effect */}
                  <motion.img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                  
                  {/* Decorative Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220,38,38,0.3) 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}
                  />
                  
                  {/* Hero Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                    <div className="max-w-4xl mx-auto">
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6"
                      >
                        <div className="px-4 py-1.5 bg-red-500/20 border border-red-500/50 backdrop-blur-md rounded-full shadow-lg">
                          <span className="text-xs md:text-sm font-bold text-red-300 uppercase tracking-widest">
                            {selectedEvent.category}
                          </span>
                        </div>
                        {/* Icon Badge */}
                        <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg">
                          {selectedEvent.icon}
                        </div>
                      </motion.div>
                      
                      {/* Event Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
                        style={{
                          textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(220, 38, 38, 0.3)'
                        }}
                      >
                        {selectedEvent.name}
                      </motion.h1>
                      
                      {/* Decorative Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                        className="h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full max-w-32"
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Main Content Section */}
                <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950">
                  {/* About Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="px-8 md:px-12 py-10 md:py-14"
                  >
                    <div className="max-w-4xl mx-auto">
                      {/* Section Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                        <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 uppercase tracking-wider">
                          About
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                      </div>
                      
                      {/* Description Content */}
                      <div className="relative pl-6 border-l-2 border-red-500/30">
                        <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-red-500/50" />
                        <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                          {selectedEvent.description}
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  {/* Features Section */}
                  {selectedEvent.details && selectedEvent.details.length > 0 && (
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="px-8 md:px-12 py-10 md:py-14 bg-gradient-to-b from-black/50 via-red-950/10 to-black/50"
                    >
                      <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="flex items-center gap-4 mb-10">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                          <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 uppercase tracking-wider">
                            Key Features
                          </h2>
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                        </div>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {selectedEvent.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -30, y: 20 }}
                              animate={{ opacity: 1, x: 0, y: 0 }}
                              transition={{ 
                                delay: 0.5 + (idx * 0.08),
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94]
                              }}
                              className="group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-red-950/20 to-gray-900/50 border border-red-500/20 hover:border-red-500/40 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
                            >
                              {/* Subtle Glow on Hover */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/10 group-hover:to-red-500/5 transition-all duration-300" />
                              
                              {/* Content */}
                              <div className="relative flex items-start gap-4">
                                {/* Icon Bullet */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-0.5 group-hover:bg-red-500/30 group-hover:scale-110 transition-all duration-300">
                                  <span className="text-red-400 text-lg font-bold">▸</span>
                                </div>
                                
                                {/* Text */}
                                <p className="flex-1 text-sm md:text-base text-white/85 leading-relaxed font-normal group-hover:text-white transition-colors">
                                  {detail}
                                </p>
                              </div>
                              
                              {/* Bottom Accent Line */}
                              <div className="absolute bottom-0 left-5 md:left-6 right-5 md:right-6 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {/* Action Buttons Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="px-8 md:px-12 py-12 md:py-16"
                  >
                    <div className="max-w-4xl mx-auto">
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-12" />
                      
                      {/* Buttons Container */}
                      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        {/* Primary CTA */}
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 group relative px-8 py-5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 hover:from-red-600 hover:via-red-700 hover:to-red-600 text-white font-bold text-base md:text-lg rounded-2xl transition-all duration-300 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 overflow-hidden"
                        >
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          
                          {/* Button Content */}
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Register Now
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </motion.button>
                        
                        {/* Secondary CTA */}
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 group relative px-8 py-5 bg-transparent border-2 border-red-500/50 hover:border-red-500 text-red-400 hover:text-red-300 font-bold text-base md:text-lg rounded-2xl transition-all duration-300 hover:bg-red-500/10 backdrop-blur-sm overflow-hidden"
                        >
                          {/* Hover Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Button Content */}
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            View Schedule
                          </span>
                        </motion.button>
                      </div>
                      
                      {/* Decorative Bottom Line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mt-12" />
                    </div>
                  </motion.section>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
