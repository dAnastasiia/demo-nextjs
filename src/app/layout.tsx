import { ReactNode } from 'react';
import { Roboto_Mono } from 'next/font/google';

import './globals.css';
import { Router } from 'next/router';

const font = Roboto_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
