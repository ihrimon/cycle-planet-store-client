import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const slides = [
  {
    title: 'Scott Addict RC Pro',
    description:
      'When there is a long day full of climbs ahead of you, the Addict RC should be your first choice.',
    image: '/1.png',
  },
  {
    title: 'SpeedX Leopard Pro',
    description:
      'Aero optimized road bike for speed enthusiasts, built for ultimate performance.',
    image: '/2.png',
  },
  {
    title: 'Trek Madone SLR 9',
    description:
      'The most advanced aero road bike with ultra-lightweight carbon fiber frame.',
    image: '/3.png',
  },
];

const CustomSlider = () => {
  return (
    <div className='relative w-full h-[500px] flex items-center justify-center bg-black px-10'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className='w-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center justify-center'>
              {/* Left Side - Text */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-white flex flex-col items-center justify-center'
              >
                <h1 className='text-5xl font-bold mb-4'>{slide.title}</h1>
                <p className='text-lg text-gray-300 mb-6'>
                  {slide.description}
                </p>
                <div className='flex gap-4'>
                  <button className='bg-green-500 text-white px-6 py-2 rounded-lg'>
                    Learn More
                  </button>
                  <button className='border border-gray-300 text-white px-6 py-2 rounded-lg'>
                    Find a Dealer
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Bike Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='flex items-center justify-center'
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className='w-full max-w-lg mx-auto object-contain'
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
