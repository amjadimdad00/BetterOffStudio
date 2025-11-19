'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // scroll duration higher → more smooth and slow
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.6, // mouse wheel low speed
      touchMultiplier: 0.8, // touch scroll low speed
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

  return null;
}
