import React from 'react';
import FadeInUpText from '../animations/FadeInUpText';
import Image from 'next/image';

export default function BO8() {
  return (
    <section className='w-full bg-[#e5e7df] px-4 pt-7 text-[#1e1e1e] montreal selection-black'>
      <div className='w-full flex items-center'>
        {/* Left label */}
        <div className='flex items-center w-[34%]'>
          <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
            <circle cx='12' cy='12' r='6' />
          </svg>
          <h3 className='text-[18px] font-medium uppercase'>
            what we're about
          </h3>
        </div>

        {/* Middle index */}
        <div className='w-[40.5%] flex'>
          <h1 className='text-[18px] font-medium'>(BO® — 08)</h1>
        </div>

        {/* Right tagline */}
        <h1 className='w-[25%] text-lg flex justify-end uppercase'>
          CREATIVE AS BUNDLED PROJECTS
        </h1>
      </div>
      {/* Large animated text */}
      <div className='w-full pt-18'>
        <div className='flex items-center gap-6'>
          <FadeInUpText className='text-[27rem] leading-[0.75] uppercase founder text-center'>
            get
          </FadeInUpText>

          <Image
            src='/images/betteroffstudio_culture_loop_7.avif'
            alt='betteroffstudio_culture_loop_7'
            className='w-96 h-79 pt-11'
            width={500}
            height={500}
          />
          <FadeInUpText className='text-[27rem] leading-[0.75] uppercase founder text-center'>
            to
          </FadeInUpText>
        </div>

        <FadeInUpText className='text-[27rem] leading-[0.8] uppercase founder text-center'>
          know us
        </FadeInUpText>
      </div>
    </section>
  );
}

export const BO8Bottom = () => {
  return (
    <section className='flex justify-between w-full bg-[#e5e7df] text-[#1e1e1e] montreal selection-black px-6 pt-26 pb-32'>
      <div className='w-[42%]'>
        <Image
          src='/images/betteroffstudio_culture_loop_7.avif'
          alt='betteroffstudio_culture_loop_7'
          className='w-80 h-46'
          width={500}
          height={500}
        />
        <h1 className='text-lg pt-2'>Channel Islands Retains Its Roots.</h1>
        <p className='text-lg text-[#949690] pt-2'>Article - 7 minute read</p>
      </div>
      <h1 className='text-[46px] leading-[1] w-[57%]'>
        More than a blog, The Feed is our point of view. It reflects who we are
        and what we’re into. It’s where industry, culture, lifestyle, and our
        own work intersect in a meaningful way.
      </h1>
    </section>
  );
};
