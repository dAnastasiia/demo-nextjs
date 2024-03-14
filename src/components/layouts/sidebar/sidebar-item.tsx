import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

export interface SidebarItemProps {
  pathname: string;
  text: string;
  src: string;
  alt: string;
  current?: boolean;
}

export default function SidebarItem({
  current,
  pathname,
  src,
  alt,
  text,
}: SidebarItemProps) {
  return (
    <li className="py-1 md:py-3">
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5 ',
          current &&
            'after:h-full after:ml-auto after:border-2 after:border-slate-400 after:rounded-sm',
        )}
      >
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="text-base md:text-md lg:text-lg font-medium text-slate-100 hover:text-slate-400">
          {text}
        </span>
      </Link>
    </li>
  );
}
