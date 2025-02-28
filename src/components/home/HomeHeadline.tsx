import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headlines = [
  {
    subHeading: 'Lightning Stride',
    heading: 'Speedster Pro',
    description:
      'Lightweight carbon frame with aerodynamic design, built for unmatched speed and precision on the road.',
  },
  {
    subHeading: 'Storm Rider',
    heading: 'Xtreme Surge',
    description:
      'High-performance electric motor with long-range battery, delivering effortless acceleration and extended rides.',
  },
  {
    subHeading: 'Thunder Glide',
    heading: 'Xtreme Edition',
    description:
      'Advanced suspension and durable alloy frame, ensuring a smooth, controlled, and high-speed cycling experience.',
  },
  {
    subHeading: 'Neo Flash',
    heading: 'Ultimate Ride',
    description:
      'Ergonomic design with intelligent ride-assist technology, offering comfort, power, and seamless performance.',
  },
];

const HomeHeadline = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative overflow-hidden w-fit'>
      <AnimatePresence mode='wait'>
        <motion.h1
          key={index}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='text-5xl font-bold leading-[88px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#f9f9f9] to-gray-700'
        >
          {headlines[index].subHeading}
          <br />
          <span className='text-7xl font-bold'>{headlines[index].heading}</span>
          <p className='text-lg normal-case w-[500px] font-normal mt-3'>
            {headlines[index].description}
          </p>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default HomeHeadline;
