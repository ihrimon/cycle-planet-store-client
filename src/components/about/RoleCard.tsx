import { cn } from '@/lib/utils';

interface RoleCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}

export const RoleCard = ({
  title,
  icon,
  isSelected,
  className,
  ...props
}: RoleCardProps) => {
  return (
    <button
      className={cn(
        'group relative flex flex-col items-center justify-center p-6 transition-all duration-300',
        ' hover:bg-gray-50 border-2',
        'hover:shadow-lg transform hover:-translate-y-1',
        isSelected ? 'border-green-500/20 shadow-lg' : 'border-green-100/20',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'w-16 h-16 mb-4 flex items-center justify-center',
          'text-gray-400 group-hover:text-primary transition-colors duration-300',
          isSelected && 'text-primary'
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          'text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300',
          isSelected && 'text-gray-900'
        )}
      >
        {title}
      </span>
    </button>
  );
};
