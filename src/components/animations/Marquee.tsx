'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Marquee = ({
  className,
  classNameImg,
}: {
  className?: string;
  classNameImg?: string;
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = Array(3).fill(null);

  useEffect(() => {
    if (!marqueeRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // ------------------------------------
    // 1. SCROLL-BASED SMOOTH SCALE (FM-style)
    // ------------------------------------
    gsap.to(marqueeRef.current, {
      scale: 1.55,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: 'bottom center',
        scrub: 1.8, // smooth like useSpring
      },
    });

    // ------------------------------------
    // 2. INFINITE MARQUEE LOOP
    // ------------------------------------
    const marqueeElements = marqueeRef.current.querySelectorAll('.marquee-row');

    marqueeElements.forEach((el) => {
      gsap.to(el, {
        xPercent: -100,
        repeat: -1,
        duration: 100,
        ease: 'linear',
      });
    });

    // ------------------------------------
    // 3. INITIAL FADE-UP TEXT LIKE FRAMER
    // ------------------------------------
    const fadeItems = marqueeRef.current.querySelectorAll('.fade-item');

    gsap.fromTo(
      fadeItems,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.55,
        ease: 'power3.out',
      },
    );
  }, []);

  return (
    <div ref={containerRef} className='relative w-full overflow-hidden pb-10'>
      <div ref={marqueeRef} className='relative w-full'>
        <div className='flex w-max'>
          {[0, 1].map((i) => (
            <div key={i} className='flex whitespace-nowrap marquee-row'>
              {items.map((_, j) => (
                <div
                  key={j}
                  className={`founder fade-item flex items-center gap-x-8 ml-4 uppercase font-bold text-[27rem] leading-none flex-shrink-0 -mt-8 text-[#1e1e1e] ${className}`}
                >
                  <span className='not-select'>Subscribe</span>

                  <div className='relative'>
                    <Image
                      src='https://www.datocms-assets.com/106915/1717687454-betteroffstudio_work-loop_25.jpg?auto=format,compress'
                      alt='Better Off Studio Work Loop'
                      className={`object-cover mt-11.5 not-select ${classNameImg}`}
                      width={375}
                      height={375}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
