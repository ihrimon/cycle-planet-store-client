import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, PlusCircle, Minus, Plus } from 'lucide-react';
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
  }

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
        {/* <img src={'../../../../public/product-details.png'} alt='' /> */}
        <div className='mx-auto py-8 max-w-7xl animate-fade-in'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='w-[120px] space-y-6 text-center'>
              {product.productImg.map((image, index) => (
                <div
                key={index}
                  className={`${
                    selectedImage === image ? 'bg-gray-50 rounded-lg text-orange-400' : 'grayscale'
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
                        // className=' opacity-50'
                        // className={`w-3/4 mx-auto${
                        //   selectedImage === image && 'hidden'
                        // }`}
                        className={cn('w-3/4 mx-auto',
                          selectedImage === image? 'mb-2' : 'opacity-50' 
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
              <div className='relative bg-gray-50 rounded-lg overflow-hidden'>
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
                        ? 'ring-1 ring-orange-300'
                        : 'hover:ring-1 hover:ring-orange-100'
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
                    {/* <p className='text-gray-600 mt-4'>{product?.description}</p> */}
                  </div>

                  <div>
                    <h2 className='text-lg font-medium mb-2'>PRICE</h2>
                    <p className='text-3xl font-bold'>${product.price}</p>
                  </div>

                  <div className='mt-6 text-sm'>
                    <p>
                      <span className='font-semibold'>SKU:</span> N/A
                    </p>
                    <p>
                      <span className='font-semibold'>Category:</span>{' '}
                      {product.category}
                    </p>
                    <Badge className='mt-2 bg-blue-100 text-blue-800 hover:bg-transparent'>
                      Free worldwide shipping on orders over $50
                    </Badge>
                    <p className='text-muted-foreground mt-2'>
                      ✔ 30 days easy returns
                    </p>
                    <p className='text-muted-foreground'>
                      ✔ Order before 2.30pm for same day dispatch
                    </p>
                    <p className='text-muted-foreground'>
                      ✔ Order before 2.30pm for same day dispatch
                    </p>
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

                    <Button onClick={handleAddToCart} className='bg-green-500 hover:bg-green-600 text-white px-4'>
                      <PlusCircle className='w-5 h-5' /> Add to Cart
                    </Button>

                    <Button
                      variant='outline'
                      onClick={handleWishlist}
                      className='flex-1 gap-2'
                    >
                      <Heart className='w-5 h-5' />
                      Add to wishlist
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
