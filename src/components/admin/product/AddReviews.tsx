import { useForm } from 'react-hook-form';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface ReviewFormData {
  name: string;
  email: string;
  message: string;
  rating: number;
}

const AddReviews = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ReviewFormData>({
    defaultValues: {
      rating: 0,
    },
  });

  const currentRating = watch('rating');

  const reviews: Review[] = [
    {
      id: 1,
      name: 'John Smith',
      date: 'January 26, 2024',
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: '../../../../public/customer-17.jpg',
    },
    {
      id: 2,
      name: 'David Warner',
      date: 'January 28, 2024',
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: '../../../../public/customer-7.jpg',
    },
  ];

  const onSubmit = (data: ReviewFormData) => {
    console.log(data);
    // Handle form submission here
  };

  const renderStars = (rating: number, isInteractive: boolean = false) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          } ${isInteractive ? 'cursor-pointer' : ''}`}
          onClick={() => isInteractive && setValue('rating', index + 1)}
        />
      ));
  };

  return (
    <div className='space-y-8 mb-7'>
      <div className='space-y-6'>
        <h2 className='text-2xl font-semibold'>2 Review</h2>

        {reviews.map((review) => (
          <div key={review.id} className='flex gap-4 pb-6 border-b'>
            <Avatar className='h-12 w-12'>
              <AvatarImage src={review.avatar} alt={review.name} />
            </Avatar>
            <div className='flex-1 space-y-2'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='font-medium'>{review.name}</p>
                  <p className='text-sm text-gray-500'>{review.date}</p>
                </div>
                <div className='flex gap-1'>{renderStars(review.rating)}</div>
              </div>
              <p className='text-gray-600'>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='space-y-6'>
        <h3 className='text-xl font-semibold'>Add A Review</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-2'>
            <p className='font-medium'>Your Rating</p>
            <div className='flex gap-1'>{renderStars(currentRating, true)}</div>
          </div>

          <Textarea
            {...register('message')}
            placeholder='Your Message'
            className='min-h-[150px]'
          />

          <Button type='submit' className='bg-red-600 hover:bg-red-700'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
