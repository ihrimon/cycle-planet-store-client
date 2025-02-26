import { Separator } from '@/components/ui/separator';

interface Specification {
  label: string;
  value: string;
}

const ProductDescription = () => {
  const specifications: Specification[] = [
    { label: 'Brand', value: 'Apple' },
    { label: 'Model', value: 'MacBook Pro' },
    { label: 'Year', value: '2023' },
    { label: 'Color', value: 'Space Gray' },
  ];

  return (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Description</h3>
        <p>
          Experience the power of the latest MacBook Pro. Featuring the advanced
          M2 chip, stunning Retina display, and all-day battery life. Perfect
          for professionals and creatives who demand the best in performance and
          reliability.
        </p>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Specifications</h3>
        <div className='grid gap-4'>
          {specifications.map((spec, index) => (
            <div key={index} className='grid grid-cols-2 items-center'>
              <div className='font-medium'>{spec.label}</div>
              <div className='text-gray-600'>{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      <Separator className='my-6' />

      <div>
        <h3 className='text-lg font-semibold mb-4'>Warranty Information</h3>
        <p className='text-gray-600'>
          This product comes with a 1-year limited warranty. Extended warranty
          options are available at the time of purchase.
        </p>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Product Video</h3>
        <div className='aspect-video bg-gray-100 rounded-lg flex items-center justify-center'>
          <p className='text-gray-500'>Video placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
