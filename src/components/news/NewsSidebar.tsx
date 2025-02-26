import React from 'react';
import Container from '../shared/Container';
import { Badge } from '../ui/badge';
import { ChartArea, MessageCircle, Search } from 'lucide-react';
import TrendingCarousel from '../shared/TrendingCarousel';
import { Input } from '../ui/input';
import BlogComments from './BlogComments';
import { Separator } from '../ui/separator';
import BlogDescription from './BlogDescription';

type TCategoryBrandProps = {
  name: string;
};

const categories: TCategoryBrandProps[] = [
  { name: 'Mountain' },
  { name: 'Road' },
  { name: 'Electric' },
  { name: 'Gravel' },
  { name: 'Hybrid' },
];

export const brands: TCategoryBrandProps[] = [
  { name: 'Trek' },
  { name: 'Specialized' },
  { name: 'Giant' },
  { name: 'Canyon' },
  { name: 'Scott' },
];

const articles = [
  {
    id: 1,
    category: 'Mountain',
    title: 'Your Career After a Promotion',
    date: '30 MAR 2020',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 2,
    category: 'Road',
    title: 'Changing Your Lifestyle is Easy',
    date: '30 MAR 2020',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 4,
    category: 'Electric',
    title: 'Secret Tools for Easy Projects’ Completion',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 5,
    category: 'Gravel',
    title: 'Are You Tired of Running in Time Circles?',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 5,
    category: 'Hybrid',
    title: 'Are You Tired of Running in Time Circles?',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 5,
    category: 'Moountain',
    title: 'Are You Tired of Running in Time Circles?',
    image: '../../../public/cycle.jpg',
  },
  {
    id: 5,
    category: 'Road',
    title: 'Are You Tired of Running in Time Circles?',
    image: '../../../public/cycle.jpg',
  },
];

const NewsHome: React.FC = () => {
  return (
    <Container>
      <TrendingCarousel />

      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-6'>
        <div className='col-span-1 md:col-span-1 lg:col-span-1 flex flex-col space-y-10'>
          {articles.slice(0, 2).map((article) => (
            <div key={article.id}>
              <div>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full'
                />
                <p className='text-gray-500 mt-2 underline'>
                  {article.category}
                </p>
                <h3 className='font-semibold text-lg mt-1 hover:underline'>
                  {article.title}
                </h3>
                <div className='flex text-xs text-gray-400 mt-1 gap-3'>
                  <p>{article.date}</p>|
                  <button className='flex items-center gap-1 hover:text-blue-500'>
                    <MessageCircle size={16} /> {3}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className='bg-gray-100 p-5 space-y-3 rounded-lg'>
            <h3>Categories</h3>
            <ul className='space-y-2'>
              {categories.slice(0, 5).map((category) => (
                <li
                  key={category.name}
                  className='flex items-center bg-gray-300 rounded-md gap-2 text-sm hover:bg-gray-500 p-2 hover:rounded-md cursor-pointer'
                >
                  <ChartArea /> <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-gray-100 p-5 space-y-3 rounded-lg'>
            <h3>Brands</h3>
            <ul className='space-y-2'>
              {brands.slice(0, 5).map((category) => (
                <li
                  key={category.name}
                  className='flex items-center bg-gray-300 rounded-md gap-2 text-sm hover:bg-gray-500 p-2 hover:rounded-md cursor-pointer'
                >
                  <ChartArea /> <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='col-span-1 md:col-span-2 lg:col-span-2'>
          <div className='relative w-full'>
            <img
              src='../../../public/post-1.jpg'
              alt='Main Article'
              className='w-full rounded-md'
            />
            <Badge className='absolute top-2 left-2 text-xs px-3 bg-orange-500 text-white shadow-md'>
              Mountain
            </Badge>
          </div>
          <div className=''>
            <div className='flex gap-3 items-center text-xs text-gray-400 my-3'>
              <p>
                BY <span className='font-semibold'>{'HENRY SANDERS'}</span>
              </p>
              |<p>{`27 FEB 2025`}</p>|
              <button className='flex items-center gap-1 hover:text-blue-500'>
                <MessageCircle size={16} /> {3}
              </button>
            </div>
            <h2 className='text-3xl font-bold'>
              What Beauty Trends Can Turn a Person Into
            </h2>
            <p className='text-sm text-gray-600 mt-2'>
              Navigating the complexities of immigration can be overwhelming,
              but with the right advice and guidance, the process becomes
              manageable and less stressful. In this blog, we dive deep into the
              crucial aspects of immigration and share valuable insights that
              can help individuals and families make well-informed decisions
              throughout their journey.
            </p>
            <BlogDescription />
            <p className='text-sm text-gray-600 mt-2'>
              Today, modern beauty bloggers make money by popularizing trends
              that could cause serious health issues bloggers make money by
              popularizing trends Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatem possimus at eos sunt, corporis
              recusandae sequi quaerat architecto asperiores repudiandae
              blanditiis dolore consequatur expedita quo, commodi iure, id
              quibusdam tempora.
            </p>
          </div>
          <BlogComments />
        </div>

        {/* Right Section */}
        <div className='col-span-1 md:col-span-1 lg:col-span-1 flex flex-col space-y-5'>
          <div className='relative'>
            <Input className='bg-gray-100 p-6' placeholder='Seearch' />
            <Search className='ml-auto absolute bottom-3 right-4' />
          </div>
          <div>
            <h3>Recent Posts</h3>
            <div className='bg-gray-100 p-5 space-y-3 rounded-lg'>
              {articles.slice(2).map((article) => (
                <div key={article.id}>
                  <div className='flex items-center gap-4'>
                    <div>
                      <p className='text-gray-500 underline cursor-pointer'>
                        {article.category}
                      </p>
                      <h3 className='font-semibold text-sm cursor-pointer hover:underline'>
                        {article.title}
                      </h3>
                    </div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className='w-16 h-16 rounded-md'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3>Gallery</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 rounded'>
              <img
                src={'../../../public/cycle.jpg'}
                alt=''
                className='rounded-md'
              />
              <img
                src={'../../../public/cycle.jpg'}
                alt=''
                className='rounded-md'
              />
              <img
                src={'../../../public/cycle.jpg'}
                alt=''
                className='rounded-md'
              />
              <img
                src={'../../../public/cycle.jpg'}
                alt=''
                className='rounded-md'
              />
            </div>
          </div>
          <div>
            <h3>Tags</h3>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 border bg-gray-50 p-4  rounded-sm justify-around items-center'>
              {categories.map((item) => (
                <button className='px-3 border bg-white py-1 gap-2 rounded-md'>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsHome;
