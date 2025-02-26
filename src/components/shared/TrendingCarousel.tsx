import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trendingNews = [
  'This is What Physical Therapy Can Accomplish',
  'Secret Tools for Easy Projects’ Completion',
  'Are You Tired of Running in Time Circles?',
  'New Innovations in AI Technology',
  'How to Improve Your Daily Routine',
  'Top 10 Travel Destinations for 2025',
];

const TrendingCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? trendingNews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex items-center justify-between w-full overflow-hidden border-b pb-2'>
      <span className='text-red-500 font-bold flex items-center'>
        <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10 2l2 4 4 .5-3 3 .7 4.2-4-2-4 2 .7-4.2-3-3 4-.5 2-4z' />
        </svg>
        TRENDING
      </span>
      <div className='flex gap-4 w-full justify-center items-center overflow-hidden'>
        {trendingNews
          .slice(startIndex, startIndex + visibleItems)
          .map((news, index) => (
            <span key={index} className='text-sm text-gray-700 truncate hover:text-red-500 cursor-pointer'>
              {news}
            </span>
          ))}
      </div>
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon' onClick={handlePrev}>
          ←
        </Button>
        <Button variant='ghost' size='icon' onClick={handleNext}>
          →
        </Button>
      </div>
    </div>
  );
};

export default TrendingCarousel;
