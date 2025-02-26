import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import { cn } from '@/lib/utils';
import { bikeFeatures, reasonToBuy } from '@/constants';
import { CircleCheckBig } from 'lucide-react';

export const BikeFeature = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container>
      <div className='relative overflow-hidden px-4 lg:px-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='container mx-auto'
        >
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            <h1 className='text-[200px] font-bold text-gray-200 opacity-30 dark:text-gray-500 dark:opacity-5 select-none'>
              SMART DRIVIN
            </h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <img
                src='../../../public/6.png'
                alt='Smart E-Bike'
                className='abosulte right-[360px] w-full h-auto mt-10'
              />
            </motion.div>

            <div className='flex flex-col justify-center '>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-5xl font-bold mb-6'
              >
                Trail Blazer
              </motion.h2>

              <div className='grid grid-cols-1 mb-6'>
                {bikeFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={cn(
                      'p-6 shadow-sm transition-all rounded-xl',
                      activeSlide === index
                        ? 'bg-primary/50 dark:bg-gray-600/10'
                        : 'light:bg-white border-b' 
                    )}
                  >
                    <h3 className='text-xl font-semibold mb-2 transition-all cursor-pointer hover:text-primary'>
                      {feature.title}
                    </h3>
                    <p className='text-sm'>
                      {feature.description}
                    </p>
                    <button className='mt-4 text-sm font-medium hover:text-primary transition-all duration-300 border-b border-gray-600 hover:border-b-primary'>
                      Explore
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className='flex items-center gap-3 mb-6 mx-auto'>
                {[0, 1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveSlide(dot)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all',
                      activeSlide === dot
                        ? 'w-[80px] bg-primary'
                        : 'bg-gray-300/15'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className='text-3xl lg:text-4xl font-bold mb-3'>
              Reason To Buy
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 space-y-2'>
              {reasonToBuy.map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <CircleCheckBig size={16} className='text-primary' />
                  <span className='text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};
