import { Avatar } from '@/components/ui/avatar';
import getInitials from '@/lib/methods/getInitials/getInitials';
import { Sales } from '@/types';

export function SalesItem({ name, email, value }: Sales) {
  return (
    <div className="flex items-center">
      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border bg-slate-700 text-white">
        {getInitials(name)}
      </Avatar>

      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>

      <div className="ml-auto font-medium">&#43;&#36;{value}</div>
    </div>
  );
}
