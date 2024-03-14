import { ReactNode } from 'react';

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div className="space-y-12">
      <h4 className="text-lg font-bold">{title}</h4>

      {children}
    </div>
  );
}
