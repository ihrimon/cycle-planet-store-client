import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-[400px] mb-10 space-y-3'>
        <h1 className='text-3xl font-semibold'>Popular Bicycles</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
          corrupti minima vero quod facilis,{' '}
        </p>
      </div>
      <div className='mb-8 flex flex-wrap gap-2'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
