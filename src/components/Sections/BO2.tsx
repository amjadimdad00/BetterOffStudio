'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

import UnderlineAnim from '../animations/UnderlineAnim';

gsap.registerPlugin(ScrollTrigger);

const BO2: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const woRef = useRef<HTMLHeadingElement>(null);
  const rkRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered animation for WO/RK text and video
  useEffect(() => {
    if (
      !videoRef.current ||
      !woRef.current ||
      !rkRef.current ||
      !sectionRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    // Move WO right
    tl.to(
      woRef.current,
      {
        x: 150,
        ease: 'none',
      },
      0,
    );

    // Move RK left
    tl.to(
      rkRef.current,
      {
        x: -150,
        ease: 'none',
      },
      0,
    );

    // Scale and move video downward
    tl.to(
      videoRef.current,
      {
        scale: 2.7,
        y: 800,
        ease: 'none',
        transformOrigin: 'center bottom',
      },
      0,
    );
  }, []);

  return (
    <div className='bg-white w-full pl-6 pr-6 pt-7.5 flex flex-col montreal selection-black'>
      {/* Top header section */}
      <section className='w-full flex items-center'>
        <div className='flex items-center w-[34%]'>
          <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
            <circle cx='12' cy='12' r='6' />
          </svg>
          <h3 className='text-[18px] font-medium uppercase text-[#1e1e1e]'>
            Projects
          </h3>
        </div>

        <div className='w-[41%] flex'>
          <h1 className='text-[18px] font-medium'>(BO® — 02)</h1>
        </div>

        <div className='w-[25%] flex justify-end'>
          <UnderlineAnim
            text='See all of our work'
            href='/work'
            className='text-lg'
            underlineType='double'
          />
        </div>
      </section>

      {/* Premium section with animated WO/VIDEO/RK */}
      <section
        ref={sectionRef}
        className='relative flex flex-col items-center text-center -mt-28 text-[#1e1e1e] pb-[60vh] min-h-[240vh]'
      >
        <h1 className='text-[31.5vw] founder uppercase'>Premium</h1>

        <div className='relative flex items-center justify-center gap-8 -mt-83'>
          <h1 ref={woRef} className='text-[31.5vw] founder uppercase relative'>
            WO
          </h1>

          <video
            ref={videoRef}
            className='h-[17vw] relative z-10 aspect-video'
            muted
            loop
            autoPlay
            src='https://player.vimeo.com/progressive_redirect/playback/964456701/rendition/1080p/file.mp4?loc=external&signature=ed2837df3216140eefd132460dd1a1e5b5c4a64d42d09edf23898493d96b6e73'
          />

          <h1 ref={rkRef} className='text-[31.5vw] founder uppercase relative'>
            RK
          </h1>
        </div>
      </section>
    </div>
  );
};

export default BO2;

// Bottom section with client work links
export function BO2BottomSection() {
  return (
    <div className='bg-white w-full pl-6 pr-6 pt-7.5 pb-32 flex flex-col montreal selection-black'>
      <section className='w-full flex items-center -mt-2 pt-4'>
        <div className='flex items-center w-[22%] not-select'>
          <h3 className='text-[18px] font-medium text-[#1e1e1e]'>
            Client work
          </h3>
        </div>

        <div className='w-[53%] flex not-select'>
          <h1 className='text-[18px] font-medium'>(2012 — 2025)</h1>
        </div>

        <div className='w-[25%] flex justify-end'>
          <UnderlineAnim
            text='View Select Projects (7)'
            href='/work'
            className='text-lg'
            underlineType='double'
          />
        </div>
      </section>
    </div>
  );
}
