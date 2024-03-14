'use client';

import { useQuery } from '@tanstack/react-query';

import { getSales } from '@/api/dashboard';
import { SalesItem } from './item';

export function Sales() {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getSales(),
  });

  return (
    <div className="space-y-8 border p-6 rounded-lg border-slate-500">
      <h5 className="font-semibold">Top Sales</h5>

      {data?.map((data) => <SalesItem key={data.id} {...data} />)}
    </div>
  );
}
