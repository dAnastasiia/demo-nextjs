'use client';

import { PropsWithChildren, useState } from 'react';

import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';
import Main from '@/components/layouts/main';

export default function AdminLayout({ children }: PropsWithChildren) {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />

      <div className="flex flex-col flex-1 w-full">
        <Header toggleSidebar={toggleSidebar} />

        <Main>{children}</Main>
      </div>
    </div>
  );
}
