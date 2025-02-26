import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import { StarRating } from '../shared/StarRating';

interface QuickViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    price: number;
    rating: number;
    category: string;
    productImg: string;
    description?: string;
  };
}

export const QuickView = ({ open, onOpenChange, product }: QuickViewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product.productImg];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <div className='flex justify-between items-center'>
            <DialogTitle className='text-2xl font-bold'>
              {product.name}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='relative'>
            <div className='aspect-square relative overflow-hidden rounded-lg'>
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className='object-cover w-full h-full'
              />
              <div className='absolute inset-0 flex items-center justify-between p-4'>
                <Button
                  variant='outline'
                  size='icon'
                  className='bg-white/80 hover:bg-white'
                  onClick={previousImage}
                >
                  <ArrowLeft className='h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='bg-white/80 hover:bg-white'
                  onClick={nextImage}
                >
                  <ArrowRight className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
          <div className='space-y-6'>
            <StarRating rating={5} />
            <div className='mt-4 text-2xl font-bold text-primary'>
              ${product.price}
            </div>
            <p className='text-muted-foreground'>
              {product.description || 'No description available.'}
            </p>
            <Button className='w-full'>ADD TO CART</Button>
            <p className='text-sm text-muted-foreground'>
              Category: {product.category}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
