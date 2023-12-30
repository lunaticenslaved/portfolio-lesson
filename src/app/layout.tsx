import { Toaster } from 'react-hot-toast';

import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/header';
import { ActiveSectionContextProvider } from '@/context/active-section';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ricardo | Personal Portfolio',
  description: 'Ricardo is a full-stack developer with 8 years of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={classNames(inter.className, 'bg-gray-50 text-gray-950 relative pt-28 sm:pt-36')}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] rounded-full blur-[10rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem] h-[31.25rem] w-[50rem] sm:w-[68.75rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
