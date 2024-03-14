'use client';

import { ReactNode, useState } from 'react';

import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <main className="flex min-h-screen">
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-8 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </main>
  );
}
