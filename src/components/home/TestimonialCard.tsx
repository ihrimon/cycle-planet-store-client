import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  image,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className='relative overflow-visible bg-white/50 backdrop-blur-sm'>
      <CardContent className='relative z-10 grid gap-4 p-6'>
        <div className='flex items-center gap-4'>
          <div className='overflow-hidden rounded-2xl'>
            <img src={image} alt={name} className='h-16 w-16 object-cover' />
          </div>
          <div>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-sm text-muted-foreground'>{role}</p>
          </div>
        </div>
        <div className='flex gap-0.5'>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className='h-4 w-4 fill-purple-500 text-purple-500' />
          ))}
        </div>
        <p className='text-sm leading-relaxed text-muted-foreground'>
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
