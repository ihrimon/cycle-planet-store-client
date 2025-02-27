import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Share2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'SLEEK RUBBER CAR',
    price: '$99.00',
    image: '../../../public/1.png',
  },
  {
    id: 2,
    name: 'XERODYNAMIC ORON PLATE',
    price: '$46.00',
    image: '../../../public/1.png',
  },
  {
    id: 3,
    name: 'LORGEOUS SINEN KNIFE',
    price: '$30.00',
    image: '../../../public/1.png',
  },
  {
    id: 4,
    name: 'DURABLE SILK BAG',
    price: '$39.00',
    image: '../../../public/1.png',
  },
  {
    id: 5,
    name: 'LIGHTWEIGHT MARBLE HAT',
    price: '$66.00',
    image: '../../../public/1.png',
  },
  {
    id: 6,
    name: 'SRACTICAL IRONAL KEYBOARD',
    price: '$30.00',
    image: '/lovable-uploads/a5caded0-3e9e-42e9-9855-283953f3f319.png',
  },
  {
    id: 7,
    name: 'SMALL PAPER WATCH',
    price: '$106.00',
    image: '/lovable-uploads/a5caded0-3e9e-42e9-9855-283953f3f319.png',
  },
  {
    id: 8,
    name: 'PRACTICAL IRON KEYBOARD',
    price: '$578.00',
    image: '/lovable-uploads/a5caded0-3e9e-42e9-9855-283953f3f319.png',
  },
];

const FeaturedProducts = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-12'>
      <div className='text-center mb-12'>
        <p className='text-red-500 text-sm font-medium mb-2'>TRY OUR BIKE</p>
        <h2 className='text-4xl font-bold'>Featured Products</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <Card key={product.id} className='group relative overflow-hidden'>
            <div className='absolute right-4 top-4 z-10 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <button className='rounded-full bg-white p-2 shadow-md hover:bg-gray-100'>
                <Heart className='h-5 w-5' />
              </button>
              <button className='rounded-full bg-white p-2 shadow-md hover:bg-gray-100'>
                <Eye className='h-5 w-5' />
              </button>
              <button className='rounded-full bg-white p-2 shadow-md hover:bg-gray-100'>
                <Share2 className='h-5 w-5' />
              </button>
            </div>
            <div className='aspect-square overflow-hidden'>
              <img
                src={product.image}
                alt={product.name}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-medium text-center'>
                {product.name}
              </h3>
              <p className='mt-2 text-red-500 font-bold text-center'>
                {product.price}
              </p>
              <Button
                className='mt-4 w-full bg-red-500 hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100'
                variant='default'
              >
                ADD TO CART
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;