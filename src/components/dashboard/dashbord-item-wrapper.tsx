import { ReactNode } from 'react';

interface DashboardItemWrapperProps {
  title: string;
  children: ReactNode;
}

export function DashboardItemWrapper({
  title,
  children,
}: DashboardItemWrapperProps) {
  return (
    <div className="space-y-8 border p-3 md:p-6 rounded-lg border-slate-800">
      <h5 className="font-semibold">{title}</h5>

      {children}
    </div>
  );
}
