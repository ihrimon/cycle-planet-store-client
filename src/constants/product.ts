import { TBrand, TCategory } from '@/types';

export const categoryOptions = [
  { value: 'Mountain', label: 'Mountain' },
  { value: 'Road', label: 'Road' },
  { value: 'Hybrid', label: 'Hybrid' },
  { value: 'BMX', label: 'BMX' },
  { value: 'Electric', label: 'Electric' },
  { value: 'Gravel', label: 'Gravel' },
  { value: 'Touring', label: 'Touring' },
  { value: 'Cyclocross', label: 'Cyclocross' },
  { value: 'Track', label: 'Track' },
  { value: 'Kids', label: 'Kids' },
];

export const brandOptions = [
  { value: 'Trek', label: 'Trek' },
  { value: 'Specialized', label: 'Specialized' },
  { value: 'Giant', label: 'Giant' },
  { value: 'Cannondale', label: 'Cannondale' },
  { value: 'Scott', label: 'Scott' },
  { value: 'Bianchi', label: 'Bianchi' },
  { value: 'Cervélo', label: 'Cervélo' },
  { value: 'Santa Cruz', label: 'Santa Cruz' },
  { value: 'Orbea', label: 'Orbea' },
  { value: 'Merida', label: 'Merida' },
];

export const CategoryType: TCategory[] = [
  'Mountain',
  'Road',
  'Hybrid',
  'Bmx',
  'Electric',
  'Gravel',
  'Touring',
  'Cyclocross',
  'Track',
  'Kids',
];

export const BrandType: TBrand[] = [
  'Trek',
  'Specialized',
  'Giant',
  'Cannondale',
  'Scott',
  'Bianchi',
  'Cervelo',
  'Santa Cruz',
  'Orbea',
  'Merida',
];