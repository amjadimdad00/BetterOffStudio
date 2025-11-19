import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import Navbar from '@/components/layout/Navbar';
import CookieBanner from '@/components/ui/CookieBanner';

import { siteConfig } from '@/constant/config';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/Scroll/SmoothScroll';
import ScrollToTop from '@/components/Scroll/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Better Off Studio',
    images: [
      {
        url: `${siteConfig.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: 'Better Off Studio Preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  authors: [
    {
      name: 'Amjad Imdad',
      url: 'https://amjadimdad00.vercel.app',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='antialiased selectscroll'>
        <ScrollToTop />
        <SmoothScroll />
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
