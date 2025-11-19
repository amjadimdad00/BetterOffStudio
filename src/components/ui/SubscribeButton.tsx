import Link from 'next/link';

interface SubscribeButtonProps {
  href: string;
  label?: string;
}

export default function SubscribeButton({
  href,
  label,
}: SubscribeButtonProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='montreal group relative inline-flex items-center justify-between w-[22.7rem] overflow-hidden rounded-md bg-[#1e1e1e] px-9 py-5.5 text-white transition-colors duration-300'
    >
      {/* Animated background overlay */}
      <span className='absolute inset-0 z-0 translate-y-full scale-x-90 rounded-md bg-[#e0f07d] transition-transform duration-500 ease-out origin-bottom group-hover:translate-y-0 group-hover:scale-x-100 group-hover:rounded-md' />

      {/* Button content */}
      <span className='relative z-10 font-medium text-lg transition-colors duration-300 group-hover:text-black'>
        {label}
      </span>

      <svg
        viewBox='0 0 12 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative z-10 ml-3 h-2.5 w-2.5 transition-transform duration-300 group-hover:text-black'
      >
        <path
          d='m11.18 7.84-1.56-.02V2.88L1.94 10.6.8 9.44l7.72-7.7H3.56V.2h7.62v7.64Z'
          fill='currentColor'
        />
      </svg>
    </Link>
  );
}
