'use client';

import { PropsWithChildren, useMemo } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function Providers({ children }: PropsWithChildren) {
  const client = useMemo(() => new QueryClient(), []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
