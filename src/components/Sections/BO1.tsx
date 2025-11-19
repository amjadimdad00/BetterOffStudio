'use client';

import React from 'react';

const BO1: React.FC = () => {
  const headingLines = [
    {
      title: 'Fully Loaded',
      text: 'From complex strategies to intricate identities to bleeding-edge digital development, every project is now possible with a click',
    },
    {
      title: 'Flat Fee Flex',
      text: "We don't haggle over hours. Our plans are nimble and allow plenty of wiggle room to account for shifting priorities and rethinking.",
      mt: 'mt-10',
    },
    {
      title: 'Creative Control',
      text: "We don't want our clients to ever feel trapped or locked into anything. If you want to pump the brakes or step on the gas, feel free to pause, cancel, or upgrade anytime.",
      mt: 'mt-10',
    },
  ];

  return (
    <div className='px-6 pt-16 flex flex-col gap-8 bg-[#e5e7df] selection-black'>
      {/* Top border */}
      <div className='w-full border-t-[2px] border-gray-300'></div>

      {/* Main Section */}
      <section className='w-full flex items-center justify-center montreal'>
        <div className='w-full flex items-start justify-between'>
          {/* Column 1: Label */}
          <div className='w-[50%]'>
            <div className='flex items-center text-[18px] font-medium text-[#1e1e1e] gap-2'>
              <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
                <circle cx='12' cy='12' r='6' />
              </svg>
              <p className='uppercase'>Creative as it should be</p>
            </div>
          </div>

          {/* Column 2: Heading blocks */}
          <div className='w-[35%] px-2 flex flex-col'>
            {headingLines.map((block, idx) => (
              <div key={idx} className={block.mt}>
                <h4 className='text-[20px] font-medium'>{block.title}</h4>
                <p className='text-[20px] text-[#949690] font-medium mt-4 leading-[1.4] max-w-[25rem]'>
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          {/* Column 3: Section number */}
          <div className='w-[15%] flex justify-end'>
            <p className='text-[17.5px] font-medium text-[#1e1e1e]'>
              (BO® — 01)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BO1;
