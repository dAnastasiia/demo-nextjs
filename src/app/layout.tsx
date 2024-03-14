import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

import './globals.css';
import Providers from '@/providers';

const font = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demo Next.js App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
