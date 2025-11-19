'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const BO4Section: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  // Logos for testimonial selection boxes
  const boxLogos = [
    { id: 1, src: '/testimonals/hoco_logo.png' },
    { id: 2, src: '/testimonals/royal_caribbean_logo.png' },
    { id: 3, src: '/testimonals/built_logo.png' },
    { id: 4, src: '/testimonals/spacecraft_logo.png' },
    { id: 5, src: '' },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: [
        '“Referred by a friend, we appreciated this',
        "team's clear pricing and flexible staffing for",
        'our major site launches, including Shopify',
        "development. They're now our go-to team in",
        'a pinch.”',
      ],
      name: 'Oleksandra Zubrytska',
      position: 'The Hollis Co. / Technical Project Manager',
      image: '/testimonals/thehollisco_testimonial.avif',
    },
    {
      id: 2,
      text: [
        '“This team excelled under pressure,',
        'delivering a standout UX/UI update to our',
        'booking section that redefined our',
        'collaboration and became a highlight for',
        'Royal Caribbean.”',
      ],
      name: 'Tina Rossell',
      position: 'Royal Carribbean / Commodity & Marketing Manager',
      image: '/testimonals/royalcaribbean_testimonial.avif',
    },
    {
      id: 3,
      text: [
        "We've partnered with Better Off for years,",
        'and are always impressed by their',
        'innovative brand development and precise',
        'execution. Their work during our recent',
        'rebrand matched our vision perfectly.”',
      ],
      name: 'Andrew Watson',
      position: 'Built Things / Owner',
      image: '/testimonals/builtthings_testimonial.avif',
    },
    {
      id: 4,
      text: [
        'We have a long history with this company',
        'and several major projects together. Their',
        'expertise consistently makes us look good.',
      ],
      name: 'Fran Mayo',
      position: 'Space Craft / Marketing Manager',
      image: '/testimonals/fran_mayo_testimonial.avif',
    },
  ];

  const currentTestimonial = testimonials.find((t) => t.id === activeId);

  // Refs for animating testimonial content
  const textContainerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // GSAP timeline ref to make animation interruptible
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Handle box click -> animate old testimonial out, then set new active
  const handleClick = (id: number) => {
    if (id === activeId || !textContainerRef.current) return;

    const lines = Array.from(
      textContainerRef.current.children,
    ) as HTMLElement[];

    // Kill previous timeline if running
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveId(id); // Set new testimonial AFTER old animation
      },
    });

    tl.to(lines, {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      stagger: 0.05,
    });
    if (nameRef.current)
      tl.to(
        nameRef.current,
        { y: -20, opacity: 0, duration: 0.4, ease: 'power3.inOut' },
        '<',
      );
    if (positionRef.current)
      tl.to(
        positionRef.current,
        { y: -20, opacity: 0, duration: 0.4, ease: 'power3.inOut' },
        '<',
      );
    if (imageContainerRef.current)
      tl.to(
        imageContainerRef.current,
        {
          clipPath: 'circle(0% at center)',
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '<',
      );

    tlRef.current = tl;
  };

  // Animate new testimonial in when activeId changes
  useEffect(() => {
    if (!textContainerRef.current) return;

    const lines = Array.from(
      textContainerRef.current.children,
    ) as HTMLElement[];
    const tl = gsap.timeline();

    // Reset positions
    tl.set(lines, { y: 40, opacity: 0 });
    if (nameRef.current) tl.set(nameRef.current, { y: 20, opacity: 0 });
    if (positionRef.current) tl.set(positionRef.current, { y: 20, opacity: 0 });
    if (imageContainerRef.current)
      tl.set(imageContainerRef.current, { clipPath: 'circle(0% at center)' });

    // Animate in new testimonial
    tl.to(lines, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.05,
    });
    if (nameRef.current)
      tl.to(
        nameRef.current,
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '<',
      );
    if (positionRef.current)
      tl.to(
        positionRef.current,
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '<',
      );
    if (imageContainerRef.current)
      tl.to(
        imageContainerRef.current,
        {
          clipPath: 'circle(100% at center)',
          duration: 0.8,
          ease: 'power3.out',
        },
        '<',
      );

    tlRef.current = tl; // store current timeline
  }, [activeId]);

  return (
    <section className='border-t-2 border-[#5f5f5e] w-full min-h-screen bg-[#1e1e1e] px-4 pb-7 text-white montreal selection-white'>
      {/* Upper Section - header */}
      <div className='flex pt-8 w-full'>
        <div className='flex items-center w-[34%]'>
          <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
            <circle cx='12' cy='12' r='6' />
          </svg>
          <h3 className='text-lg font-medium uppercase'>client approval</h3>
        </div>
        <h1 className='text-lg font-medium uppercase w-[46%]'>
          CREATIVE AS BUNDLED PROJECTS
        </h1>
        <h1 className='text-lg font-medium pl-2 -mt-1 w-[20%] text-right'>
          (BO® — 04)
        </h1>
      </div>

      {/* Lower Section - testimonial */}
      <div className='flex justify-between pt-[134px] px-2'>
        {/* Left Number */}
        <div className='w-[30%]'>
          <h3 className='text-lg font-medium'>{currentTestimonial?.id} — 4</h3>
        </div>

        {/* Right Content */}
        <div className='w-[66%] flex flex-col gap-10 relative'>
          {/* Testimonials Text */}
          <div
            className='relative h-[250px] overflow-hidden'
            ref={textContainerRef}
          >
            {currentTestimonial?.text.map((line, idx) => (
              <span key={idx} className='block text-[45px] leading-[1.1]'>
                {line}
              </span>
            ))}
          </div>

          {/* Person Details */}
          <div className='flex items-center gap-6'>
            <div className='w-13 h-13 relative' ref={imageContainerRef}>
              {currentTestimonial?.image && (
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className='rounded-full object-cover'
                />
              )}
            </div>
            <div className='flex flex-col text-lg leading-[1.4]'>
              <p ref={nameRef}>{currentTestimonial?.name}</p>
              <p ref={positionRef}>{currentTestimonial?.position}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logos section for switching testimonials */}
      <div className='flex pt-34 px-2'>
        {boxLogos.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative flex items-center justify-center border border-white/20 w-[20%] py-12 cursor-pointer ${
                item.id !== 1 ? 'border-l-0' : ''
              } ${item.id === 4 ? 'border-r-0' : ''}`}
            >
              <span
                className={`absolute left-0 top-0 h-[2px] bg-white transition-transform duration-500 ${
                  isActive
                    ? 'origin-left scale-x-100'
                    : 'origin-right scale-x-0'
                }`}
                style={{ width: '100%' }}
              />
              {item.src && (
                <Image
                  src={item.src}
                  alt={`logo-${item.id}`}
                  width={70}
                  height={70}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BO4Section;
