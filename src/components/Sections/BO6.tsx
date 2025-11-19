'use client';
import React, { useState } from 'react';
import ToggleButton from '../ui/ToggleButton';

import Card, { CustomCard } from '../ui/Card';
import { projectCardData, subscriptionCardData } from '../ui/CardData';
import FadeUpText from '../animations/FadeUpText';
import FadeInUp from '../animations/FadeInUp';

const BO6 = () => {
  const [isSubscription, setIsSubscription] = useState(false);

  const subscriptionHeading = [
    'Subscriptions are like having an in-house',
    'creative department without the headaches of',
    'managing salaried employees.',
  ];
  const projectHeading = [
    'Bundled projects are for clients who know',
    'exactly what they need. Off the shelf and',
    'on-target, everything included.',
  ];
  return (
    <section className='w-full bg-white pt-8 pb-7 text-[#1e1e1e] montreal selection-black'>
      <div className='flex flex-col gap-22 px-4'>
        <div className='w-full flex items-center'>
          {/* Left label */}
          <div className='flex items-center w-[34%]'>
            <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
              <circle cx='12' cy='12' r='6' />
            </svg>
            <h3 className='text-[18px] font-medium uppercase'>Plans</h3>
          </div>

          {/* Middle index */}
          <div className='w-[45.5%] flex'>
            <h1 className='text-[18px] font-medium'>(BO® — 06)</h1>
          </div>

          {/* Right tagline */}
          <h1 className='w-[20%] text-lg flex justify-end uppercase'>
            Add-to-cart creative
          </h1>
        </div>

        <ToggleButton
          defaultOn={false}
          onChange={(value) => setIsSubscription(value)}
        />
      </div>

      <div className='flex flex-col gap-18 px-6 pt-12'>
        {isSubscription ? (
          <FadeUpText lines={projectHeading} />
        ) : (
          <FadeUpText lines={subscriptionHeading} />
        )}
        <FadeInUp y={100} key={isSubscription ? 'project-cards' : 'sub-cards'}>
          <div className='grid grid-cols-3 gap-x-4 gap-y-8'>
            {(isSubscription ? projectCardData : subscriptionCardData).map(
              (card, index) => (
                <Card key={index} {...card} />
              ),
            )}
            <CustomCard />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default BO6;
