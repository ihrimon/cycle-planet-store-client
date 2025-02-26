import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Circle, CircleChevronDown, CircleChevronUp, } from 'lucide-react';
import { Separator } from '../ui/separator';

type TCategory ={
  name: string;
  count: number;
}
type TBrand ={
  name: string;
  count: number;
}

export const categories: TCategory[] = [
  { name: 'Mountain', count: 6 },
  { name: 'Road', count: 17 },
  { name: 'Hybrid', count: 15 },
  { name: 'BMX', count: 13 },
  { name: 'Electric', count: 38 },
  { name: 'Gravel', count: 14 },
  { name: 'Touring', count: 10 },
  { name: 'Cyclocross', count: 8 },
  { name: 'Track', count: 20 },
  { name: 'Kids', count: 14 },
];

export const brands: TBrand[] = [
  { name: 'Trek', count: 6 },
  { name: 'Specialized', count: 17 },
  { name: 'Giant', count: 15 },
  { name: 'Cannondale', count: 13 },
  { name: 'Scott', count: 38 },
  { name: 'Bianchi', count: 14 },
  { name: 'Cervélo', count: 10 },
  { name: 'Santa Cruz', count: 8 },
  { name: 'Orbea', count: 20 },
  { name: 'Merida', count: 20 },
];

const tags = ['Bicycle', 'Computer', 'Electric', 'flycam', 'headphone'];

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    tags: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SectionHeader = ({
    title,
    section,
  }: {
    title: string;
    section: keyof typeof expandedSections;
  }) => (
    <div
      className='flex justify-between items-center cursor-pointer pb-3'
      onClick={() => toggleSection(section)}
    >
      <h3 className='font-semibold text-md'>{title}</h3>
      {expandedSections[section] ? (
        <CircleChevronUp size={18} />
      ) : (
        <CircleChevronDown size={18} />
      )}
    </div>
  );

  return (
    <div className='w-64 border'>
      <div className='p-6'>
        <SectionHeader title='Product Categories' section='categories' />
        {expandedSections.categories && (
          <ul className='space-y-2'>
            {categories.map((category) => (
              <li
                key={category.name}
                className='flex items-center justify-between text-sm hover:text-blue-600 cursor-pointer'
              >
                <span className='flex items-center gap-1'>
                  <Circle size={10} /> {category.name}
                </span>
                <span className='text-gray-500'>({category.count})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Separator />
      <div className='p-6'>
        <SectionHeader title='Brands' section='brands' />
        {expandedSections.brands && (
          <ul className='space-y-2'>
            {brands.map((brand) => (
              <li
                key={brand.name}
                className='flex items-center justify-between text-sm hover:text-blue-600 cursor-pointer'
              >
                <span className='flex items-center gap-1'>
                  <Circle size={10} /> {brand.name}
                </span>
                <span className='text-gray-500'>({brand.count})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Separator />

      <div className='p-6'>
        <SectionHeader title='Filter by Price' section='price' />
        {expandedSections.price && (
          <div className='space-y-2'>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className='my-4'
            />
            <div className='flex items-center justify-between'>
              <span className='text-sm'>
                Price: ${priceRange[0]} — ${priceRange[1]}
              </span>
              <Button size='sm' variant='outline'>
                Filter
              </Button>
            </div>
          </div>
        )}
      </div>

      <Separator />

      <div className='p-6'>
        <SectionHeader title='Product Tags' section='tags' />
        {expandedSections.tags && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant='secondary'
                className='cursor-pointer hover:bg-gray-200'
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
