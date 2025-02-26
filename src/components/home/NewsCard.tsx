import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  image: string;
}

export function NewsCard({ category, date, title, image }: NewsCardProps) {
  return (
    <Card className='group cursor-pointer transition-all hover:bg-accent'>
      <CardContent className='flex items-start justify-between p-6'>
        <div className='space-y-4'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <Badge variant='secondary' className='rounded-full'>
              {category}
            </Badge>
            <span>•</span>
            <span>{date}</span>
          </div>
          <h3 className='text-xl font-semibold leading-tight'>{title}</h3>
        </div>
        <div>
          <img src={image} className='w-[200px]'/>
        </div>
        <ArrowUpRight className='h-5 w-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
      </CardContent>
    </Card>
  );
}
