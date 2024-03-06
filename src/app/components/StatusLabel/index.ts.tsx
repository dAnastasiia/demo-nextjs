import clsx from 'clsx';

export enum Status {
  Active = 'Active',
  NotActive = 'Not Active',
  Pending = 'Pending',
  Suspended = 'Suspended',
}

export interface StatusLabelProps {
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  status,
  disabled = false,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === Status.Active && 'text-green-700 bg-green-100',
        status === Status.NotActive && 'text-red-700 bg-red-100',
        status === Status.Pending && 'text-orange-700 bg-orange-100',
        status === Status.Suspended && 'text-blue-700 bg-blue-100',
        {
          ['opacity-75 cursor-not-allowed text-gray-700 bg-gray-300']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {status}
    </div>
  );
}
