'use client';

import Image from 'next/image';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../constants';

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header
      className={`fixed h-${HEADER_HEIGHT} top-0 left-0 lg:left-${SIDEBAR_WIDTH} right-0 z-40 bg-white border-b border-gray-300 px-8 py-4 flex items-center justify-between lg:justify-end`}
    >
      <button className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
        <Image width={18} height={18} src="/icons/menu.svg" alt="menu icon" />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-px self-stretch bg-gray-300" />

        <Image
          priority
          width={32}
          height={32}
          src="/images/avatar.svg"
          alt="avatar"
        />

        <div>
          <p className="text-base font-semibold text-gray-900">John Doe</p>
          <p className="text-sm font-light text-gray-900">j.doe@example.com</p>
        </div>
      </div>
    </header>
  );
}
