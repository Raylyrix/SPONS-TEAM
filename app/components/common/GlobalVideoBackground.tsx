'use client';

import { useRef, useEffect } from 'react';

export default function GlobalVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video playback
    video.setAttribute('preload', 'metadata');
    video.setAttribute('playsinline', 'true');
    
    // Pause video when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Ignore autoplay errors
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        style={{ 
          filter: 'brightness(1)',
          willChange: 'transform',
        }}
      >
        <source src="/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    </div>
  );
}
