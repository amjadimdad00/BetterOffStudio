'use client';
import Image from 'next/image';
import React from 'react';

import { siteConfig } from '@/constant/config';

import FadeInUp from '../animations/FadeInUp';
import UnderlineAnim from '../animations/UnderlineAnim';

const Navbar: React.FC = () => {
  return (
    <nav className='fixed flex items-center justify-between py-[1.9vw] px-[1.7vw] w-full text-[#c7c9c1] selection:!text-[#c7c9c1] selection:!bg-[#1e1e1e] mix-blend-difference z-50 bg-transparent'>
      <FadeInUp delay={0.55}>
        <Image
          src='https://betteroff.studio/logo.svg'
          className='h-[1.32vw] w-auto cursor-pointer'
          alt='BetterOff Studio Logo'
          width={150}
          height={50}
        />
      </FadeInUp>

      <div className='flex gap-[2vw] montreal font-medium text-lg w-68'>
        <FadeInUp delay={0.55}>
          <UnderlineAnim
            text='Overview'
            href={siteConfig.url}
            active={true}
            underlineType='single'
            className='after:!bg-[#c7c9c1]'
          />
        </FadeInUp>
        <FadeInUp delay={0.55}>
          <UnderlineAnim
            text='Work'
            href={`${siteConfig.url} + '/work'`}
            active={false}
            underlineType='single'
            className='after:!bg-[#c7c9c1]'
          />
        </FadeInUp>
        <FadeInUp delay={0.55}>
          <UnderlineAnim
            text='Feed'
            href={`${siteConfig.url} + '/feed'`}
            active={false}
            underlineType='single'
            className='after:!bg-[#c7c9c1]'
          />
        </FadeInUp>
      </div>

      <FadeInUp delay={0.55}>
        <UnderlineAnim
          text='Pricing'
          href={`${siteConfig.url} + '/pricing'`}
          active={true}
          underlineType='double'
          className='!bg-[#c7c9c1] after:!bg-[#c7c9c1]'
        />
      </FadeInUp>
    </nav>
  );
};

export default Navbar;
