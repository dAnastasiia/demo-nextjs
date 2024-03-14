import { Status } from '@/enums';

export interface Company {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
}
