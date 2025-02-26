import img from '../../../public/news.png';

import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Container from '../shared/Container';

const features = [
  {
    title: 'Double Wall Rims',
    description:
      'Maecenas volutpat blandit aliquam etiam erat velit scelerisque feugiat vivamus at augerat',
  },
  {
    title: 'Carbon Steel Frame',
    description:
      'Augue neque gravida in fermentum et sollicitudin. Sed id semper risus in hendrerit gravida rutru',
  },
  {
    title: 'Suspension Fork',
    description:
      'Blandit aliquam etiam erat velit scelerisque in dictum non conse volutpat sed ctetur',
  },
];

const inspirations = [
  {
    number: '01',
    text: 'Neque ornare aenean euismod elementum',
  },
  {
    number: '02',
    text: 'Mi tempus imperdiet nulla malesuada',
  },
  {
    number: '03',
    text: 'Luctus accumsan tortor posuere ac sequat semper',
  },
];

const blogPosts = [
  {
    date: 'Nov 05 2023',
    category: 'TIPS & TRICKS',
    title: 'Introducing: The All-New Trance Advanced Pro 2024!',
    image: '/lovable-uploads/7185ee04-6254-4eec-9036-1b9d1d755fa0.png',
    excerpt:
      'Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisl in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum e...',
  },
  {
    date: 'Nov 01 2023',
    title: 'Introducing: Titan Racing Partners With Weekend',
    image: '/lovable-uploads/75e1919a-38c3-425c-82df-1da174ca4ff5.png',
  },
  {
    date: 'Nov 01 2023',
    title: 'Explore: A Home Away From Home',
    image: '/lovable-uploads/2c2ccbaa-9bdb-425b-8039-81baca51dd40.png',
  },
  {
    date: 'Nov 01 2023',
    title: 'Racer Blog: Tiffany Keep - In The Zone',
    image: '/lovable-uploads/75e1919a-38c3-425c-82df-1da174ca4ff5.png',
  },
];

const LatestNews = () => {
  return (
    <Container>
      <div className='min-h-screen'>
        <main className='container mx-auto px-4 py-8'>
          <section className='mt-32'>
            <div className='text-center mb-16'>
              <span className='text-orange-500 uppercase tracking-wider'>
                On The Blog
              </span>
              <h2 className='text-4xl font-bold mt-2'>Latest News</h2>
            </div>

            <div className='grid grid-cols-1 gap-8'>
              {/* Featured Blog Post */}
              <Card className='relative overflow-hidden'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='relative h-[400px] md:h-auto'>
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                    {blogPosts[0].category && (
                      <span className='absolute top-4 left-4 bg-white px-3 py-1 text-sm'>
                        {blogPosts[0].category}
                      </span>
                    )}
                  </div>
                  <CardContent className='flex flex-col justify-center p-8'>
                    <time className='text-orange-500'>{blogPosts[0].date}</time>
                    <h3 className='text-2xl font-bold mt-4 mb-6'>
                      {blogPosts[0].title}
                    </h3>
                    <p className='text-gray-600 mb-6'>{blogPosts[0].excerpt}</p>
                    <button className='flex items-center gap-2 text-black hover:gap-3 transition-all'>
                      Read More
                      <ArrowRight className='h-4 w-4' />
                    </button>
                  </CardContent>
                </div>
              </Card>

              {/* Other Blog Posts */}
              <div className='grid md:grid-cols-3 gap-8'>
                {blogPosts.slice(1).map((post, index) => (
                  <Card key={index} className='overflow-hidden'>
                    <div className='relative h-48'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='absolute inset-0 w-full h-full object-cover'
                      />
                    </div>
                    <CardContent className='p-6'>
                      <time className='text-orange-500 text-sm'>
                        {post.date}
                      </time>
                      <h3 className='font-semibold mt-2 hover:text-orange-500 transition-colors'>
                        {post.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Container>
  );
};

export default LatestNews;
