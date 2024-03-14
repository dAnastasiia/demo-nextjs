'use client';

import { useRouter } from 'next/navigation';

import BackButton from '@/components/ui/back-button';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="container p-2 md:p-4 lg:p-6 mx-auto flex items-center justify-center h-screen">
      <div className="text-center space-y-0.5 md:space-y-1 lg:space-y-2">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
          Page not found
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-900">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps
          you&apos;ve mistyped the URL? Be sure to check your spelling.
        </p>

        <BackButton text="Go back" onClick={() => router.back()} />
      </div>
    </main>
  );
}
