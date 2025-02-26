import { cn } from '@/lib/utils';
import { OrderStatus } from '@/types/order';
interface StatusBadgeProps {
  status: OrderStatus;
}
export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusStyles = (status: OrderStatus) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Shipping':
        return 'bg-blue-100 text-blue-800';
      case 'Out For Delivery':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      case 'Ordered':
        return 'bg-purple-100 text-purple-800';
      case 'Packed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        getStatusStyles(status)
      )}
    >
      {status}
    </span>
  );
};

