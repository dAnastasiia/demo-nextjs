'use client';

import { PropsWithChildren, useState } from 'react';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../constants';

export default function Main({ children }: PropsWithChildren) {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <main
      className={`mt-${HEADER_HEIGHT} lg:ml-${SIDEBAR_WIDTH} flex-1 p-4 md:p-8 overflow-x-hidden overflow-y-auto bg-gray-100`}
    >
      {children}
    </main>
  );
}
