import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface customToasterProps {
  title?: string;
  description: string;
  action?: ReactNode;
  actionType?: 'success' | 'error' | 'warning' | 'info';
  altText?: string;
}

const actionStyles: Record<string, string> = {
  success: 'border',
  info: 'border',
  error: 'border border-red-500 text-red-500',
  warning: 'border border-yellow-500 text-yellow-500',
};

const customToaster = ({
  title,
  description,
  action,
  actionType = 'info',
  altText,
}: customToasterProps) => {
  return toast({
    title,
    description,
    action: action ? (
      <ToastAction
        altText={altText ?? 'Try Again'}
        className={cn(
          'px-4 py-2 rounded-lg border',
          actionStyles[actionType],
          'hover:bg-primary hover:text-white transition-all'
        )}
      >
        {action}
      </ToastAction>
    ) : undefined,
    className: cn(
      actionStyles[actionType],
      'border p-4 rounded-md shadow-md hide-close'
    ),
  });
};

export default customToaster;
