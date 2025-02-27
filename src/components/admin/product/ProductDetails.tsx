import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Heart,
  PlusCircle,
  Minus,
  Plus,
  CheckCircle,
  Check,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Banner from '@/components/shared/Banner';
import { useLocation } from 'react-router-dom';
import Container from '@/components/shared/Container';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { TProduct } from '@/types';

export default function ProductDetails() {
  const [isZoomed, setIsZoomed] = useState(false);
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const product = location.state?.product as TProduct;

  if (!product) {
    return (
      <div className='text-center py-10 text-red-500'>
        Product data not found
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(
    product.productImg[0] || ''
  );

  const handleAddToCart = () => {
    console.log('clicked add to card button');
  };

  const handleWishlist = () => {
    toast({
      title: 'Added to Wishlist',
      description: 'SPARK 700 RC has been added to your wishlist',
    });
  };

  return (
    <div>
      <Banner
        title={product.name}
        breadcrumbs={[
          { label: 'Shop', href: '/shop' },
          { label: 'Product Details', href: '' },
        ]}
      />
      <Container>
        <div className='mx-auto py-8 max-w-7xl animate-fade-in dark:text-white/80'>
          <div className='flex flex-col lg:flex-row gap-8 mb-16'>
            <div className='w-[120px] space-y-6 text-center'>
              {product.productImg.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    selectedImage === image
                      ? 'dark:bg-gray-900/30 rounded-lg text-primary'
                      : 'grayscale'
                  }`}
                >
                  <button
                    onClick={() => setSelectedImage(image)}
                    className={`relative rounded-lg overflow-hidden w-24 h-24 transition-all duration-200 ${
                      selectedImage === image ? '' : 'hover:grayscale-0'
                    }`}
                  >
                    <div key={index} className='space-y-3'>
                      <img
                        src={image}
                        alt={'Cycle1'}
                        className={cn(
                          'w-3/4 mx-auto',
                          selectedImage === image ? 'mb-2' : 'opacity-50'
                        )}
                      />
                      <small>Spark 700 RC</small>
                      <Separator
                        className={`${selectedImage === image && 'hidden'}`}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className='lg:w-4/6'>
              <div className='relative light:bg-gray-50 dark:bg-gray-900/30 rounded-lg overflow-hidden'>
                <div
                  className={`relative cursor-zoom-in transition-transform duration-300 ${
                    isZoomed ? 'scale-110' : 'scale-100'
                  }`}
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <img
                    src={selectedImage}
                    alt='Cycyle details'
                    className='w-full p-8 mx-auto items-center justify-center'
                  />
                </div>
              </div>
              <div className='flex gap-4 p-6'>
                {product.productImg.slice(1, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative rounded-lg overflow-hidden w-24 h-24 transition-all duration-200 ${
                      selectedImage === image
                        ? 'ring-1 ring-primary/30'
                        : 'hover:ring-1 hover:ring-primary'
                    }`}
                  >
                    <img
                      src={image}
                      alt='Cycle'
                      className='w-full p-2 mx-auto'
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className='lg:w-2/6'>
              <div className='sticky top-8'>
                <div className='space-y-6'>
                  <div>
                    <h4 className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
                      IDS SL DROPOUT SYSTEM
                    </h4>
                    <h1 className='text-4xl font-bold mt-2'>{product.name}</h1>
                  </div>

                  <div>
                    <h2 className='text-lg font-medium mb-2'>PRICE</h2>
                    <p className='text-3xl font-bold'>${product.price}</p>
                  </div>

                  <div className='mt-6 text-sm'>
                    <p>
                      <span className='font-semibold'>SKU: {product.sku}</span>{' '}
                      N/A
                    </p>
                    <p>
                      <span className='font-semibold'>Category:</span>{' '}
                      {product.category}
                    </p>
                    <Badge className='my-3 bg-gray-900/50 text-primary hover:bg-transparent'>
                      Free worldwide shipping on orders over $50
                    </Badge>
                    <ul className='mt-2 space-y-2 text-muted-foreground'>
                      <li className='flex items-center gap-2'>
                        <Check className='w-5 h-5 text-primary' />
                        Hassle-free returns within 30 days.
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='w-5 h-5 text-primary' />
                        Order before 2:30 PM for same-day shipping.
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='w-5 h-5 text-primary' />
                        We're here to help anytime, day or night.
                      </li>
                    </ul>
                  </div>

                  <div className='flex items-center mt-4 gap-4'>
                    <div className='flex items-center rounded-lg'>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <span className='px-3 py-1 border rounded-lg'>
                        {quantity}
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        <Plus className='h-4 w-4' />
                      </Button>
                    </div>

                    <Button
                      onClick={handleAddToCart}
                      className='bg-primary hover:bg-transparent hover:text-primary text-white px-4'
                    >
                      <PlusCircle className='w-5 h-5' /> Add to Cart
                    </Button>

                    <Button onClick={handleWishlist} className='bg-transparent'>
                      <Heart className='w-5 h-5' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductTabs />
          <RelatedProducts />
        </div>
      </Container>
    </div>
  );
}
