import Image from 'next/image';

import clsx from 'clsx';

import StatusLabel from '@/components/ui/status-label';
import { Company } from '@/types';

export default function CompanyTableRow({
  id,
  category,
  title,
  status,
  hasPromotions,
  country,
  joinedAt,
}: Company) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs md:text-sm font-medium text-blue-700 rounded-l border-l-4 border-blue-700 px-2 md:px-4">
        {category}
      </td>

      <td className="text-xs md:text-sm px-2 md:px-4">
        <a href={`/companies/${id}`}>{title}</a>
      </td>

      <td className="text-xs md:text-sm px-2 md:px-4">
        <StatusLabel status={status} />
      </td>

      <td className="text-xs md:text-sm px-2 md:px-4">
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'font-medium',
              hasPromotions ? 'text-green-700' : 'text-red-700',
            )}
          >
            {hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>

      <td className="text-xs md:text-sm px-2 md:px-4">{country}</td>

      <td className="text-xs md:text-sm px-2 md:px-4 rounded-r">
        {new Date(joinedAt).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
