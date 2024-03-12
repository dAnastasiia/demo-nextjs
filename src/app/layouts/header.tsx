import React from 'react';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center px-8 py-4 border-b border-gray-300">
      <h1 className="grow text-3xl font-semibold text-gray-90">Demo</h1>

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
