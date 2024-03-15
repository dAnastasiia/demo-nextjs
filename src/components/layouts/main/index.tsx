import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className="mt-20 lg:ml-80 flex-1 p-4 md:p-8 overflow-x-hidden overflow-y-auto bg-gray-100">
      {children}
    </main>
  );
}
