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
        'fixed top-0 left-0 z-50 h-full w-80 lg:block transition-all duration-1000 ease-in-out bg-gray-900',
        isVisible ? 'hidden' : 'block',
      )}
    >
      <button
        className="w-full py-2 text-white bg-gray-800 lg:hidden"
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
