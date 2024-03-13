'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="container p-2 md:p-4 lg:p-6 mx-auto flex items-center justify-center h-screen">
      <div className="text-center space-y-0.5 md:space-y-1 lg:space-y-2">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
          Page not found
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-900">
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </p>

        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={() => router.back()}
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left.svg"
            alt="go back icon"
          />
          <span className="text-base md:text-lg lg:text-xl font-medium">
            Go back
          </span>
        </button>
      </div>
    </main>
  );
}
