import Image from 'next/image';
import React from 'react';
import FadeInUpText from '../animations/FadeInUpText';
import FadeUpText from '../animations/FadeUpText';

const BO5 = () => {
  return (
    <section className='w-full bg-[#e5e7df] px-4 pt-8 pb-7 text-[#1e1e1e] montreal selection-black flex flex-col gap-56'>
      {/* Top row */}
      <div className='w-full flex flex-col'>
        <div className='w-full flex items-center'>
          {/* Left label */}
          <div className='flex items-center w-[34%]'>
            <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
              <circle cx='12' cy='12' r='6' />
            </svg>
            <h3 className='text-[18px] font-medium uppercase'>Full benefits</h3>
          </div>

          {/* Middle index */}
          <div className='w-[45.5%] flex'>
            <h1 className='text-[18px] font-medium'>(BO® — 05)</h1>
          </div>

          {/* Right tagline */}
          <h1 className='w-[20%] text-lg flex justify-end uppercase'>
            Creative as a subscription
          </h1>
        </div>

        {/* Large animated text */}
        <div className='w-full pt-18'>
          <FadeInUpText className='text-[27rem] leading-[0.75] uppercase founder text-center'>
            creative
          </FadeInUpText>

          <div className='flex items-center gap-6'>
            <FadeInUpText className='text-[27rem] leading-[0.8] uppercase founder text-center'>
              with
            </FadeInUpText>

            <Image
              src='/images/betteroffstudio_culture_loop_7.avif'
              alt='betteroffstudio_culture_loop_7'
              className='w-96 h-79 pt-11'
              width={500}
              height={500}
            />
          </div>

          <FadeInUpText className='text-[27rem] leading-[0.75] uppercase founder text-center'>
            no fluff
          </FadeInUpText>
        </div>
      </div>

      {/* Benefits section */}
      <Benefits />
    </section>
  );
};

export default BO5;

const Benefits = () => {
  const benefitHeading = [
    "We've trimmed the fat to",
    'focus on essential',
    'services at skinny rates.',
  ];
  const benefits = [
    {
      id: 1,
      title: 'Your deadlines are our lifeblood',
      desc: 'Go ahead, flood us with project requests. Our convenient subscriptions offer retainer-level coverage at fixed, affordable monthly rates.',
    },
    {
      id: 2,
      title: 'Tap previously unattainable talent',
      desc: 'We’ve already vetted and assembled the most elite roster of specialists out there. Simply plug into our power outlet to crank up your brand.',
    },
    {
      id: 3,
      title: 'Cancel culture',
      desc: 'Scale on your terms and assume complete control over your creative needs by cancelling or upgrading your plan anytime.',
    },
    {
      id: 4,
      title: 'Endless revisions are the ultimate flex',
      desc: 'Free yourself from restrictive change order fees! We are committed to polishing your project until you think it’s shiny and perfect.',
    },
  ];

  return (
    <div className='flex flex-row justify-between w-full px-2'>
      <FadeUpText
        lines={benefitHeading}
        classNameLines='!text-lg leading-[1.4]'
      />
      <div className='grid grid-cols-2 gap-x-4 gap-y-20 w-[66%]'>
        {benefits.map((item) => {
          return (
            <div className='flex flex-col items-start gap-4' key={item.id}>
              <h1 className='text-[20px] font-medium'>(0{item.id})</h1>
              <hr className='w-full border-t-[1.5px] border-[#1e1e1e33]'></hr>
              <div>
                <h2 className='text-[20px] font-medium'>{item.title}</h2>
                <p className='text-[20px] text-[#949690] font-medium mt-4 leading-[1.4] max-w-[25rem]'>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BenefitsBottom = () => {
  const benefits = [
    {
      id: 5,
      title: 'Fast turnarounds, not idle runarounds',
      desc: 'By trimming fat from the bloated agency process, we’re able to meet deadlines at turn rates that average days not weeks.',
    },
    {
      id: 6,
      title: 'Our thinking sets us apart',
      desc: 'Every partnership comes with the strategic brainpower you’d expect from three decades of combined branding experience.',
    },
  ];

  return (
    <section className='w-full bg-[#e5e7df] px-4 pt-8 pb-56 text-[#1e1e1e] montreal selection-black'>
      <div className='flex flex-row justify-between w-full px-2'>
        <div></div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-20 w-[66%]'>
          {benefits.map((item) => {
            return (
              <div className='flex flex-col items-start gap-4' key={item.id}>
                <h1 className='text-[20px] font-medium'>(0{item.id})</h1>
                <hr className='w-full border-t-[1.5px] border-[#1e1e1e33]'></hr>
                <div>
                  <h2 className='text-[20px] font-medium'>{item.title}</h2>
                  <p className='text-[20px] text-[#949690] font-medium mt-4 leading-[1.4] max-w-[25rem]'>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
