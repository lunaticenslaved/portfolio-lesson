import { Toaster } from 'react-hot-toast';

import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeSwitch } from '@/components/theme-switch';
import { ActiveSectionContextProvider } from '@/context/active-section';
import { ThemeContextProvider } from '@/context/theme';

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
        className={classNames(
          inter.className,
          'bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90',
        )}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] rounded-full blur-[10rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem] h-[31.25rem] w-[50rem] sm:w-[68.75rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
