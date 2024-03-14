'use client';

import Link from 'next/link';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PageProps) {
  return (
    <div>
      <p>Company #{id}</p>

      <Link href="/companies" className="text-blue-700">
        Back to companies
      </Link>
    </div>
  );
}
