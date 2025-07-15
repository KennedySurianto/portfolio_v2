// src/hooks/useSmoothScroll.ts
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // The lerp property overrides duration and easing
      lerp: 0.1, // A good starting point. Lower is more "slippery".
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
};