import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  icons: { icon: 'null' },
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-[#060b10] flex items-center justify-center min-h-screen min-w-screen'>
        <div className='relative w-[90.7%] max-w-[26rem] rounded-lg border border-gray-200 bg-white p-6 shadow-md'>
          <h1 className='text-[1.44rem] font-semibold leading-tight'>
            Page not found
          </h1>
          <p className='mt-1 text-gray-700'>
            Looks like you{'\u2019'}ve followed a broken link or entered a URL
            that doesn{'\u2019'}t exist on this site.
          </p>
          <hr className='my-4 border-gray-200' />

          <p className='text-sm text-gray-600 w-[95%] sm:w-[98%]'>
            If this is your site, and you weren{'\u2019'}t expecting a 404 for
            this path, please visit Vercel{'\u2019'}s{' '}
            <a
              href='https://vercel.com/guides/why-is-my-deployed-project-giving-404'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-600 underline hover:text-teal-700 font-semibold'
            >
              “page not found” support guide
            </a>{' '}
            for troubleshooting tips.
          </p>
        </div>
      </section>
    </main>
  );
}
