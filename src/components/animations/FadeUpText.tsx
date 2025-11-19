'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

interface FadeUpTextProps {
  lines: string[];
  className?: string;
  classNameLines?: string;
}

const FadeUpText: React.FC<FadeUpTextProps> = ({
  lines,
  className = '',
  classNameLines,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%', // trigger when top of container is 85% from top
          toggleActions: 'play none none none', // play once
          once: true, // animation only once
        },
      },
    );
  }, [lines]);

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className='relative overflow-hidden'>
          <span className={`block text-[45px] leading-[1.1] ${classNameLines}`}>
            {line}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FadeUpText;
