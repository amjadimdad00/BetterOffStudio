import React from 'react';

import BO1 from '@/components/Sections/BO1';
import BO2, { BO2BottomSection } from '@/components/Sections/BO2';
import BO3 from '@/components/Sections/BO3';
import BO4 from '@/components/Sections/BO4';
import BO5, { BenefitsBottom } from '@/components/Sections/BO5';
import { Hero, Hero2 } from '@/components/Sections/Hero';
import Image from 'next/image';
import BO6 from '@/components/Sections/BO6';
import BO7 from '@/components/Sections/BO7';
import BO8, { BO8Bottom } from '@/components/Sections/BO8';

export default function Overview() {
  return (
    <>
      <Hero />
      <Hero2 />
      <div className='sc w-full'>
        <div className='sticky top-0 -z-10'>
          <BO1 />
        </div>
        <BO2 />
      </div>
      <div className='sc w-full'>
        <div className='sticky top-0 -z-10'>
          <BO2BottomSection />
        </div>
        <BO3 />
      </div>
      <BO4 />
      <Image
        src='/images/betteroffstudio_culture_large_loop.avif'
        alt='cultureloop'
        className='w-full h-full'
        width={1500}
        height={1500}
      />
      <BO5 />

      <div className='sc w-full'>
        <div className='sticky top-0 -z-10'>
          <BenefitsBottom />
        </div>
        <BO6 />
      </div>

      <BO7 />
      <BO8 />
      <div className='sticky top-0 -z-10'>
        <BO8Bottom />
      </div>
    </>
  );
}
