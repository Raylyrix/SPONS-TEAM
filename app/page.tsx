'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '@/components/sections/Hero';
import WhoAreWe from '@/components/sections/WhoAreWe';
import WhyAssociate from '@/components/sections/WhyAssociate';
import SeventyFiveYears from '@/components/sections/SeventyFiveYears';
import Events from '@/components/sections/FlagshipEvents';
import Graphs from '@/components/sections/Graphs';
import PDFs from '@/components/sections/PDFs';
import PreviousSponsors from '@/components/sections/PreviousSponsors';
import Glimpses from '@/components/sections/Glimpses';
import SponsorUs from '@/components/sections/SponsorUs';
import NavigationMenu from '@/components/common/NavigationMenu';
import GlobalVideoBackground from '@/components/common/GlobalVideoBackground';
import ScrollProgress from '@/components/common/ScrollProgress';
import SVGCurveLoader from '@/components/animations/SVGCurveLoader';
import PerspectiveTransition from '@/components/animations/PerspectiveTransition';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <GlobalVideoBackground />
      <ScrollProgress />
      <SVGCurveLoader duration={600} delay={500} />
      <NavigationMenu />
      
      <PerspectiveTransition>
        <Hero />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <WhoAreWe />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <WhyAssociate />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <SeventyFiveYears />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <Events />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <Graphs />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <PDFs />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <PreviousSponsors />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <Glimpses />
      </PerspectiveTransition>
      
      <PerspectiveTransition>
        <SponsorUs />
      </PerspectiveTransition>
    </main>
  );
}