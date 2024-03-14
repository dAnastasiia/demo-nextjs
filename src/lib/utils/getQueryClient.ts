import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

export default cache(() => new QueryClient()) as () => QueryClient;
