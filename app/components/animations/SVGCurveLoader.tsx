'use client';

import { useEffect, useRef, useState } from 'react';

export default function SVGCurveLoader({ duration = 600, delay = 500 }: { duration?: number; delay?: number }) {
  const loader = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const initialCurve = 200;
  let start: number;

  useEffect(() => {
    if (!loader.current || !path.current) return;

    setPath(initialCurve);
    
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  const animate = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);

    if (loader.current) {
      loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + 'px';
    }

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      setIsVisible(false);
    }
  };

  const easeOutQuad = (time: number, start: number, end: number, duration: number): number => {
    return -end * ((time /= duration) * (time - 2)) + start;
  };

  const loaderHeight = (): number => {
    if (!loader.current) return 0;
    return loader.current.getBoundingClientRect().height;
  };

  const setPath = (curve: number) => {
    if (!path.current) return;
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = loaderHeight();

    path.current.setAttributeNS(
      null,
      'd',
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
    );
  };

  if (!isVisible) return null;

  return (
    <div
      ref={loader}
      className="fixed top-0 left-0 w-full h-screen z-[9999] pointer-events-none"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <svg className="w-full h-full">
        <path ref={path} fill="#0a0a0f" />
      </svg>
    </div>
  );
}
