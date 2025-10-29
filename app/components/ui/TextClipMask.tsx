'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextClipMaskProps {
  text: string;
  videoSrc?: string;
  className?: string;
}

export default function TextClipMask({ text, videoSrc, className = '' }: TextClipMaskProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const maskSize = useTransform(scrollYProgress, [0, 1], [30, 150]);
  const maskSizeProgress = useTransform(scrollYProgress, [0, 1], [8, 30]);

  useEffect(() => {
    const unsubscribe = maskSize.on('change', (latest) => {
      if (maskRef.current) {
        maskRef.current.style.webkitMaskSize = `${maskSizeProgress.get()}%`;
      }
    });
    return () => unsubscribe();
  }, [maskSize, maskSizeProgress]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        ref={maskRef}
        className="absolute inset-0"
        style={{
          WebkitMaskSize: useTransform(scrollYProgress, [0, 1], ['30%', '150%']),
        }}
      >
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
        )}
      </motion.div>
      
      <h2 className="text-5xl md:text-7xl font-bold text-white relative z-10">
        {text}
      </h2>
    </div>
  );
}
