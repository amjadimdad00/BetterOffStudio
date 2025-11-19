'use client';

import { useEffect, useState } from 'react';

import UnderlineAnim from '../animations/UnderlineAnim';

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (getCookie('site_consent') !== 'accepted') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    setCookie('site_consent', 'accepted', 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      id='cookie-banner'
      className='fixed bottom-7 right-7 bg-white rounded-md flex items-center justify-between gap-24 py-2.5 px-5 text-sm shadow z-50'
      role='dialog'
      aria-live='polite'
      aria-label='Cookie notice'
      style={{ transition: 'opacity .28s ease, transform .28s ease' }}
    >
      <p className='m-0 text-base montreal'>This website uses Cookies</p>
      <div
        id='cookie-accept'
        style={{ cursor: 'pointer' }}
        onClick={handleAccept}
      >
        <UnderlineAnim
          text='Accept'
          href='#'
          underlineType='double'
          className='!-mt-0.5'
          classNameDouble='montreal !text-base'
        />
      </div>
    </div>
  );
}
