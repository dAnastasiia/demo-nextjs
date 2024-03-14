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
