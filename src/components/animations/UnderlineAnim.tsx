'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface UnderlineAnimProps {
  text: string;
  href: string;
  active?: boolean;
  underlineType?: 'single' | 'double' | 'iconunderline';
  className?: string;
  classNameDouble?: string;
}

const UnderlineAnim: React.FC<UnderlineAnimProps> = ({
  text,
  href,
  active,
  underlineType = 'single',
  className,
  classNameDouble,
}) => {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const currentAnimRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (underlineType !== 'single' && lineRef.current) {
      lineRef.current.style.transform = 'scaleX(1)';
      lineRef.current.style.transformOrigin = 'left';
    }
  }, [underlineType]);

  const runWipe = () => {
    const el = lineRef.current;
    if (!el) return;

    if (currentAnimRef.current) {
      try {
        currentAnimRef.current.cancel();
      } catch {
        // ignore
      }
      currentAnimRef.current = null;
    }

    el.style.transformOrigin = 'right';
    const step1 = el.animate(
      [{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }],
      { duration: 220, easing: 'ease-in-out', fill: 'forwards' },
    );

    currentAnimRef.current = step1;

    step1.onfinish = () => {
      el.style.transformOrigin = 'left';
      const step2 = el.animate(
        [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
        { duration: 300, easing: 'ease-in-out', fill: 'forwards' },
      );
      currentAnimRef.current = step2;

      step2.onfinish = () => {
        el.style.transform = 'scaleX(1)';
        currentAnimRef.current = null;
      };
    };
  };

  if (underlineType === 'single') {
    return (
      <Link
        href={href}
        className={`relative inline-block cursor-pointer
          ${
            active
              ? "after:content-[''] after:block after:absolute after:left-0 after:top-full after:h-[1px] after:bg-black after:w-full after:mt-0.5"
              : "after:content-[''] after:block after:absolute after:left-0 after:top-full after:h-[1px] after:bg-black after:w-full after:mt-0.5 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          } ${className}`}
      >
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center gap-16 cursor-pointer montreal font-medium text-lg ${classNameDouble}`}
      onMouseEnter={runWipe}
      onMouseLeave={runWipe}
    >
      <span>{text}</span>

      {underlineType === 'iconunderline' && (
        <div className='relative group cursor-pointer'>
          <div
            className='text-lg transition-transform duration-[750ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:translate-x-2'
            aria-hidden='true'
          >
            →
          </div>
        </div>
      )}

      <span
        ref={lineRef}
        aria-hidden
        className={`absolute left-0 top-full block h-[1px] bg-black w-full mt-0.5 ${className}`}
        style={{
          transform: 'scaleX(1)',
          transformOrigin: 'left',
          willChange: 'transform',
        }}
      />
    </Link>
  );
};

export default UnderlineAnim;
