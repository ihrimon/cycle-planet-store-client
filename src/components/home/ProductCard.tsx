import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  originalPrice: string;
  salePrice: string;
  isNew?: boolean;
}

const ProductCard = ({
  title,
  category,
  image,
  originalPrice,
  salePrice,
  isNew = false,
}: ProductCardProps) => {
  return (
    <Card className='group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg'>
      {isNew && (
        <div className='absolute left-4 top-4 z-10'>
          <span className='rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white'>
            New
          </span>
        </div>
      )}
      <div className='aspect-square overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='p-4'>
        <p className='text-sm text-muted-foreground'>{category}</p>
        <h3 className='mt-1 text-lg font-medium'>{title}</h3>
        <div className='mt-2 flex items-center gap-2'>
          <span className='text-lg font-bold text-red-500'>{salePrice}</span>
          <span className='text-sm text-muted-foreground line-through'>
            {originalPrice}
          </span>
        </div>
        <Button
          className='mt-4 w-full bg-primary transition-colors hover:bg-red-600'
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
