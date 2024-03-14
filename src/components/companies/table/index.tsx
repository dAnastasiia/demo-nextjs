import { Status } from '@/enums';
import { Company } from '@/types';

import CompanyTableRow from './table-row';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const data: Company[] = [
  {
    id: 1,
    category: 'Products',
    company: 'Costco',
    status: Status.Pending,
    promotion: true,
    country: 'USA',
    joinedDate: '02.12.2023',
  },
  {
    id: 2,
    category: 'Retails',
    company: 'NT Yui',
    status: Status.Active,
    promotion: false,
    country: 'France',
    joinedDate: '03.14.2018',
  },
];

export default function CompaniesTable() {
  return (
    <table className="table-auto w-full border-separate border-spacing-y-2 overflow-x-scroll">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="pb-5 text-sm font-semibold text-gray-900"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <CompanyTableRow key={company.id} {...company} />
        ))}
      </tbody>
    </table>
  );
}
