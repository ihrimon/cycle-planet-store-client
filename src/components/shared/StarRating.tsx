import { Star, StarHalf } from 'lucide-react';
interface StarRatingProps {
  rating: number;
  maxRating?: number;
}
export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return (
    <div className='flex items-center gap-0.5'>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className='w-4 h-4 fill-yellow-400 text-yellow-400'
        />
      ))}
      {hasHalfStar && <StarHalf className='w-4 h-4 text-yellow-400' />}
      {[...Array(maxRating - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-star-${i}`} className='w-4 h-4 text-gray-300' />
      ))}
    </div>
  );
};
