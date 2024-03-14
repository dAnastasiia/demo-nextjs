'use client';

import { useQuery } from '@tanstack/react-query';

import { getSales } from '@/api/dashboard';

import { DashboardItemWrapper } from '../dashbord-item-wrapper';
import { SalesItem } from './item';

export function Sales() {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getSales(),
  });

  return (
    <DashboardItemWrapper title="Top Sales">
      {data?.map((data) => <SalesItem key={data.id} {...data} />)}
    </DashboardItemWrapper>
  );
}
