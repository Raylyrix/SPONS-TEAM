'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const benefits = [
  {
    number: 70000,
    suffix: '+',
    title: 'Annual Student Reach',
    description: 'Students engaged across all events',
    comparison: '+35% vs industry average',
    context: ['1,200+ institutions', '35+ colleges annually', '9 months active'],
    color: 'from-red-500/20 to-red-600/20',
    borderColor: 'border-red-500/30',
  },
  {
    number: 1200,
    suffix: '+',
    title: 'Campus Ambassador Network',
    description: 'Ambassadors publicizing nationwide',
    comparison: 'Largest in India',
    context: ['Nationwide reach', '1200+ active members', 'Year-round activation'],
    color: 'from-red-600/20 to-red-700/20',
    borderColor: 'border-red-600/30',
  },
  {
    number: 12,
    suffix: 'M+',
    title: 'Website Traffic',
    description: 'Digital impressions for KSHITIJ 2025',
    comparison: '+200% YoY growth',
    context: ['12M hits', '350+ event pages', '6 months indexed'],
    color: 'from-red-700/20 to-red-800/20',
    borderColor: 'border-red-700/30',
  },
  {
    number: 500,
    suffix: '+',
    title: 'Workshops & Events',
    description: 'Pre-fest engagement activities',
    comparison: 'Year-round programming',
    context: ['Pre-fest workshops', 'During-fest sessions', 'Post-fest follow-up'],
    color: 'from-red-800/20 to-red-900/20',
    borderColor: 'border-red-800/30',
  },
  {
    number: 1200,
    suffix: '+',
    title: 'Educational Institutions',
    description: 'Reached through publicity campaigns',
    comparison: '95% coverage in tier-1 cities',
    context: ['Oct-Nov campaigns', 'Nationwide distribution', 'Multi-language materials'],
    color: 'from-red-900/20 to-black/20',
    borderColor: 'border-red-900/30',
  },
  {
    number: 6,
    suffix: ' Months',
    title: 'Extended Visibility',
    description: 'Online events starting September',
    comparison: 'Longest engagement period',
    context: ['Sept - Feb timeline', 'Continuous presence', 'Multi-platform reach'],
    color: 'from-black/20 to-red-900/20',
    borderColor: 'border-red-500/30',
  },
  {
    number: 75,
    suffix: ' Years',
    title: 'Legacy of Excellence',
    description: 'IIT Kharagpur heritage',
    comparison: 'Oldest IIT tech festival',
    context: ['Established 1951', 'Institutional backing', 'Proven track record'],
    color: 'from-red-800/20 to-red-700/20',
    borderColor: 'border-red-700/30',
  },
];

interface BenefitCardProps {
  benefit: typeof benefits[0];
  index: number;
  total: number;
  scrollYProgress: import('framer-motion').MotionValue<number>;
}

function AnimatedCounter({ targetValue, suffix, start }: { targetValue: number, suffix: string, start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    const duration = 1500;
    const steps = 40;
    const increment = targetValue / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= steps) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [start, targetValue]);

  return <span>{value.toLocaleString()}{suffix}</span>;
}

function BenefitCard({ benefit, index, total, scrollYProgress }: BenefitCardProps) {
  const [startCounter, setStartCounter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Start animation earlier - when card is about to enter viewport
  const start = (index - 0.5) / total;
  const end = (index + 0.2) / total;
  
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1], { clamp: true });
  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1], { clamp: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.7 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '135vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100 - index,
      }}
      className="px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`relative rounded-3xl p-12 md:p-16 border-2 ${benefit.borderColor} bg-gradient-to-br ${benefit.color} backdrop-blur-md shadow-2xl`} style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          
          {/* Top Bar - Progress */}
          <div className="flex items-center justify-between mb-12">
            <div className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-full">
              <span className="text-sm font-bold text-red-400">{index + 1}/{total}</span>
            </div>
            
            {/* Mini Progress Bar */}
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i <= index ? 'bg-red-500 w-8' : 'bg-white/20 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center">
            
            {/* The Number */}
            <div className="mb-8">
              <div className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-none tracking-tighter">
                <AnimatedCounter targetValue={benefit.number} suffix={benefit.suffix} start={startCounter} />
              </div>
              
              <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">
                  {benefit.title}
                </span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {benefit.description}
            </h3>

            {/* Comparison Data */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="text-sm font-bold text-red-400 uppercase tracking-wider">
                  {benefit.comparison}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>

            {/* Context Bullets */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              {benefit.context.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-red-400"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Mini Chart/Visualization */}
            <div className="mt-12">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-end justify-center gap-2 h-20">
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[20%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[35%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[50%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[65%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[80%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-[90%]" />
                  <div className="bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm w-8 h-full" />
                </div>
                <p className="text-xs text-white/50 mt-4 text-center">Growth trajectory (last 7 years)</p>
              </div>
            </div>

          </div>

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220,38,38,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyAssociate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section id="why-associate" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 md:py-24 px-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            WHY ASSOCIATE
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Seven data-driven reasons to partner with India&apos;s premier techno-management festival
          </p>
        </motion.div>

        {/* Sticky Scroll Stack */}
        <div 
          ref={containerRef}
          className="relative w-full"
          style={{ minHeight: `${benefits.length * 135}vh` }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              benefit={benefit}
              index={index}
              total={benefits.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
