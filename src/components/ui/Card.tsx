import React from 'react';
import SubscribeButton from './SubscribeButton';
import UnderlineAnim from '../animations/UnderlineAnim';
import Badge from './Badge';

const Tick = () => (
  <svg
    viewBox='0 0 14 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-2.5 h-2.5'
  >
    <path d='M1 4.5L5 8.5L12.5 1' stroke='black' strokeWidth='2'></path>
  </svg>
);

export const CustomCard = () => {
  const features = [
    'Full access to all creative capabilities',
    'Coverage from kickoff to delivery',
    'Senior-level talent',
    'Creative direction',
    'Project management',
    'Easy add-on services mid-project',
  ];
  return (
    <div className='relative flex flex-col bg-white border-[1px] border-[#dce4e5] w-[26.8rem] rounded-xl pt-10 pb-8 montreal'>
      <div className='flex flex-col text-[48px] gap-4 px-8 w-[24rem] leading-[1]'>
        <h1>Build your own subscription. We’ll tailor the perfect team.</h1>
      </div>
      <div className='pt-20 flex flex-col items-center gap-2 px-8'>
        <SubscribeButton
          href='https://calendly.com/betteroffstudio/30min?month=2024-06'
          label='Customize my plan'
        />
      </div>
      {features.length > 0 && (
        <div className='flex flex-col gap-4 mt-16 border-t-[1px] border-[#dce4e5] bg-[#fafafa] pt-5 px-8'>
          <h1 className='text-lg'>What’s included</h1>
          <div className='flex flex-col gap-3'>
            {features.map((feature, index) => (
              <h1 key={index} className='flex items-center gap-3'>
                <Tick />
                {feature}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Define TypeScript types
export interface CardProps {
  color: string;
  badgeText: string;
  title: string;
  description: string[];
  price: string;
  billing: string;
  billingText: string;
  subscribeText?: string;
  subscribeLink: string;
  infoText: string;
  infoLink: string;
  features?: string[];
}

const Card: React.FC<CardProps> = ({
  color,
  badgeText,
  title,
  description,
  price,
  billing,
  billingText,
  subscribeText,
  subscribeLink,
  infoText,
  infoLink,
  features = [],
}) => {
  return (
    <div className='relative flex flex-col bg-white border-[1px] border-[#dce4e5] w-[26.8rem] rounded-xl pt-13 pb-8 montreal'>
      <Badge
        text={badgeText}
        color={color}
        className='absolute -top-4.5 left-8'
      />
      <div className='flex flex-col text-xl gap-4 px-8'>
        <h1>{title}</h1>
        <p className='text-[#949690] flex flex-col gap-0'>
          {description.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </p>
      </div>
      <div className='pt-10 px-8'>
        <div className='flex items-end gap-1'>
          <h1 className='flex text-lg items-start gap-1'>
            $<span className='text-[44px] leading-[1]'>{price}</span>{' '}
          </h1>
          <span className='text-lg'>/{billing}</span>
        </div>
        <p className='text-[#949690]'>{billingText}</p>
      </div>
      <div className='pt-13 flex flex-col items-center gap-2 px-8'>
        <SubscribeButton
          href={subscribeLink}
          label={subscribeText ? subscribeText : 'Subscribe now'}
        />
        <UnderlineAnim
          text={infoText}
          href={infoLink}
          underlineType='double'
          classNameDouble='!text-base'
        />
      </div>
      {features.length > 0 && (
        <div className='flex flex-col gap-4 mt-8 border-t-[1px] border-[#dce4e5] bg-[#fafafa] pt-5 px-8'>
          <h1 className='text-lg'>What’s included</h1>
          <div className='flex flex-col gap-3'>
            {features.map((feature, index) => (
              <h1 key={index} className='flex items-center gap-3'>
                <Tick />
                {feature}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
