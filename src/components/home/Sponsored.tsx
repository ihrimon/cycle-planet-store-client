import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const logos = [
  {
    src: '../../../public/brand-1.png',
    alt: 'Mountain Biking Logo 1',
  },
  {
    src: '../../../public/brand-2.png',
    alt: 'Mountain Biking Logo 2',
  },
  {
    src: '../../../public/brand-3.png',
    alt: 'Mountain Biking Logo 3',
  },
  {
    src: '../../../public/brand-4.png',
    alt: 'Mountain Biking Logo 4',
  },
  {
    src: '../../../public/brand-5.png',
    alt: 'Mountain Biking Logo 5',
  },
  {
    src: '../../../public/brand-6.png',
    alt: 'Mountain Biking Logo 6',
  },
  {
    src: '../../../public/brand-7.png',
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
