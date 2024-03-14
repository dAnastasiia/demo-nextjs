'use client';

import { useQuery } from '@tanstack/react-query';

import { getCompanies } from '@/api/companies';
import CompanyTableRow from './table-row';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompaniesTable() {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
  });

  return (
    <table className="w-full border-separate border-spacing-y-2">
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
        {data?.map((company) => (
          <CompanyTableRow key={company.id} {...company} />
        ))}
      </tbody>
    </table>
  );
}
