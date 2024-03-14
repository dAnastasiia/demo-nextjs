import { Company } from '@/types';
import apiFetch from './apiFetch';

const path = 'companies';

export const getCompanies = () => apiFetch<Company[]>(path);
