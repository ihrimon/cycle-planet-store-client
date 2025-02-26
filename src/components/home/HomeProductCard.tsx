import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  weight: string;
  price: number;
  originalPrice?: number;
  rating: number;
}

const HomeProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  weight,
  price,
  originalPrice,
  rating,
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className='w-4 h-4 fill-yellow-400 text-primary' />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key='half'
          className='w-4 h-4 fill-yellow-400 text-yellow-400'
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className='w-4 h-4 text-yellow-400'
          strokeWidth={1.5}
        />
      );
    }

    return stars;
  };

  return (
    <div className='flex flex-col items-center p-4 bg-gray-700/30 rounded-lg'>
      <div className='relative mb-4'>
        <img src={image} alt={name} className='p-4 object-contain' />
        <span className='absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded'>
          -20%
        </span>
      </div>
      <p className='text-sm text-gray-500 mb-1'>{weight}</p>
      <h3 className='text-sm font-medium text-gray-900 mb-2 text-center'>
        {name}
      </h3>
      <div className='flex gap-1 mb-2'>{renderStars()}</div>
      <div className='flex items-center gap-2 mb-3'>
        <span className='text-lg font-semibold text-green-600'>
          ${price.toFixed(2)}
        </span>
        {originalPrice && (
          <span className='text-sm text-gray-400 line-through'>
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <button className='hover:bg-primary w-full text-white bg-transparent py-2 px-4 rounded-full hover:text-secondary transition-colors'>
        Add To Cart
      </button>
    </div>
  );
};

export default HomeProductCard;
