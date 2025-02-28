import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const logos = [
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736683/brand-6_xbbei1.png',
    alt: 'Mountain Biking Logo 1',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736682/brand-5_wzqfks.png',
    alt: 'Mountain Biking Logo 2',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736681/brand-4_oozicl.png',
    alt: 'Mountain Biking Logo 3',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736680/brand-3_iqa6ic.png',
    alt: 'Mountain Biking Logo 4',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736680/brand-2_rskmd1.png',
    alt: 'Mountain Biking Logo 5',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736680/brand-1_jevqdr.png',
    alt: 'Mountain Biking Logo 6',
  },
  {
    src: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1740736679/brand-7_hr72nk.png',
    alt: 'Mountain Biking Logo 6',
  },
];

export function Sponsored() {
  const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });

  return (
    <div className='w-full'>
      <Carousel
        plugins={[plugin]}
        className='w-full max-w-5xl mx-auto'
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className='pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5'
            >
              <div className='p-2'>
                <div
                  className={cn(
                    'relative overflow-hidden rounded-lg backdrop-blur-sm',
                    'transition-all duration-300 ease-in-out',
                    'hover:dark:bg-gray-700/20 hover:shadow-lg',
                    'group cursor-pointer'
                  )}
                >
                  <div className='aspect-square relative overflow-hidden p-6'>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={cn(
                        'object-contain w-full h-full',
                        'transition-transform duration-300',
                        'group-hover:scale-110',
                        'opacity-70 group-hover:opacity-100'
                      )}
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
