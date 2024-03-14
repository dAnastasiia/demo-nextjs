import { Status } from '@/enums';

export interface Company {
  id: string;
  title: string;
  status: Status;
  joinedAt: string;
  hasPromotions: boolean;
  category: string;
  country: string;
}

export interface Sales {
  id: string;
  name: string;
  email: string;
  value: string;
}
