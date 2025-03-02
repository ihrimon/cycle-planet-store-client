import { useState } from 'react';
import {
  Leaf,
  Truck,
  CreditCard,
  Headphones,
  ShoppingCart,
  Calendar,
  Clock,
  Shirt,
  Package,
  Wrench,
  Hammer,
  Bike,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import CustomBadge from '../shared/CustomBadge';

type TCoreValues = {
  id: string;
  values: string;
  icon: React.ReactNode;
};

const coreValues: TCoreValues[] = [
  {
    id: 'premium-bikes',
    values: 'Premium Bicycles',
    icon: <Bike className='w-8 h-8' />,
  },
  {
    id: 'repair-maintenance',
    values: 'Repair & Maintenance',
    icon: <Wrench className='w-8 h-8' />,
  },
  {
    id: 'custom-bike-build',
    values: 'Custom Bike Builds',
    icon: <Hammer className='w-8 h-8' />,
  },
  {
    id: 'accessories',
    values: 'Bike Accessories',
    icon: <Package className='w-8 h-8' />,
  },
  {
    id: 'cycling-gear',
    values: 'Cycling Gear & Apparel',
    icon: <Shirt className='w-8 h-8' />,
  },
  {
    id: 'test-rides',
    values: 'Test Ride Sessions',
    icon: <Clock className='w-8 h-8' />,
  },
  {
    id: 'rental-service',
    values: 'Bike Rental Service',
    icon: <Calendar className='w-8 h-8' />,
  },
  {
    id: 'online-store',
    values: 'Online Store',
    icon: <ShoppingCart className='w-8 h-8' />,
  },
  {
    id: 'customer-support',
    values: '24/7 Customer Support',
    icon: <Headphones className='w-8 h-8' />,
  },
  {
    id: 'secure-payment',
    values: 'Secure Payment',
    icon: <CreditCard className='w-8 h-8' />,
  },
  {
    id: 'fast-shipping',
    values: 'Fast & Reliable Shipping',
    icon: <Truck className='w-8 h-8' />,
  },
  {
    id: 'eco-friendly',
    values: 'Eco-Friendly Initiative',
    icon: <Leaf className='w-8 h-8' />,
  },
];

const CoreValues = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='max-w-4xl w-full mx-auto flex flex-col items-center animate-fade-in'>
        <CustomBadge text='Features' />
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-semibold text-primary mb-4'>
            Core Values
          </h1>
          <p className='text-muted-foreground max-w-lg'>
            To continue, select your role in this project, please.
            <br />
            If you don't know your role clarify it with your Project Manager.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
          {coreValues.map((role) => (
            <button
              key={role.id}
              className={cn(
                'group relative flex flex-col items-center justify-center p-6 transition-all duration-300 ',
                'border',
                'hover:shadow-lg transform hover:-translate-y-1',
                selectedItem === role.id
                  ? 'border-primary/50 shadow-md rounded-md'
                  : 'border-gray-100/50 dark:border-gray-700/20 hover:dark:bg-gray-900 hover:rounded-md'
              )}
              onClick={() => setSelectedItem(role.id)}
            >
              <div
                className={cn(
                  'w-16 h-16 mb-4 flex items-center justify-center',
                  'text-muted-foreground hover:text-primary transition-colors duration-300 hover:dark:text-primary',
                  selectedItem === role.id && 'text-primary'
                )}
              >
                {role.icon}
              </div>
              <span
                className={cn(
                  'text-md font-medium text-muted-foreground hover:dark:text-gray-200 transition-colors duration-300',
                  selectedItem === role.id && 'dark:text-gray-200'
                )}
              >
                {role.values}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
