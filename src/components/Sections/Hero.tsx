'use client';
import React from 'react';

import FadeInUp from '../animations/FadeInUp';
import FadeUpText from '../animations/FadeUpText';
import Marquee from '../animations/Marquee';
import UnderlineAnim from '../animations/UnderlineAnim';

export const Hero: React.FC = () => {
  const headingLines = [
    'Premium quality creative at lean rates',
    'for growing businesses. Packaged as',
    'subscriptions or bundled projects.',
  ];

  return (
    <>
      <section className='hidden sm:flex flex-col pt-32 montreal bg-[#e5e7df] selection-black'>
        {/* Top Section */}
        <div className='flex flex-row justify-between items-start max-w-8xl w-full pl-6 pr-12 mx-auto'>
          {/* Left Text */}
          <FadeInUp delay={0.55}>
            <div className='flex-1 max-w-68 space-y-8'>
              <p className='text-lg leading-6'>
                Pick a plan, submit a job request, and your project will kickoff
                within 24 hours.
              </p>

              <UnderlineAnim
                href='/pricing'
                text='Explore Plans'
                underlineType='iconunderline'
                className='text-lg'
              />
            </div>
          </FadeInUp>

          {/* Right Heading */}
          <h1 className='text-[46px] leading-[1.1] max-w-[47.5rem]'>
            <FadeUpText lines={headingLines} />
          </h1>
        </div>

        {/* Marquee Section */}
        <div className='-mt-1'>
          <Marquee />
        </div>
      </section>
    </>
  );
};

export const Hero2: React.FC = () => {
  const Lines1 = [
    'Strategy, Design, and Development.',
    'Lightning-fast, lean, and sensibly priced.',
  ];
  const Lines2 = [
    'Get max value and velocity in a turnkey',
    'platform that promises your brand will be',
    'Better Off®.',
  ];
  return (
    <div className='w-full bg-[#e5e7df] pt-[10vw] p-[2vw] selection-black'>
      <div className='flex flex-col'>
        {/* First heading block */}
        <h1 className='text-[3.33vw] montreal thin leading-[50px] text-[#1e1e1e] w-[65%]'>
          <FadeUpText lines={Lines1} />
        </h1>

        {/* Second heading block */}
        <h1 className='text-[3.33vw] montreal thin leading-[50px] text-[#1e1e1e] w-[65%] mt-[3vw]'>
          <FadeUpText lines={Lines2} />
        </h1>
      </div>
    </div>
  );
};
