'use client';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

import FadeInUp from '../animations/FadeInUp';
import FadeUpText from '../animations/FadeUpText';

interface AccordionDataItem {
  id: string;
  title: string;
  desc: string;
  items: string[];
}

interface AccordionItemProps {
  item: AccordionDataItem;
  open: boolean;
  toggle: () => void;
}

// Single accordion item
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  open,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Animate open/close of content and line indicator
  useEffect(() => {
    if (!contentRef.current) return;

    const height = open ? contentRef.current.scrollHeight : 0;

    gsap.to(contentRef.current, {
      height,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(lineRef.current, {
      width: open ? 0 : 16,
      duration: 0.4,
      transformOrigin: 'left center',
      ease: 'power2.inOut',
    });
  }, [open]);

  return (
    <div
      className={`border-b border-white/20 py-7 ${item.id === '1' ? 'border-t mt-5' : ''}`}
    >
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggle}
        role='button'
        aria-expanded={open}
      >
        <div className='flex gap-12 md:gap-24'>
          <h2 className='text-xl font-medium'>{item.id}</h2>
          <h2 className='text-xl font-medium'>{item.title}</h2>
        </div>
        <div
          className={`relative w-5 h-5 transition-transform duration-500 ${open ? '-rotate-90' : ''}`}
        >
          <span
            ref={lineRef}
            className='absolute top-1/2 left-0 w-4 h-[2px] bg-white block'
          />
          <span className='absolute top-1/2 left-0 w-4 h-[2px] rotate-90 bg-white block' />
        </div>
      </div>

      <div ref={contentRef} className='overflow-hidden h-0 pl-6 md:pl-26'>
        <p className='text-[#949690] mt-6 text-xl max-w-2xl'>{item.desc}</p>
        <ul className='mt-10 flex flex-wrap gap-x-2 gap-y-1'>
          {item.items.map((i, idx) => (
            <li
              key={idx}
              className='text-white bg-[#353535] px-5 py-1.5 rounded-md text-[15px]'
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Sample accordion data
const data: AccordionDataItem[] = [
  {
    id: '1',
    title: 'Strategy',
    desc: 'Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements.',
    items: [
      'Brand Architecture & Roadmaps',
      'Brand Strategy',
      'Digital Strategy',
      'Product Launch Strategy',
      'SEO & Content Strategy',
      'Information Architecture (IA)',
      'Design Systems',
      'Brand Messaging',
      'User Research & Testing',
      'New Revenue Streams',
    ],
  },
  {
    id: '2',
    title: 'Design',
    desc: 'Our design services focus on pitch-perfect brand identities, flawless UX and UI design, and unforgettable product builds that ensure your vision is brought to life with intention and precision. Our rapid prototyping and ironclad design systems streamline the development process, while our expertise in information architecture and motion design enhances usability and engagement. We create intuitive product interfaces and captivating social media designs that pop off the screen and elicit action.',
    items: [
      'Brand Identity',
      'Brand Guidelines',
      'UX and UI Design',
      'Website & App Design',
      'Art Direction',
      'Product Concepting',
      'Rapid Prototyping',
      'Motion Design',
      'Product Interfaces',
    ],
  },
  {
    id: '3',
    title: 'Technology',
    desc: 'We build full-stack digital brand extensions that serve as the online anchors of our clients’ multichannel narratives. Our no-code Framer and Webflow solutions enable rapid and efficient development timelines for both sites and products. As Shopify Plus e-commerce partners and WordPress master developers, we offer the most advanced functionality options paired with the simplest and most robust content management systems. When it comes to development, our velocity and versatility is unrivaled.',
    items: [
      'No-code Framer Solutions',
      'Webflow Solutions',
      'Shopify Plus (Partners)',
      'Advanced E-commerce',
      'WordPress Specialists',
      'Full Stack Development',
      'Journey Mapping & Testing',
      'Accessibility (WCAG) 2.1',
    ],
  },
];

// Main accordion section
const BO3: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const headingLines = [
    'Superior brands require sophisticated',
    "capabilities that many businesses couldn't",
    'access until now.',
  ];

  return (
    <section className='w-full flex flex-col items-end bg-[#1e1e1e] text-white px-4 pt-7 pb-57 montreal selection-white'>
      {/* Header */}
      <div className='w-full flex flex-col'>
        <div className='flex'>
          <div className='flex flex-col items-start w-[33%]'>
            <div className='flex items-center'>
              <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
                <circle cx='12' cy='12' r='6' />
              </svg>
              <h3 className='text-lg font-medium uppercase'>
                CONCIERGE CREATIVE
              </h3>
            </div>
            <h1 className='text-lg font-medium pl-2 -mt-1'>(BO® — 03)</h1>
          </div>

          {/* Animated heading lines */}
          <FadeUpText
            lines={headingLines}
            className='w-[67%] text-[46px] leading-[1.1] self-end'
          />
        </div>
        <h1 className='text-[27rem] uppercase founder text-center -my-24 md:-my-28'>
          Services
        </h1>
      </div>

      {/* Accordion content */}
      <FadeInUp className='mt-10 w-full max-w-[63rem] px-28 self-end'>
        <h3 className='text-xl font-medium mb-6'>
          Our process and capabilities include:
        </h3>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            open={openId === item.id}
            toggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </FadeInUp>
    </section>
  );
};

export default BO3;
