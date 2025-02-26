import { Button } from '@/components/ui/button';
import { NewsCard } from './NewsCard';

const newsItems = [
  {
    category: 'TECHNOLOGY',
    date: 'JUNE 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: '/1.png',
  },
  {
    category: 'BUSINESS',
    date: 'JUNE 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: '/1.png',
  },
  {
    category: 'SCIENCE',
    date: 'JUNE 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: '/1.png',
  },
];

export function HomeNews() {
  return (
    <section className='flex w-full max-w-7xl mx-auto'>
      <div className=''>
        <div className='space-y-4'>
          <h2 className='text-4xl font-bold tracking-tight'>Latest News</h2>
          <p className='text-muted-foreground max-w-[400px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            incididunt ut labore et dolore magna.
          </p>
        </div>
        <Button
          variant='outline'
          className='group text-lg font-medium hover:bg-transparent hover:text-primary px-6 my-20'
        >
          View All News
          <div className='ml-2 h-8 w-8 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors' />
        </Button>
      </div>

      <div className='grid gap-4'>
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            category={item.category}
            date={item.date}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
