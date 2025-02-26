import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface Product {
  id: number;
  image: string;
  category: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1683842178389-ec1bcaf025c1?q=80&w=2070&auto=format',
    category: 'BIKES',
    alt: 'Mountain bike with green accents',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1510766528597-60f9f1c154b6?q=80&w=2046&auto=format',
    category: 'ACCESSORIES',
    alt: 'White bike helmet',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523828789040-d3c7bab21300?q=80&w=1974&auto=format',
    category: 'PARTS',
    alt: 'Black and green cycling jersey',
  },
  {
    id: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1684096758450-61857c170f02?q=80&w=2070&auto=format',
    category: 'GEAR',
    alt: 'Black bike saddle',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?q=80&w=2070&auto=format',
    category: 'ELECTRONICS',
    alt: 'White water bottle',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523828789040-d3c7bab21300?q=80&w=1974&auto=format',
    category: 'PARTS',
    alt: 'Black and green cycling jersey',
  },
  {
    id: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1684096758450-61857c170f02?q=80&w=2070&auto=format',
    category: 'GEAR',
    alt: 'Black bike saddle',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?q=80&w=2070&auto=format',
    category: 'ELECTRONICS',
    alt: 'White water bottle',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523828789040-d3c7bab21300?q=80&w=1974&auto=format',
    category: 'PARTS',
    alt: 'Black and green cycling jersey',
  },
  {
    id: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1684096758450-61857c170f02?q=80&w=2070&auto=format',
    category: 'GEAR',
    alt: 'Black bike saddle',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?q=80&w=2070&auto=format',
    category: 'ELECTRONICS',
    alt: 'White water bottle',
  },
  {
    id: 7,
    image:
      'https://plus.unsplash.com/premium_photo-1683842178389-ec1bcaf025c1?q=80&w=2070&auto=format',
    category: 'BIKES',
    alt: 'Mountain bike with green accents',
  },
];

export function HomeGallery() {
  return (
    <div className='pt-10'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000, 
            stopOnInteraction: true, 
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className='basis-1/3 md:basis-1/6 pl-0'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                initial='hidden'
                animate='visible'
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className='relative group cursor-pointer'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className='w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
                <div className='absolute bottom-3 left-3 bg-green-500/50 text-white px-2 py-1 text-sm rounded-md'>
                  {product.category}
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
