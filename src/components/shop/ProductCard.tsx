import { ShoppingCart, Heart, Share2, Eye, MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { QuickView } from './QuickView';
import { useState } from 'react';
import CustomLink from '../shared/CustomLink';
import { useAddCartMutation } from '@/redux/features/shoppingCart/shoppingCartApi';
import { toast } from 'sonner';
import { useAppSelector } from '@/redux/hook';
import { currentUser } from '@/redux/features/auth/authSlice';

const ProductCard = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [addToCart, { data: cartData }] = useAddCartMutation();
  const user = useAppSelector(currentUser);

  const handleAddToCart = async () => {
    const toastId = toast.loading('Adding to shopping cart');
    const cartItem = {
      customer: user?.userId, 
      product: product._id,
      quantity: 1,
      total: product.price,
    };

    const response = await addToCart(cartItem);
    if (response.data.success) {
      toast.success('Product added in Cart successfully', { id: toastId, duration: 3000 });
    }
  };

  console.log('cartData', cartData);

  return (
    <div className='group relative border rounded-lg p-4 hover:shadow-sm hover:border-orange-500 transition-shadow'>
      <div className='relative aspect-square mb-4'>
        <img
          src={product.productImg[0]}
          alt={product.name}
          className='object-cover bg-gray-800 w-full h-full rounded-md'
        />
        <div className='absolute bottom-0 left-0 right-0 p-2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacit'>
          <Button size='icon' variant='secondary' onClick={handleAddToCart}>
            <ShoppingCart className='h-4 w-4' />
          </Button>
          <Button size='icon' variant='secondary'>
            <Heart className='h-4 w-4' />
          </Button>
          <Button
            size='icon'
            variant='secondary'
            onClick={() => setIsQuickViewOpen(true)}
          >
            <Eye className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='space-y-2'>
        <p className='text-sm text-muted-foreground'>{product.category}</p>
        <h3 className='font-medium truncate'>{product.name}</h3>
        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold text-orange-500'>
            ${product.price}
          </p>
          <CustomLink product={product}>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>View Details</span>
              <MoveRight size={18} />
            </div>
          </CustomLink>
        </div>
      </div>

      <QuickView
        open={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
