'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function HomePage() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.button === 1) e.preventDefault();
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('click', handler);
    };
  }, []);
  redirect('/Overview');
}
