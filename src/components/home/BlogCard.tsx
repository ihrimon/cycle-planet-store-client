import { MessageCircleMore, MoveRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  date: {
    day: string;
    month: string;
  };
  author: string;
  comments: number;
  title: string;
  image: string;
}

export function BlogCard({
  date,
  author,
  comments,
  title,
  image,
}: BlogCardProps) {
  return (
    <div className='relative group overflow-hidden border-none shadow-none'>
      <div className='relative'>
        <div className='absolute right-4 z-10'>
          <div className='flex flex-col items-center rounded-b-full bg-primary px-3 py-2 text-white'>
            <span className='text-xl font-bold leading-none'>{date.day}</span>
            <span className='text-sm uppercase'>{date.month}</span>
          </div>
        </div>
        <div className='overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt={title}
            className='h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110'
          />
        </div>
      </div>
      <div className='mt-6 space-y-4 p-5'>
        <div className='flex items-center gap-6 text-sm text-muted-foreground'>
          <span className='flex items-center gap-2'>
            <div className='flex gap-1'>
              <User size={16} className='text-primary' />
              <span>by</span>
              <span className='font-medium text-foreground'>{author}</span>
            </div>
          </span>
          <div className='flex gap-1'>
            <MessageCircleMore size={16} className='text-primary' />
            <span>{comments} Comments</span>
          </div>
        </div>
        <h3 className='text-2xl font-semibold leading-tight'>{title}</h3>
        <Link to={'/news'} className='flex items-center  gap-3 font-medium'>
          <p className='hover:underline hover:text-green-500'>Read More</p>
          <MoveRight className='transition-transform group-hover/btn:translate-x-1  hover:text-green-500' />
        </Link>
      </div>
    </div>
  );
}
