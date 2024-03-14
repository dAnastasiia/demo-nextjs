import { Sales } from '@/types';
import apiFetch from './apiFetch';

const path = 'dashboard-';

export const getSales = () => apiFetch<Sales[]>(path + 'sales');
