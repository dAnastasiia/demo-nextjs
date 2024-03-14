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
    <div className="flex flex-col justify-between space-y-5 md:space-y-6 border p-3 md:p-6 rounded-xl border-slate-300 shadow-xl">
      <h5 className="font-semibold">{title}</h5>

      {children}
    </div>
  );
}
