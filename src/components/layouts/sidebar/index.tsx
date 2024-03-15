'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import SidebarItem from './sidebar-item';

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Sidebar({ isVisible, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isCurrentPathname = (path: string) => pathname.includes(path);

  return (
    <aside
      className={clsx(
        'top-0 left-0 z-40 w-80 h-screen lg:block transition-all duration-1000 ease-in-out',
        isVisible ? 'hidden' : 'block',
      )}
    >
      <button
        className="w-full py-2 text-white bg-gray-800 md:hidden"
        onClick={onClose}
      >
        Close
      </button>

      <div className="flex flex-col h-full py-6 overflow-y-auto bg-gray-900">
        <ul className="space-y-7">
          <SidebarItem
            current={isCurrentPathname('/dashboard')}
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
            text="Dashboard"
          />
          <SidebarItem
            current={isCurrentPathname('/companies')}
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
            text="Companies"
          />

          <SidebarItem
            pathname="/not-found"
            src="/icons/x-mark.svg"
            alt="not-found icon"
            text="Not Found [demo]"
          />
        </ul>
      </div>
    </aside>
  );
}
