'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from '@/components/ui/DomeGallery';
import { DomeGallerySkeleton } from '@/components/ui/DomeGallerySkeleton';
import { FullscreenImageModal } from '@/components/ui/FullscreenImageModal';
import { useRef, useState, useEffect } from 'react';

// 55+ images for the gallery using Unsplash
const galleryImages: Array<{ src: string; alt: string }> = [
  // Tech & Innovation (1-15)
  { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80', alt: 'Tech Innovation 1' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', alt: 'Tech Innovation 2' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Tech Innovation 3' },
  { src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80', alt: 'Tech Innovation 4' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', alt: 'Tech Innovation 5' },
  { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', alt: 'Tech Innovation 6' },
  { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80', alt: 'Tech Innovation 7' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Tech Innovation 8' },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', alt: 'Tech Innovation 9' },
  { src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', alt: 'Tech Innovation 10' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', alt: 'Tech Innovation 11' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Tech Innovation 12' },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', alt: 'Tech Innovation 13' },
  { src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', alt: 'Tech Innovation 14' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', alt: 'Tech Innovation 15' },
  // Workshop & Conference (16-30)
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Workshop Session 1' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'Workshop Session 2' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Workshop Session 3' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Workshop Session 4' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'Workshop Session 5' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Workshop Session 6' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', alt: 'Workshop Session 7' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', alt: 'Workshop Session 8' },
  { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', alt: 'Workshop Session 9' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Workshop Session 10' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Workshop Session 11' },
  { src: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80', alt: 'Workshop Session 12' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Workshop Session 13' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Workshop Session 14' },
  { src: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80', alt: 'Workshop Session 15' },
  // Team Collaboration (31-45)
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', alt: 'Team Collaboration 1' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Team Collaboration 2' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Team Collaboration 3' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Team Collaboration 4' },
  { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf35?w=800&q=80', alt: 'Team Collaboration 5' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Team Collaboration 6' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Team Collaboration 7' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Team Collaboration 8' },
  { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf35?w=800&q=80', alt: 'Team Collaboration 9' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Team Collaboration 10' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Team Collaboration 11' },
  { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf35?w=800&q=80', alt: 'Team Collaboration 12' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Team Collaboration 13' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Team Collaboration 14' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Team Collaboration 15' },
  // Event Moments (46-60)
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Event Moment 1' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Event Moment 2' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Event Moment 3' },
  { src: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80', alt: 'Event Moment 4' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Event Moment 5' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Event Moment 6' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Event Moment 7' },
  { src: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80', alt: 'Event Moment 8' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Event Moment 9' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Event Moment 10' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Event Moment 11' },
  { src: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80', alt: 'Event Moment 12' },
  { src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80', alt: 'Event Moment 13' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', alt: 'Event Moment 14' },
  { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', alt: 'Event Moment 15' },
];

export default function Glimpses() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{ 
    src: string; 
    alt: string;
    initialRect?: { x: number; y: number; width: number; height: number };
  } | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    // Simulate loading time for skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (
    imageSrc: string, 
    alt: string, 
    initialRect?: { x: number; y: number; width: number; height: number }
  ) => {
    setSelectedImage({ src: imageSrc, alt, initialRect });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section 
        ref={containerRef}
        id="glimpses" 
        className="relative min-h-screen py-32 px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-4 text-center"
          >
            GLIMPSES
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 max-w-3xl mx-auto text-center"
          >
            <p className="text-xl text-white/80 mb-2">
              A visual journey through KSHITIJ&apos;s moments of innovation, collaboration, and excellence.
            </p>
            <p className="text-sm text-white/60">
              Drag to rotate • Click any image to view in fullscreen
            </p>
          </motion.div>

          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DomeGallerySkeleton />
            </motion.div>
          ) : (
            <motion.div
              style={{ scale, y }}
              className="mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-[120%] h-[750px] -ml-[10%] overflow-visible">
                <DomeGallery 
                  images={galleryImages} 
                  grayscale={false} 
                  fit={0.6} 
                  segments={40} 
                  minRadius={650}
                  onImageClick={handleImageClick}
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {selectedImage && (
        <FullscreenImageModal
          imageSrc={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          initialRect={selectedImage.initialRect}
        />
      )}
    </>
  );
}
