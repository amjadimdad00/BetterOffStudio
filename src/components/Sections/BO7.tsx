'use client';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import FadeUpText from '../animations/FadeUpText';

interface AccordionDataItem {
  id: number;
  title: string;
  desc: string;
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
    <div className='border-b border-black/10 py-8'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggle}
        role='button'
        aria-expanded={open}
      >
        <h2 className='text-xl font-medium'>{item.title}</h2>
        <div
          className={`relative w-5 h-5 transition-transform duration-500 ${open ? '-rotate-90' : ''}`}
        >
          <span
            ref={lineRef}
            className='absolute top-1/2 left-0 w-4 h-[2px] bg-black block'
          />
          <span className='absolute top-1/2 left-0 w-4 h-[2px] rotate-90 bg-black block' />
        </div>
      </div>

      <div ref={contentRef} className='overflow-hidden h-0'>
        <p className='text-[#949690] mt-6 text-xl max-w-[45rem]'>{item.desc}</p>
      </div>
    </div>
  );
};

const data: AccordionDataItem[] = [
  {
    id: 1,
    title: 'What distinguishes us from other agencies?',
    desc: 'We have worked at the largest agencies in the world and we’ve owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready-made projects, we have streamlined creative services to include only what’s absolutely essential for achieving the best client outcomes. By eliminating the bloat, it allowed us to offer growing businesses access to high-end creative that they wouldn’t have otherwise been able to afford. We’re innovative. We’re doing it to serve you. And we’re exceptional at what we do. That’s what distinguishes us.',
  },
  {
    id: 2,
    title: 'Why not hire an in-house designer or freelancer?',
    desc: 'In today’s job market, a senior creative will cost you six figures. It’ll take at least a couple months to recruit and onboard them. Then you’ll have to manage them, their personality, and their narrow area of expertise. With a subscription or ready-made project, you have access to multi-disciplined talent, all senior level, and we do the managing. As far as freelancers, the A-listers are usually booked, and those that are available are juggling a roster of other clients. They’re often undependable, and having to jump from one to another causes brand inconsistency.',
  },
  {
    id: 3,
    title: 'Are creative requests truly unlimited?',
    desc: 'Once you’re a client, you’re free to submit as many requests as you’d like within your Project Workflow, and we’ll deliver them one-after-another, in order of priority, as defined by you. A Project Workflow is a queue of active requests serviced by your dedicated creative. Each request that comes is worked on one at a time. If you want two project requests serviced simultaneously, you would simply subscribe to our more robust plan with double the workflows and dedicated creatives.',
  },
  {
    id: 4,
    title: 'How fast will I receive my work?',
    desc: 'Depends on the project requested. But, on average, we complete most design requests within 2-3 days. More complex requests require lengthier timelines. But we’re always upfront and reasonable about our estimated delivery dates, as well as any phases that require milestones to reach them. ',
  },
  {
    id: 5,
    title: 'What’s your refund policy?',
    desc: 'We work tirelessly to revise and tweak and refine until you love our work. Considering the amount of effort, attention, and quality that we pour into our work, we cannot issue refunds.',
  },
  {
    id: 6,
    title: 'What if I have a single project?',
    desc: 'Our subscriptions work best for companies that have ongoing branding needs. If you’ve got a single project, we offer a full-service menu of prepackaged projects to suit most creative needs. If you don’t find the project you’re looking for, please book a chat and we’ll tailor a service to meet your exact needs.',
  },
  {
    id: 7,
    title: 'What don’t we do?',
    desc: 'Our array of services are comprehensive. But there are a few areas that don’t fall within our expertise: Media buying, technical copywriting, and 3D modeling are a few. If you have something specific in mind, reach out and let’s discuss the specs.',
  },
  {
    id: 8,
    title: 'How do I submit a creative request?',
    desc: 'Once you’ve signed up, you will receive an email that grants access to your client dashboard with a project request form that will walk you through the steps to initiate your job. Once submitted, your dedicated Project Manager will contact you within 24 hours and immediately assign an appropriate creative. You will begin receiving daily project updates that will continue until final delivery. Simple, easy, and thorough.',
  },
  {
    id: 9,
    title: 'Do I own my work?',
    desc: 'Every piece of creative we develop is tailored specifically for your brand and 100% owned by you. We share access to all your native source files.',
  },
  {
    id: 10,
    title: 'How is my team assembled?',
    desc: 'Your dedicated Project Manager will review your  projected workflow before assigning the appropriate creative based on the personality of the brand and the nature and scope of the work. For more complex projects, your dedicated creative will change, depending on the phase of the project. For example, on a website development assignment, your dedicated creative would shift according to the stage of work: strategist, copywriter, art director, designer, developer.',
  },
  {
    id: 11,
    title: 'How soon can I submit a project request?',
    desc: 'Immediately upon sign up, you will receive an email that grants access to your client dashboard with a project request form that will notify your dedicated Project Manager to assign your creative. From sign-up to the start of work happens within 24 hours.',
  },
  {
    id: 12,
    title: 'How do I upgrade, downgrade, or cancel?',
    desc: `Scaling is painless. For any changes to your plan, simply email your desired status update to subscribe@betteroff.studio. Upgrade costs are prorated during your current billing cycle.
           For downgrades, your plan will renew at the lower level on your next billing date. To cancel, all you have to do is email subscribe@betteroff.studio and we’ll take care of you!`,
  },
];

const BO7 = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const headingLines = [
    'We love talking shop and',
    'answering questions. See the',
    'most common inquiries below or',
    'book a chat.',
  ];
  return (
    <section className='w-full flex flex-col bg-white text-[#1e1e1e] px-4 pt-46 pb-57 montreal selection-black'>
      <div className='flex'>
        <div className='flex flex-col items-start w-[34%]'>
          <div className='flex items-center'>
            <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
              <circle cx='12' cy='12' r='6' />
            </svg>
            <h3 className='text-lg font-medium uppercase'>FAQ</h3>
          </div>
          <h1 className='text-lg font-medium pl-2 -mt-1'>(BO® — 07)</h1>
        </div>

        {/* Animated heading lines */}
        <FadeUpText
          lines={headingLines}
          className='w-[66%] text-[46px] leading-[1.1] self-end'
        />
      </div>

      <div className='pt-23 px-2'>
        <div className='w-full h-[1px] bg-black/10'></div>
        <div className='w-full flex justify-between'>
          <h1 className='text-xl pt-8'>Frequently asked questions</h1>
          <div className='w-full max-w-[54.7rem] self-end'>
            {data.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                open={openId === item.id}
                toggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BO7;
