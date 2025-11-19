'use client';

import { useState } from 'react';

interface ToggleButtonProps {
  defaultOn?: boolean;
  onChange?: (value: boolean) => void;
}

export default function ToggleButton({ defaultOn = false, onChange }: ToggleButtonProps) {
  const [on, setOn] = useState(defaultOn);

  const toggle = (next?: boolean) => {
    const value = typeof next === 'boolean' ? next : !on;
    setOn(value);
    onChange?.(value);
  };

  return (
    <div className='flex gap-2 px-2'>
      <span className='text-[18px] montreal'>Subscriptions</span>
      <button
        type='button'
        role='switch'
        aria-checked={on}
        onClick={() => toggle()}
        className='relative flex h-6.5 w-13 cursor-pointer items-center rounded-2xl p-[3px] transition-all duration-300 focus:outline-none bg-[#e2e2e2]'
      >
        <span
          className={`h-5.5 w-5.5 rounded-full bg-[#ffffff] shadow-md transition-transform duration-300 ease-out ${
            on ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </button>
      <span className='text-[18px] montreal'>Projects</span>
    </div>
  );
}
