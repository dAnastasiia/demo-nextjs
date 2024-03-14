import { Avatar } from '@/components/ui/avatar';
import getInitials from '@/lib/methods/getInitials/getInitials';
import { Sales } from '@/types';

export function SalesItem({ name, email, value }: Sales) {
  return (
    <div className="flex items-center">
      <Avatar className="text-xs md:text-sm flex h-6 md:h-9 w-6 md:w-9 items-center justify-center space-y-0 border bg-slate-700 text-white">
        {getInitials(name)}
      </Avatar>

      <div className="ml-4 space-y-1">
        <p className="text-xs md:text-sm font-medium leading-none">{name}</p>
        <p className="text-xs md:text-sm text-muted-foreground">{email}</p>
      </div>

      <div className="text-xs md:text-sm ml-auto font-medium">
        &#43;&#36;{value}
      </div>
    </div>
  );
}
