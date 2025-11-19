'use client';
import MarqueeFooter from '../animations/MarqueeFooter';
import UnderlineAnim from '../animations/UnderlineAnim';

/* ---------------- TYPES ---------------- */

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

/* ---------------- LINK DATA ---------------- */

const sitemapLinks: FooterLink[] = [
  { label: 'overview', href: '/overview' },
  { label: 'work', href: '/work' },
  { label: 'feed', href: '/feed' },
  { label: 'pricing', href: '/pricing' },
  { label: 'contact', href: '/contact' },
];

const legalLinks: FooterLink[] = [
  { label: 'terms', href: '/terms' },
  { label: 'privacy', href: '/privacy' },
];

const socialLinks: FooterLink[] = [
  { label: 'instagram', href: 'https://instagram.com' },
  { label: 'linkedin', href: 'https://linkedin.com' },
];

/* ---------------- FOOTER COMPONENT ---------------- */

export default function Footer() {
  return (
    <section className='w-full h-full bg-[#1e1e1e] pt-26 pb-12 text-white montreal selection-white'>
      {/* Upper */}
      <div className='flex items-end justify-between px-6 pb-11'>
        <h1 className='text-[46px] w-[40%] leading-[1.1]'>
          Still unsure whether our plans are right for you?
        </h1>

        <UnderlineAnim
          text='Let’s chat'
          href='/'
          underlineType='double'
          classNameDouble='text-[46px]'
          className='bg-white h-[2px] !-mt-1'
        />
      </div>

      <hr className='border-t-1 border-white/20 px-6' />

      {/* Link Columns */}
      <div className='flex gap-34 pt-52 px-6'>
        <FooterColumn title='Sitemap' links={sitemapLinks} />
        <FooterColumn title='Legal' links={legalLinks} />
        <FooterColumn title='Social' links={socialLinks} />
      </div>

      <div className='-mb-6'>
        <MarqueeFooter className='text-white' />
      </div>

      <div className='flex justify-between px-6'>
        <h1 className='text-xl'>Copyright © Better Off 2026</h1>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='text-xl cursor-pointer'
        >
          Back to top ↑
        </button>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE COLUMN COMPONENT ---------------- */

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-white text-xl capitalize'>{title}</h1>

      <div>
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className='block text-[#848181] text-xl capitalize hover:text-white transition-colors'
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
